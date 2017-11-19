(function(window, SYNTH) {
    var arrayOfFreqs = [261.626, 293.665, 329.628, 349.228, 391.995, 440, 493.883, 523.251],
        instrument;

    SYNTH.init();

    (function playbackTest() {
        instrument = new SYNTH.Instrument({
            notes: arrayOfFreqs
        });

        instrument.triggers.forEach(function (trigger, index) {
            setTimeout(function () {
                trigger.play();
            }, index * 100);

            setTimeout(function () {
                trigger.pause();
            }, 100 + (index * 100));
        });
    }());

}(window, window.SYNTH));
