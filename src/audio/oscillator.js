define([], function() {
    function Oscillator(config) {
        this.type = config.type;
        this.frequency = config.frequency;
        this.audioContext = config.audioContext;
        this.attack = config.attack || 0.001;
        this.decay = config.decay || 0.001;
        this.gain = config.gain;
        this._gainNode = this.audioContext.createGain();
        this._gainNode.gain.value = 0;
    }

    Oscillator.prototype.start = function start() {
        var startTime = this.audioContext.getCurrentTime();
        if(this._oscillator) {
            this._oscillator.stop();
            this._oscillator = null
        }

        this._oscillator = this.audioContext.createOscillator();
        this._oscillator.type = this.type;
        this._oscillator.frequency.value = this.frequency;

        this._gainNode.gain.cancelScheduledValues(startTime);
        this._gainNode.gain.setValueAtTime(this._gainNode.gain.value, startTime);
        this._gainNode.gain.linearRampToValueAtTime(this.gain, startTime + this.attack);

        this._oscillator.connect(this._gainNode);
        this._gainNode.connect(this.audioContext.getDestination());

        this._oscillator.start();
    };

    Oscillator.prototype.stop = function stop() {
        var stopTime = this.audioContext.getCurrentTime();
        this._gainNode.gain.cancelScheduledValues(stopTime);
        this._gainNode.gain.setValueAtTime(this._gainNode.gain.value, stopTime);
        this._gainNode.gain.linearRampToValueAtTime(0.0, stopTime + this.decay);
    };

    return Oscillator;
});