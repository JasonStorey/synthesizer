define(['instrument', 'utils/dom', 'audio/context'], function(Instrument, dom, audioContext) {

    function init() {
        audioContext.init();
    }

    function addInstrument(config) {
        var containerElement = new dom.Element(config.element),
            instrument = new Instrument(containerElement, audioContext, config.numOfTriggers, config.key);

        instrument.createTriggers();
        instrument.drawTriggers();
    }

    return {
        init: init,
        addInstrument: addInstrument
    };
});