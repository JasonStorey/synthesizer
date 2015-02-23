var system = require('./system'),
    Filter = require('./filter'),
    Gain = require('./gain'),
    Oscillator = require('./oscillator'),
    Envelope = require('./envelope'),
    Signal = require('./signal');

function Patch(config) {
    this.timbres = config.timbres;
}

Patch.prototype.getSignal = function getSignal(note) {
    var signal = new Signal();

    this.timbres.forEach(function(timbre) {
        var osc,
            ampEnv,
            gain,
            filter;

        osc = new Oscillator({
            audioContext: system.getAudioContext(),
            type: timbre.type
        });

        if(note) {
            osc.setFrequency(note);
        }

        ampEnv = new Envelope({
            attack: timbre.attack,
            release: timbre.release
        });

        gain = new Gain({
            audioContext: system.getAudioContext(),
            envelope: ampEnv,
            volume: timbre.volume
        });

        if(timbre.filters) {
            filter = new Filter(timbre.filters[0]);
            osc.connect(filter);
            filter.connect(gain);
        } else {
            osc.connect(gain);
        }

        gain.connect(system.getOutput());
        signal.addOscillator(osc);
    });

    return signal;
};

module.exports = Patch;
