describe('AudioContextBrowser', function() {
    var window,
        AudioContext,
        ERROR;

    beforeEach(function() {
        window = {};
        ERROR = {};
        AudioContext = proxyquire('../../lib/utils/audio-context-browser', {
            './window': window,
            './error': ERROR
        });

        window.AudioContext = sinon.stub();
        window.webkitAudioContext = sinon.stub();
    });

    describe('constructor', function() {
        it('throws an unsupported feature error when no window AudioContext is available', function() {
            window.AudioContext = undefined;
            window.webkitAudioContext = undefined;

            expect(function() {new AudioContext()}).to.throw(ERROR.UNSUPPORTED_FEATURE);
        });

        it('creates new window.AudioContext when defined', function() {
            window.webkitAudioContext = undefined;

            var audioContext = new AudioContext();
            expect(window.AudioContext).to.have.been.calledWithNew;
            expect(audioContext._audioContext).to.be.an.instanceof(window.AudioContext);
        });

        it('creates new window.webkitAudioContext when window.AudioContext is not defined', function() {
            window.AudioContext = undefined;

            var audioContext = new AudioContext();
            expect(window.webkitAudioContext).to.have.been.calledWithNew;
            expect(audioContext._audioContext).to.be.an.instanceof(window.webkitAudioContext);
        });

        it('sets destination as window.AudioContext', function() {
            var expectedOutput = 'an audio output',
                audioContext;

            window.AudioContext.returns({
                destination: expectedOutput
            });

            audioContext = new AudioContext();
            expect(audioContext.destination).to.equal(expectedOutput);
        });

        it('sets currentTime as window.AudioContext.currentTime', function() {
            var expectedCurrentTime = 1234,
                audioContext;

            window.AudioContext.returns({
                currentTime: expectedCurrentTime
            });

            audioContext = new AudioContext();

            expect(audioContext.currentTime).to.equal(expectedCurrentTime);
        });
    });

    it('implements createOscillator method', function() {
        var expectedOscillatorNode = 'an oscillator node',
            audioContext,
            oscillatorNode;

        window.AudioContext.returns({
            createOscillator: sinon.stub().returns(expectedOscillatorNode)
        });

        audioContext = new AudioContext();
        oscillatorNode = audioContext.createOscillator();

        expect(oscillatorNode).to.equal(expectedOscillatorNode);
    });

    it('implements createGain method', function() {
        var expectedGainNode = 'a gain node',
            audioContext,
            gainNode;

        window.AudioContext.returns({
            createGain: sinon.stub().returns(expectedGainNode)
        });

        audioContext = new AudioContext();
        gainNode = audioContext.createGain();

        expect(gainNode).to.equal(expectedGainNode);
    });

    it('implements createBiquadFilter method', function() {
        var expectedBiquadFilterNode = 'a biquad filter node',
            audioContext,
            biquadFilter;

        window.AudioContext.returns({
            createBiquadFilter: sinon.stub().returns(expectedBiquadFilterNode)
        });

        audioContext = new AudioContext();
        biquadFilter = audioContext.createBiquadFilter();

        expect(biquadFilter).to.equal(expectedBiquadFilterNode);
    });
});
