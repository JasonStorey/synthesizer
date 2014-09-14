define(['audio/gain'], function(Gain) {
    function Oscillator(config) {
        this.type = config.type;
        this.frequency = config.frequency;
        this.audioContext = config.audioContext;
        this.attack = config.attack || 0.001;
        this.decay = config.decay || 0.001;
        this.volume = config.gain; // TODO: manage gain/volume externally
        this.gain = new Gain({
            audioContext: config.audioContext
        });
        this.gain.connect(this.audioContext.getDestination());
    }

    Oscillator.prototype.connect = function connect(node) {
        this.output = node;
        this._oscillator.connect(this.output);
    };

    Oscillator.prototype.start = function start() {
        if(this._oscillator) {
            this._oscillator.stop();
            this._oscillator = null
        }

        this._oscillator = this.audioContext.createOscillator();
        this._oscillator.type = this.type;
        this._oscillator.frequency.value = this.frequency;

        this.gain.fadeTo(this.volume, this.attack);

        this.connect(this.gain.getInput());
        this._oscillator.start();
    };

    Oscillator.prototype.stop = function stop() {
        this.gain.fadeTo(0, this.decay);
    };

    return Oscillator;
});