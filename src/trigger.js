define(['utils/dom'], function(dom, config) {
    function Trigger(audioContext) {
        this.element = new dom.Element('<div>');
        this.element.addClass('trigger-container');
        this.audioContext = audioContext;
        this.config = config || {
            freq: 240,
            type: 'square'
        }
    }

    Trigger.prototype.configure = function configure(config) {
        this.config = config;
    };

    Trigger.prototype.draw = function draw(container) {
        container.append(this.element);
    };

    Trigger.prototype.play = function play() {
        this.oscillator = this.audioContext.createOscillator();
        this.oscillator.type = this.config.type;
        this.oscillator.frequency.value = this.config.freq; // value in hertz
        this.oscillator.start();
    };

    Trigger.prototype.pause = function pause() {
        this.oscillator.stop();
        this.oscillator = null;
    };

    return Trigger;
});