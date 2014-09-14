define(['trigger', 'music/scale', 'audio/oscillator', 'audio/gain'], function(Trigger, scale, Oscillator, Gain) {

    function Instrument(config) {
        this.triggers = [];
        this.audioContext = config.audioContext;
        this.scale = scale.create(config.startNote, config.octave, config.tonality);
        this.volume = config.volume;
        this.oscillatorConfigs = [];
    }

    Instrument.prototype.addTriggers = function addTriggers(numberOfTriggers) {

        for(var i = 0; i < numberOfTriggers; i++) {

            this.triggers.push(new Trigger(this.audioContext));

            this.oscillatorConfigs.forEach(function(config) {

                var oscillator = this.getOscillatorFromConfig(config, this.scale[i]);
                this.triggers[i].addOscillator(oscillator);

            }.bind(this));
        }
    };

    Instrument.prototype.getOscillatorFromConfig = function getOscillatorFromConfig(config, freq) {
        var oscillator = new Oscillator({
            audioContext: this.audioContext,
            type: config.type,
            frequency: freq,
            volume: config.gain * this.volume,
            attack: config.attack,
            decay: config.decay
        });

        //TODO: here until I work out where best to create gain nodes
        var gain = new Gain({
            audioContext: this.audioContext
        });

        gain.connect(this.audioContext.getDestination());
        oscillator.connect(gain);

        return oscillator;
    };

    Instrument.prototype.addOscillatorConfig = function addOscillatorConfig(config) {

        this.oscillatorConfigs.push(config);

        this.triggers.forEach(function(trigger, i) {

            var oscillator = this.getOscillatorFromConfig(config, this.scale[i]);
            trigger.addOscillator(oscillator);

        }.bind(this));
    };

    return Instrument;
});