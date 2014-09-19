define([], function() {
    function Signal() {
        this.oscillators = []
    }

    Signal.prototype.addOscillator = function addOscillator(osc) {
        this.oscillators.push(osc);
    };

    Signal.prototype.play = function play() {
        this.oscillators.forEach(function(osc) {
            osc.start();
        });
    };

    Signal.prototype.pause = function pause() {
        this.oscillators.forEach(function(osc) {
            osc.stop();
        });
    };

    return Signal;
});