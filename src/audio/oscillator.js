define([], function() {
    function Oscillator(config) {
        this.type = config.type;
        this.frequency = config.frequency;
        this.gain = config.gain; // TODO: convert to filter
        this.audioContext = config.audioContext;
    }

    Oscillator.prototype.start = function start() {
        if(this._oscillator) {
            this._oscillator.stop();
        }
        this._oscillator = this.audioContext.createOscillator();
        this._oscillator.type = this.type;
        this._oscillator.frequency.value = this.frequency;

        this._gainNode = this.audioContext.createGain();
        this._gainNode.gain.value = this.gain;
        this._oscillator.connect(this._gainNode);
        this._gainNode.connect(this.audioContext.getDestination());

        this._oscillator.start();
    };

    Oscillator.prototype.stop = function stop() {
        this._gainNode.gain.value = 0;
        this._gainNode = null;
    };

    return Oscillator;
});