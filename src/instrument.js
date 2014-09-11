define(['trigger', 'music/scale'], function(Trigger, scale) {

    function Instrument(container, audioContext, n, key) {
        this.numOfTriggers = n;
        this.triggers = [];
        this.audioContext = audioContext;
        this.element = container;
        this.scale = scale.create(key);
    }

    Instrument.prototype.createTriggers = function createTriggers() {

        for(var i = 0; i < this.numOfTriggers; i++) {

            this.triggers.push(new Trigger(this.audioContext));
            this.triggers[i].configure({
                type: 'square',
                freq: this.scale[i + 21],
                gain: 0.05
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