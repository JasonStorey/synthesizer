define([], function() {
    var T = 2,
        S = 1,
        MAJOR_INTERVALS = [T,T,S,T,T,T,S],
        CHROMATIC = createChromaticScale(27.5000, 88),
        NOTE_INDICES = {
            A: 0,
            Bb: 1,
            B: 2,
            C: 3,
            Db: 4,
            D: 5,
            Eb: 6,
            E: 7,
            F: 8,
            Gb: 9,
            G: 10,
            Ab: 11
        };

    function create(key) {
        var startNoteIndex = NOTE_INDICES[key];
        return createScale(CHROMATIC.slice(startNoteIndex), MAJOR_INTERVALS);
    }

    function createChromaticScale(startFreq, length) {
        var chromatic = [],
            semitoneRatio,
            freq;

        for(var i = 0; i < length; i++) {
            semitoneRatio = Math.pow(2, i/12);
            freq = startFreq * semitoneRatio;
            chromatic.push(freq);
        }
        return chromatic;
    }

    function createScale(chromaticScale, intervals) {
        var scale = [],
            pointer = 0,
            selected = 0;

        chromaticScale.forEach(function(val, index) {
            if(index === selected) {
                scale.push(val);
                selected += intervals[pointer];
                pointer = (pointer + 1) % intervals.length;
            }
        });
        return scale;
    }

    return {
        CHROMATIC: CHROMATIC,
        create: create
    };
});