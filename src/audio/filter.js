define(['audio/system'], function(system) {
    function Filter(config) {
        this.audioContext = config.audioContext || system.getAudioContext();

        this._biquadFilter = this.audioContext.createBiquadFilter();
        this._biquadFilter.type = config.type;
        this._biquadFilter.frequency.value = config.frequency;
        this._biquadFilter.gain.value = config.gain;
    }

    Filter.prototype.connect = function connect(node) {
        this.output = node;
        this._biquadFilter.connect(this.output.getInput());
    };

    Filter.prototype.getInput = function getInput() {
        return this._biquadFilter;
    };

    Filter.prototype.start = function start() {
        this.output.start();
    };

    Filter.prototype.stop = function stop() {
        this.output.stop();
    };

    return Filter;
});