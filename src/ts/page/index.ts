/// <reference path="../../../typings/vue/vue.d.ts" />

let audioCtx = new AudioContext();

window.addEventListener('load', () => {
    let vm = new Vue({
        el: "#app",
        data: {
            audioNodes: [],
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
        },
    });
    
});

