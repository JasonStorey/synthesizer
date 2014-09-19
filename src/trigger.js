define([], function() {

    function Trigger() {
    }

    Trigger.prototype.play = function play() {
        this.signal.play();
    };

    Trigger.prototype.pause = function pause() {
        this.signal.pause();
    };

    Trigger.prototype.setSignal = function setSignal(signal) {
        this.signal = signal;
    };

    return Trigger;
});