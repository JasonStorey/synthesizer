define(['utils/window'], function(window) {

    var audioContext;

    function init() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    function createOscillator() {
        return audioContext.createOscillator();
    }

    function createGain() {
        return audioContext.createGain();
    }

    return {
        init: init,
        createOscillator: createOscillator,
        createGain: createGain,
        getDestination: function() {
            return audioContext.destination;
        },
        getCurrentTime: function() {
            return audioContext.currentTime;
        }
    };
});