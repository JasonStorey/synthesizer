define([], function() {
    function Oscillator(config) {
        this.type = config.type;
        this.frequency = config.frequency;
        this.audioContext = config.audioContext;
        this.attack = config.attack || 0.001;
        this.decay = config.decay || 0.001;
        this.volume = config.volume;

        this._oscillator = this.audioContext.createOscillator();
        this._oscillator.start();
        this._oscillator.type = this.type;
        this._oscillator.frequency.value = this.frequency;
    }

    Oscillator.prototype.connect = function connect(node) {
        this.output = node;
        this._oscillator.connect(this.output.getInput());
    };

    Oscillator.prototype.start = function start() {
        this.output.fadeTo(this.volume, this.attack);
    };

    Oscillator.prototype.stop = function stop() {
        this.output.fadeTo(0, this.decay);
    };

    return Oscillator;
});