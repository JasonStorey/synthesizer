define(['trigger', 'music/scale'], function(Trigger, scale) {

    function Instrument(config) {
        this.numOfTriggers = config.numOfTriggers;
        this.triggers = [];
        this.audioContext = config.audioContext;
        this.element = config.element;
        this.scale = scale.create(config.startNote, config.octave, config.tonality);
        this.gain = config.gain;
    }

    Instrument.prototype.createTriggers = function createTriggers() {

        for(var i = 0; i < this.numOfTriggers; i++) {

            this.triggers.push(new Trigger(this.audioContext));
            this.triggers[i].configure({
                type: 'square',
                freq: this.scale[i],
                gain: this.gain
            });
        }

    };

    Instrument.prototype.drawTriggers = function drawTriggers() {

        this.triggers.forEach(function(trigger) {

            trigger.draw(this.element);

            trigger.element.on('mouseover', function() {
                trigger.play();
            });

            trigger.element.on('mouseout', function() {
                trigger.pause();
            });

        }.bind(this));
    };

    return Instrument;
});