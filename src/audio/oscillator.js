define([], function() {
    function Oscillator(config) {
        this.type = config.type;
        this.frequency = config.frequency;
        this.gain = config.gain; // TODO: convert to filter
        this.audioContext = config.audioContext;
    }

    Oscillator.prototype.start = function start() {
        this._oscillator = this.audioContext.createOscillator();
        this._oscillator.type = this.type;
        this._oscillator.frequency.value = this.frequency;

        var gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.gain;
        this._oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.getDestination());

        this._oscillator.start();
    };

    Oscillator.prototype.stop = function stop() {
        this._oscillator.stop();
    };

    return Oscillator;
});