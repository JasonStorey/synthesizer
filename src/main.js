define(['instrument', 'utils/dom', 'audio/context'], function(Instrument, dom, audioContext) {

    function init(elements) {
        var containers = [];
        audioContext.init();

        if(elements instanceof Array === false) {
            containers.push(elements);
        } else {
            containers = elements;
        }

        containers.forEach(function(container) {
            var containerElement = new dom.Element(container),
                instrument = new Instrument(containerElement, audioContext, 24);

            instrument.createTriggers();
            instrument.drawTriggers();
        });

    }

    return {
        init: init
    };
});