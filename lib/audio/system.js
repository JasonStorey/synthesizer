var AudioContext = require('../utils/audio-context'),
    ERROR = require('../utils/error');

var audioContext;

function init() {
    audioContext = new AudioContext();
}

function getAudioContext() {
    if(!audioContext) {
        throw new Error(ERROR.SETUP_ERROR);
    }

    return audioContext;
}

function getOutput() {
    if(!audioContext || !audioContext.destination) {
        throw new Error(ERROR.SETUP_ERROR);
    }

    return audioContext.destination;
}

module.exports = {
    init: init,
    getOutput: getOutput,
    getAudioContext: getAudioContext
};
