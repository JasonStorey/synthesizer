define(['instrument', 'utils/dom', 'audio/context'], function(Instrument, dom, audioContext) {

    function init() {
        audioContext.init();
    }

    function addInstrument(config) {
        var instrumentConfig = {
                element: new dom.Element(config.element),
                audioContext: audioContext,
                numOfTriggers: config.numOfTriggers,
                startNote: config.startNote,
                tonality: config.tonality,
                octave: config.octave
            },
            instrument;

        instrument = new Instrument(instrumentConfig);

        instrument.createTriggers();
        instrument.drawTriggers();
    }

    return {
        init: init,
        addInstrument: addInstrument
    };
});