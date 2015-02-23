function Signal() {
    this.oscillators = []
}

Signal.prototype.addOscillator = function addOscillator(osc) {
    this.oscillators.push(osc);
};

Signal.prototype.play = function play(note, velocity) {
    this.oscillators.forEach(function(osc) {
        osc.start(note, velocity);
    });
};

Signal.prototype.pause = function pause() {
    this.oscillators.forEach(function(osc) {
        osc.stop();
    });
};

module.exports = Signal;
