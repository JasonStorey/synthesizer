define(['instrument', 'audio/context'], function(Instrument, audioContext) {

    var instruments = [];

    function init() {
        audioContext.init();
    }

    function createInstrument(config) {
        var instrumentConfig = {
                audioContext: audioContext,
                numOfTriggers: config.numOfTriggers,
                startNote: config.startNote,
                tonality: config.tonality,
                octave: config.octave,
                gain: config.gain
            },
            instrument;

        instrument = new Instrument(instrumentConfig);

        instrument.createTriggers();

        instruments.push(instrument);

        return instrument;
    }

    return {
        init: init,
        createInstrument: createInstrument
    };
});