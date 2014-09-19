define(['trigger'], function(Trigger) {

    function Instrument(config) {
        this.triggers = [];
        this.scale = config.scale;
        this.volume = config.volume || 1.0;
        this.patches = [];
    }

    Instrument.prototype.addTriggers = function addTriggers(numberOfTriggers) {
        for(var i = 0; i < numberOfTriggers; i++) {
            this.triggers.push(new Trigger());
        }
    };

    Instrument.prototype.addPatch = function addPatch(patch) {
        this.patches.push(patch);
        this.selectPatch(0);
    };

    Instrument.prototype.selectPatch = function selectPatch(n) {
        this.triggers.forEach(function(trigger, i) {
            var signal = this.patches[n].getSignalForNote(this.scale[i]);
            trigger.setSignal(signal);
        }.bind(this));
    };

    return Instrument;
});