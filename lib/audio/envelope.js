function Envelope(config) {
    this.attack = config.attack || 0;
    this.decay = config.decay || 0;
    this.sustain = config.sustain || 0;
    this.release = config.release || 0;
}

module.exports = Envelope;
