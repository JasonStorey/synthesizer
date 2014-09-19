define([], function() {
    function Signal() {
        this.oscillators = []
    }

    Signal.prototype.addOscillator = function addOscillator(osc) {
        this.oscillators.push(osc);
    };

    Signal.prototype.play = function play(note) {
        this.oscillators.forEach(function(osc) {
            osc.start(note);
        });
    };

    Signal.prototype.pause = function pause() {
        this.oscillators.forEach(function(osc) {
            osc.stop();
        });
    };

    return Signal;
});