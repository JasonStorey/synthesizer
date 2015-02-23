var Trigger = require('./trigger');

function Instrument(config) {
    this.triggers = [];
    this.notes = config.notes;
    this.volume = config.volume || 1.0;
    this.patches = [];

    this.addTriggers(this.notes.length);
}

Instrument.prototype.addTriggers = function addTriggers(numberOfTriggers) {
    for(var i = 0; i < numberOfTriggers; i++) {
        this.triggers.push(new Trigger({
            note: this.notes[i]
        }));
    }
};

Instrument.prototype.addPatch = function addPatch(patch) {
    this.patches.push(patch);
    this.selectPatch(0);
};

Instrument.prototype.selectPatch = function selectPatch(n) {
    this.triggers.forEach(function(trigger) {

        var signal = this.patches[n].getSignal(trigger.note);
        trigger.setSignal(signal);

    }.bind(this));
};

module.exports = Instrument;
