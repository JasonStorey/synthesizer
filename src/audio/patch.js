define(['audio/system', 'audio/gain', 'audio/oscillator', 'audio/envelope', 'audio/signal'], function(system, Gain, Oscillator, Envelope, Signal) {

    function Patch(config) {
        this.timbres = config.timbres;
    }

    Patch.prototype.getSignalForNote = function getSignalForNote(freq) {
        var signal = new Signal();

        this.timbres.forEach(function(timbre) {
            var osc,
                ampEnv,
                gain;
            
            osc = new Oscillator({
                audioContext: system.getAudioContext(),
                type: timbre.type,
                frequency: freq
            });

            ampEnv = new Envelope({
                attack: timbre.attack,
                release: timbre.release
            });

            gain = new Gain({
                audioContext: system.getAudioContext(),
                envelope: ampEnv,
                volume: timbre.volume
            });

            osc.connect(gain);
            gain.connect(system.getOutput());
            signal.addOscillator(osc);
        });

        return signal;
    };

    return Patch;
});