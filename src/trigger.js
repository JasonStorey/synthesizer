define([], function() {

    function Trigger(audioContext) {
        this.audioContext = audioContext;
        this.oscillators = [];
    }

    Trigger.prototype.play = function play() {
        this.oscillators.forEach(function(oscillator) {
            oscillator.start();
        });
    };

    Trigger.prototype.pause = function pause() {
        this.oscillators.forEach(function(oscillator) {
            oscillator.stop();
        });
    };

    Trigger.prototype.addOscillator = function addOscillator(oscillator) {
        this.oscillators.push(oscillator);
    };

    return Trigger;
});