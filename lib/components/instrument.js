var Trigger = require('./trigger'),
    Patch = require('../audio/patch');

var DEFAULT_PATCH = new Patch({
    timbres: [{
        type: 'sine',
        volume: 1
    }]
});

function Instrument(config) {
    this.notes = config && config.notes || [];
    this.patches = config && config.patches || [DEFAULT_PATCH];

    this.triggers = this.notes.map(function(note) {
        return new Trigger({
            note: note
        });
    });

    this.selectPatch(0);
}

Instrument.prototype.addPatch = function addPatch(patch) {
    this.patches.push(patch);
    this.selectPatch(this.patches.length - 1);
};

Instrument.prototype.selectPatch = function selectPatch(n) {
    this.triggers.forEach(function(trigger) {
        var signal = this.patches[n].getSignal(trigger.note);
        trigger.setSignal(signal);

    }.bind(this));
};

module.exports = Instrument;
