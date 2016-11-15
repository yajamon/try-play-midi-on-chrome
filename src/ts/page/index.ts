/// <reference path="../../../typings/vue/vue.d.ts" />

let audioCtx = new AudioContext();
let audioNodes: AudioNode[] = [];
let analyser = audioCtx.createAnalyser();
let canvas: HTMLCanvasElement;
let canvasCtx: CanvasRenderingContext2D;

analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

function drawWave() {
    let drawVisual = requestAnimationFrame(drawWave);
    let WIDTH = canvas.width;
    let HEIGHT = canvas.height;

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

    canvasCtx.beginPath();

    var sliceWidth = WIDTH * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * HEIGHT / 2;

        if (i === 0) {
            canvasCtx.moveTo(x, y);
        } else {
            canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
}

window.addEventListener('load', () => {
    canvas = document.getElementById("waveRender") as HTMLCanvasElement;
    canvasCtx = canvas.getContext("2d") as CanvasRenderingContext2D;
    drawWave();

    let vm = new Vue({
        el: "#app",
        data: {
            audioNodes: audioNodes,
            oscillatorTypes: [
                "sine",
                "square",
                "sawtooth",
                "triangle",
            ],
        },
        methods: {
            addOscillator: function () {
                let oscillator = audioCtx.createOscillator();
                oscillator.type = "sine";
                oscillator.frequency.value = 440;
                oscillator.start();

                oscillator.connect(analyser);

                let gain = audioCtx.createGain();
                oscillator.connect(gain);
                gain.connect(audioCtx.destination);

                this.audioNodes.push(oscillator);
                this.audioNodes.push(gain);
            },
            removeNode: function (node:AudioNode) {
                let nodes: AudioNode[] = this.$data.audioNodes;

                if (node instanceof OscillatorNode) {
                    node as OscillatorNode;
                    node.stop();
                }
                node.disconnect();
                nodes.$remove(node);
            },
            isOscillator(node: AudioNode) {
                if (node instanceof OscillatorNode) {
                    return true;
                }
                return false
            },
            isGain(node: AudioNode) {
                if (node instanceof GainNode) {
                    return true;
                }
                return false;
            },
        },
    });
    
});

