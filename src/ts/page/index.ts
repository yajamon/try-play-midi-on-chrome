/// <reference path="../../../typings/vue/vue.d.ts" />

let audioCtx = new AudioContext();

window.addEventListener('load', () => {
    let vm = new Vue({
        el: "#app",
        data: {
            audioNodes: [],
        },
        methods: {
            addOscillator: function () {
                let oscillator = audioCtx.createOscillator();
                oscillator.type = "sine";
                oscillator.frequency.value = 440;
                oscillator.connect(audioCtx.destination);
                oscillator.start();
                this.audioNodes.push(oscillator);
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

