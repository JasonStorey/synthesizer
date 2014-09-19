define([], function() {

    function Trigger(config) {
        this.note = config.note;
    }

    Trigger.prototype.play = function play() {
        this.signal.play(this.note);
    };

    Trigger.prototype.pause = function pause() {
        this.signal.pause();
    };

    Trigger.prototype.setSignal = function setSignal(signal) {
        this.signal = signal;
    };

    return Trigger;
});