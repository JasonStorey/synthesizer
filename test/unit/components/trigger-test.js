describe('Trigger', function() {
    var Trigger;

    beforeEach(function() {
        Trigger = proxyquire('../../lib/components/trigger', {});
    });

    describe('constructor', function() {
        it('sets defaults if no config passed', function() {
            var trigger = new Trigger();

            expect(trigger.note).to.equal(440);
        });

        it('sets defaults if empty config passed', function() {
            var trigger = new Trigger({});

            expect(trigger.note).to.equal(440);
        });

        it('uses configuration object if passed', function() {
            var config = {
                    note: 880
                },
                trigger = new Trigger(config);

            expect(trigger.note).to.equal(config.note);
        });
    });

    it('.setSignal() method stores signal', function() {
        var trigger = new Trigger(),
            mockSignal = 'a signal';

        trigger.setSignal(mockSignal);
        expect(trigger.signal).to.equal(mockSignal);
    });

    it('.play() method calls play on signal', function() {
        var trigger = new Trigger(),
            velocity = 0.5,
            mockSignal = {
                play: sinon.stub()
            };

        trigger.setSignal(mockSignal);
        trigger.play(velocity);

        expect(mockSignal.play).to.have.been.calledOnce;
        expect(mockSignal.play).to.have.been.calledWith(440, velocity);
    });

    it('.play() method does not throw error if signal is not set', function() {
        var trigger = new Trigger();

        expect(trigger.play).to.not.throw();
    });

    it('.pause() method calls play on signal', function() {
        var trigger = new Trigger(),
            velocity = 0.5,
            mockSignal = {
                pause: sinon.stub()
            };

        trigger.setSignal(mockSignal);
        trigger.pause(velocity);

        expect(mockSignal.pause).to.have.been.calledOnce;
    });

    it('.pause() method does not throw error if signal is not set', function() {
        var trigger = new Trigger();

        expect(trigger.pause).to.not.throw();
    });
});
