define(['Trigger', 'utils/dom', 'audio/context'], function(Trigger, dom, audioContext) {

    var numOfTriggers = 10,
        triggers = [];

    function createTriggers(audioContext, n) {
        for(var i = 0; i < n; i++) {
            triggers.push(new Trigger(audioContext));
            triggers[i].configure({
                type: 'square',
                freq: 120 * (i + 1)
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