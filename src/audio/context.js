define(['utils/window'], function(window) {

    var audioContext;

    function init() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    function createOscillator() {
        var gainNode = audioContext.createGain(),
            oscillator = audioContext.createOscillator();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        return oscillator;
    }

    return {
        init: init,
        createOscillator: createOscillator
    };
});