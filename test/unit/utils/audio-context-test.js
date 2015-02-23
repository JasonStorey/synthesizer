describe('AudioContext', function() {
    var ERROR = {},
        AudioContext = proxyquire('../../lib/utils/audio-context', {'./error': ERROR});

    it('constructor should throw an unsupported feature error', function() {
        expect(function(){new AudioContext()}).to.throw(ERROR.UNSUPPORTED_FEATURE);
    });
});