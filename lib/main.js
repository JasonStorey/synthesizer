var system = require('./audio/system'),
    Envelope = require('./audio/envelope'),
    Filter = require('./audio/filter'),
    Gain = require('./audio/gain'),
    Oscillator = require('./audio/oscillator'),
    Patch = require('./audio/patch'),
    Instrument = require('./components/instrument'),
    Trigger = require('./components/trigger'),
    Scale = require('./music/scale');

module.exports = {
    init: function init() {
        system.init();
    },
    Envelope: Envelope,
    Filter: Filter,
    Gain: Gain,
    Oscillator: Oscillator,
    Patch: Patch,
    Instrument: Instrument,
    Trigger: Trigger,
    Scale: Scale
};
