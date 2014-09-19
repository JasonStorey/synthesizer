define([], function() {
    function Oscillator(config) {
        this.type = config.type;
        this.audioContext = config.audioContext;

        this._oscillator = this.audioContext.createOscillator();
        this._oscillator.start();
        this._oscillator.type = this.type;

        this.setFrequency(config.frequency || 440);
    }

    Oscillator.prototype.setFrequency = function setFrequency(freq) {
        this.frequency = freq;
        this._oscillator.frequency.value = this.frequency;
    };

    Oscillator.prototype.connect = function connect(node) {
        this.output = node;
        this._oscillator.connect(this.output.getInput());
    };

    Oscillator.prototype.start = function start(freq) {
        if(freq) {
            this.setFrequency(freq);
        }
        this.output.start();
    };

    Oscillator.prototype.stop = function stop() {
        this.output.stop();
    };

    return Oscillator;
});