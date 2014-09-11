define(['Trigger', 'utils/dom'], function(Trigger, dom) {

    var numOfTriggers = 10,
        triggers = [];

    function createTriggers(n) {
        for(var i = 0; i < n; i++) {
             triggers.push(new Trigger());
        }
    }

    function drawTriggers(container) {
        triggers.forEach(function(trigger) {
            trigger.draw(container);
        });
    }

    function init(container) {
        console.log('initialise synth biz');
        var containerElement = new dom.Element(container);
        createTriggers(numOfTriggers);
        drawTriggers(containerElement);
    }

    return {
        init: init
    };
});