define(['trigger', 'audio/oscillator', 'audio/gain', 'audio/envelope'], function(Trigger, Oscillator, Gain, Envelope) {

    function Instrument(config) {
        this.triggers = [];
        this.audioContext = config.audioContext; // TODO : Instruments shouldn't need to know about audioContext
        this.scale = config.scale;
        this.volume = config.volume;
        this.oscillatorConfigs = [];
    }

    Instrument.prototype.addTriggers = function addTriggers(numberOfTriggers) {

        for(var i = 0; i < numberOfTriggers; i++) {

            this.triggers.push(new Trigger());

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
            frequency: freq
        });

        //TODO: here until I work out where best to create gain nodes
        var ampEnv = new Envelope({
            attack: config.attack,
            release: config.release
        });

        var gain = new Gain({
            audioContext: this.audioContext,
            envelope: ampEnv,
            volume: config.gain * this.volume
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