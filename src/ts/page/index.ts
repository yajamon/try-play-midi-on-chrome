let audioCtx = new AudioContext();
let oscillator =  audioCtx.createOscillator();

oscillator.type = "sine";
oscillator.frequency.value = 440;
oscillator.connect(audioCtx.destination);

oscillator.start();
