var AudioContext = require('../utils/audio-context');

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
module.exports = {
    init: init,
    getOutput: getOutput,
    getAudioContext: getAudioContext
};
