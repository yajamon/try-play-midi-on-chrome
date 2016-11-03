let audioCtx = new AudioContext();

window.addEventListener("load", () => {
    var oscillator: OscillatorNode;
    document.getElementsByClassName("play")[0].addEventListener("click", () => {
        oscillator = audioCtx.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.value = 440;
        oscillator.connect(audioCtx.destination);
        oscillator.start();
    });
    document.getElementsByClassName("pause")[0].addEventListener("click", () => {
        oscillator.stop();
    });
});
