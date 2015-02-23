(function(window, SYNTH, teoria) {
    var arrayOfFreqs = teoria.scale('C5', 'major').notes().map(function(note) { return note.fq(); }),
        instrument,
        patch;

    SYNTH.init();

    (function playbackTest() {

        instrument = new SYNTH.Instrument({
            notes: arrayOfFreqs
        });

        patch = new SYNTH.Patch({
            timbres: [{
                type: 'sine',
                volume: 1,
                attack: 0.01,
                release: 0.05
            }]
        });

        instrument.addPatch(patch);

        instrument.triggers.forEach(function (trigger, index) {
            setTimeout(function () {
                trigger.play();
            }, index * 100);

            setTimeout(function () {
                trigger.pause();
            }, 100 + (index * 100));
        });

    }());

}(window, window.SYNTH, window.teoria));