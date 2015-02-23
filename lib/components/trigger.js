function Trigger(config) {
    this.note = config.note;
}

Trigger.prototype.play = function play(velocity) {
    this.signal.play(this.note, velocity);
};

Trigger.prototype.pause = function pause() {
    this.signal.pause();
};

Trigger.prototype.setSignal = function setSignal(signal) {
    this.signal = signal;
};

module.exports = Trigger;
