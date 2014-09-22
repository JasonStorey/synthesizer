define(['audio/envelope', 'audio/filter', 'audio/gain', 'audio/oscillator', 'audio/patch', 'audio/system', 'instrument', 'trigger', 'music/scale'], function(Envelope, Filter, Gain, Oscillator, Patch, system, Instrument, Trigger, Scale) {

    (function() {
        system.init();
    }());

    return {
        Envelope: Envelope,
        Filter: Filter,
        Gain: Gain,
        Oscillator: Oscillator,
        Patch: Patch,
        Instrument: Instrument,
        Trigger: Trigger,
        Scale: Scale
    };
});