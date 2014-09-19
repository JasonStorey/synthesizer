define(['audio/envelope', 'audio/gain', 'audio/oscillator', 'audio/patch', 'audio/system', 'instrument', 'trigger', 'music/scale'], function(Envelope, Gain, Oscillator, Patch, system, Instrument, Trigger, Scale) {

    (function() {
        system.init();
    }());

    return {
        Envelope: Envelope,
        Gain: Gain,
        Oscillator: Oscillator,
        Patch: Patch,
        Instrument: Instrument,
        Trigger: Trigger,
        Scale: Scale
    };
});