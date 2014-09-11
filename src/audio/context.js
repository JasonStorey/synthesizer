define(['utils/window'], function(window) {

    var audioContext;

    function init() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    function createOscillator(config) {
        var gainNode = audioContext.createGain(),
            oscillator = audioContext.createOscillator();

        oscillator.type = config.type;
        oscillator.frequency.value = config.freq;

        gainNode.gain.value = config.gain;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        return oscillator;
    }

    return {
        init: init,
        createOscillator: createOscillator
    };
});