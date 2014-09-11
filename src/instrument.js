define(['trigger', 'music/scale'], function(Trigger, scale) {
    function Instrument(container, audioContext, n) {
        this.numOfTriggers = n;
        this.triggers = [];
        this.audioContext = audioContext;
        this.element = container;
    }

    Instrument.prototype.createTriggers = function createTriggers() {
        var C_MAJOR = scale.create('C');
        for(var i = 0; i < this.numOfTriggers; i++) {
            this.triggers.push(new Trigger(this.audioContext));
            this.triggers[i].configure({
                type: 'square',
                freq: C_MAJOR[i + 21],
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