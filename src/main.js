define(['instrument', 'audio/context'], function(Instrument, audioContext) {

    var instruments = [];

    function init() {
        audioContext.init();
    }

    function createInstrument(config) {
        var instrumentConfig = {
                audioContext: audioContext,
                startNote: config.startNote,
                tonality: config.tonality,
                octave: config.octave,
                gain: config.gain
            },
            instrument;

        instrument = new Instrument(instrumentConfig);

        instrument.addTriggers(config.numOfTriggers);

        instruments.push(instrument);

        return instrument;
    }

    return {
        init: init,
        createInstrument: createInstrument
    };
});