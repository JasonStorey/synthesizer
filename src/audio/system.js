define(['utils/audio-context'], function(AudioContext) {
    var audioContext;

    function init() {
        audioContext = new AudioContext();
    }

    function getAudioContext() {
        return audioContext;
    }

    function getOutput() {
        return audioContext.getDestination();
    }

    return {
        init: init,
        getOutput: getOutput,
        getAudioContext: getAudioContext
    };
});