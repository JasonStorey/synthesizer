define(['audio/envelope', 'audio/gain', 'audio/oscillator', 'audio/system', 'instrument', 'trigger', 'music/scale'], function(Envelope, Gain, Oscillator, System, Instrument, Trigger, Scale) {

    var instruments = [],
        system;

    function init() {
        system = new System();
    }

    function createInstrument(config) {
        var scale = Scale.create(config.startNote, config.octave, config.tonality),
            instrumentConfig = {
                audioContext: system.audioContext,
                scale: scale,
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