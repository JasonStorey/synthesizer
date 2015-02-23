var window = require('./window'),
    ERROR = require('./error');

function AudioContext() {
    var AudioContext = window.AudioContext || window.webkitAudioContext;

    if(!AudioContext) {
        throw new Error(ERROR.UNSUPPORTED_FEATURE);
    }

    this._audioContext = new (window.AudioContext || window.webkitAudioContext)();

    Object.defineProperty(this, 'destination', {
        get: function() {
            return this._audioContext.destination;
        }
    });

    Object.defineProperty(this, 'currentTime', {
        get: function() {
            return this._audioContext.currentTime;
        }
    });
}

AudioContext.prototype.createOscillator = function createOscillator() {
    return this._audioContext.createOscillator();
};

AudioContext.prototype.createGain = function createGain() {
    return this._audioContext.createGain();
};

AudioContext.prototype.createBiquadFilter = function createBiquadFilter() {
    return this._audioContext.createBiquadFilter();
};

module.exports = AudioContext;
