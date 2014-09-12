define(['trigger', 'music/scale', 'audio/oscillator'], function(Trigger, scale, Oscillator) {

    function Instrument(config) {
        this.triggers = [];
        this.audioContext = config.audioContext;
        this.scale = scale.create(config.startNote, config.octave, config.tonality);
        this.gain = config.gain;
        this.oscillatorTypes = [];
    }

    Instrument.prototype.addTriggers = function addTriggers(numberOfTriggers) {

        for(var i = 0; i < numberOfTriggers; i++) {

            this.triggers.push(new Trigger(this.audioContext));

            this.oscillatorTypes.forEach(function(type) {

                var oscillator = new Oscillator({
                    audioContext: this.audioContext,
                    type: type,
                    frequency: this.scale[i],
                    gain: this.gain
                });

                this.triggers[i].addOscillator(oscillator);

            }.bind(this));
        }
    };

    Instrument.prototype.addOscillatorType = function addOscillatorType(type) {

        this.oscillatorTypes.push(type);

        this.triggers.forEach(function(trigger, i) {

            var oscillator = new Oscillator({
                audioContext: this.audioContext,
                type: type,
                frequency: this.scale[i],
                gain: this.gain
            });

            trigger.addOscillator(oscillator);

        }.bind(this));
    };

    return Instrument;
});