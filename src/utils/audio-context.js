define(['utils/window'], function(window) {

    function AudioContext() {
        this._audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    AudioContext.prototype.createOscillator = function createOscillator() {
        return this._audioContext.createOscillator();
    };

    AudioContext.prototype.createGain = function createGain() {
        return this._audioContext.createGain();
    };

    AudioContext.prototype.getDestination = function getDestination() {
        return this._audioContext.destination;
    };

    AudioContext.prototype.getCurrentTime = function getCurrentTime() {
        return this._audioContext.currentTime;
    };

    return AudioContext;
});