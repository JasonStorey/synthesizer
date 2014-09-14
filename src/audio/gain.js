define([], function() {
    function Gain(config) {
        this.audioContext = config.audioContext;

        this._gainNode = this.audioContext.createGain();
        this._gainNode.gain.value = 0;
    }

    Gain.prototype.getInput = function getInput() {
        return this._gainNode;
    };

    Gain.prototype.connect = function connect(node) {
        this.output = node;
        this._gainNode.connect(this.output);
    };

    Gain.prototype.set = function set(val) {
        this.fadeTo(val, 0);
    };

    Gain.prototype.fadeTo = function fadeTo(val, seconds) {
        var startTime = this.audioContext.getCurrentTime();
        this._gainNode.gain.cancelScheduledValues(startTime);
        this._gainNode.gain.setValueAtTime(this._gainNode.gain.value, startTime);
        this._gainNode.gain.linearRampToValueAtTime(val, startTime + seconds);
    };

    return Gain;
});