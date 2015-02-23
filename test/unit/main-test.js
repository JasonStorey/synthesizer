describe('Main', function() {
    var system = {},
        SYNTH = proxyquire('../../lib/main', {'./audio/system': system });

    it('should initialise system', function() {
        sinon.stub(system, 'init');
        SYNTH.init();
        expect(system.init).to.have.been.calledOnce;
    });
});
