define(['instrument', 'audio/system'], function(Instrument, System) {

    var instruments = [],
        system;

    function init() {
        system = new System();
    }

    function createInstrument(config) {
        var instrumentConfig = {
                audioContext: system.audioContext,
                startNote: config.startNote,
                tonality: config.tonality,
                octave: config.octave,
                volume: config.volume
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