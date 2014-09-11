define(['Trigger', 'utils/dom', 'audio/context', 'music/scale'], function(Trigger, dom, audioContext, scale) {

    var numOfTriggers = 16,
        triggers = [];

    function createTriggers(audioContext, n) {
        var C_MAJOR = scale.create('C');
        for(var i = 0; i < n; i++) {
            triggers.push(new Trigger(audioContext));
            triggers[i].configure({
                type: 'square',
                freq: C_MAJOR[i + 21]
            });
        }
    }

    function drawTriggers(container) {
        triggers.forEach(function(trigger) {
            trigger.draw(container);
            trigger.element.on('mouseover', function() {
                trigger.play();
            });

            trigger.element.on('mouseout', function() {
                trigger.pause();
            });
        });
    }

    function init(container) {
        var containerElement = new dom.Element(container);
        audioContext.init();
        createTriggers(audioContext, numOfTriggers);
        drawTriggers(containerElement);
    }

    return {
        init: init
    };
});