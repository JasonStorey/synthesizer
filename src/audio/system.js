define(['utils/audio-context'], function(AudioContext) {
    function System() {
        this.audioContext = new AudioContext();
    }

    return System;
});