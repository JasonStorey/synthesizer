define(['audio/envelope', 'audio/gain', 'audio/oscillator', 'audio/system', 'instrument', 'trigger'], function(Envelope, Gain, Oscillator, System, Instrument, Trigger) {

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
        createInstrument: createInstrument,
        Envelope: Envelope,
        Gain: Gain,
        Oscillator: Oscillator,
        System: System,
        Instrument: Instrument,
        Trigger: Trigger
    };
});