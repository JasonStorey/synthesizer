define(['trigger', 'music/scale'], function(Trigger, scale) {

    function Instrument(config) {
        this.triggers = [];
        this.audioContext = config.audioContext;
        this.scale = scale.create(config.startNote, config.octave, config.tonality);
        this.gain = config.gain;
    }

    Instrument.prototype.addTriggers = function addTriggers(numberOfTriggers) {

        for(var i = 0; i < numberOfTriggers; i++) {

            this.triggers.push(new Trigger(this.audioContext));

            this.triggers[i].configure({
                type: 'square',
                freq: this.scale[i],
                gain: this.gain
            });
        }

    };

    return Instrument;
});