function Trigger(config) {
    this.note = config && config.note || 440;
}

Trigger.prototype.play = function play(velocity) {
    if(!this.signal) {
        console.log('no signal to play');
        return;
    }
    this.signal.play(this.note, velocity);
};

Trigger.prototype.pause = function pause() {
    if(!this.signal) {
        console.log('no signal to pause');
        return;
    }
    this.signal.pause();
};

Trigger.prototype.setSignal = function setSignal(signal) {
    this.signal = signal;
};

module.exports = Trigger;
