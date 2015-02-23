describe('System', function() {
    var AudioContextConstructor,
        audioContext,
        ERROR,
        system;

    beforeEach(function() {
        audioContext = {destination: 'mockDestination'};
        AudioContextConstructor = sinon.stub().returns(audioContext);
        ERROR = {};
        system = proxyquire('../../lib/audio/system', {
            '../utils/audio-context': AudioContextConstructor,
            '../utils/error': ERROR
        });
    });

    it('init should construct an AudioContext and connect a master Gain node', function() {
        system.init();
        expect(AudioContextConstructor).to.have.been.calledOnce.calledWithNew;
    });

    it('getAudioContext should return the AudioContext instance when system is initialised', function() {
        system.init();
        expect(system.getAudioContext()).to.equal(audioContext);
        expect(AudioContextConstructor).to.have.been.calledOnce;
    });

    it('getAudioContext should throw a setup error when system is not initialised', function() {
        expect(system.getAudioContext).to.throw(ERROR.SETUP_ERROR);
    });

    it('getOutput should return AudioContext.destination when system is initialised', function() {
        var mockAudioNode = 'an audio node';

        audioContext.destination = mockAudioNode;

        system.init();
        expect(system.getOutput()).to.equal(mockAudioNode);
    });

    it('getOutput should throw a setup error when when system is not initialised', function() {
        expect(system.getOutput).to.throw(ERROR.SETUP_ERROR);
    });
});