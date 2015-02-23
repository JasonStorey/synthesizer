Synthesizer
----------

Multi-timbral polyphonic audio synthesis for the web.

Abstractions for building synthesizers with javascript - built on top of the Web Audio API.

Features
--------
- Built on top of web-audio API
- ADSR amplitude envelopes
- EQ filtering
- Oscillator wave types - sine, square, triangle, sawtooth

Usage
-----
```javascript

// initialise the library
SYNTH.init();

// create an array of note frequencies using the SYNTH.Scale helper

var notes = SYNTH.Scale.create('C', 2, 'major');

// create a patch
var retroPatch = new SYNTH.Patch({
    timbres: [{
        type: 'square',
        volume: 0.2,
        attack: 0.001,
        release: 0.001,
        filters: [{
            type: 'highshelf',
            frequency: 10000,
            gain: -20
        }]
    }]
});

// create a synthesizer
var instrument = new SYNTH.Instrument({
    notes: notes,
    patches: [retroPatch]
});

// play/pause each 'trigger' in the instrument
instrument.triggers.forEach(function (trigger, index) {
    setTimeout(function () {
        trigger.play();
    }, index * 100);

    setTimeout(function () {
        trigger.pause();
    }, 100 + (index * 100));
});

```

Building
--------
download:
``` bash
git clone git@github.com:JasonStorey/synthesizer.git
```

enter the directory, and install dependencies:
```bash
cd synthesizer && npm install
```

build:
```bash
npm run build
```

run the tests:
```bash
npm test
```
