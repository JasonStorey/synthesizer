describe('Instrument', function() {
    var Instrument,
        Trigger,
        Patch;

    beforeEach(function() {
        Trigger = require('../../../lib/components/trigger');
        sinon.stub(Trigger.prototype, 'setSignal');

        Patch = require('../../../lib/audio/patch');
        sinon.stub(Patch.prototype, 'getSignal');

        Instrument = proxyquire('../../lib/components/instrument', {
            './trigger': Trigger,
            '../audio/patch': Patch
        });
    });

    afterEach(function() {
        Trigger.prototype.setSignal.restore();
        Patch.prototype.getSignal.restore();
    });

    describe('constructor', function() {
        var DEFAULT_PATCH;

        beforeEach(function() {
            DEFAULT_PATCH = new Patch({
                timbres: [{
                    type: 'sine',
                    volume: 1
                }]
            });
        });

        it('sets defaults if no config passed, and selects default patch', function() {
            var instrument;

            sinon.spy(Instrument.prototype, 'selectPatch');

            instrument = new Instrument();

            expect(instrument.notes).to.eql([]);
            expect(instrument.patches.length).to.equal(1);
            expect(instrument.patches[0]).to.eql(DEFAULT_PATCH);
            expect(Instrument.prototype.selectPatch).to.have.been.calledWith(0);
        });

        it('sets defaults if empty config passed, and selects default patch', function() {
            var instrument;

            sinon.spy(Instrument.prototype, 'selectPatch');

            instrument = new Instrument({});

            expect(instrument.notes).to.eql([]);
            expect(instrument.patches.length).to.equal(1);
            expect(instrument.patches[0]).to.eql(DEFAULT_PATCH);
            expect(Instrument.prototype.selectPatch).to.have.been.calledWith(0);
        });

        it('uses config object if present', function() {
            var config = {
                    notes: [440],
                    patches: [new Patch({})]
                },
                instrument = new Instrument(config);

            expect(instrument.notes).to.eql(config.notes);
            expect(instrument.patches).to.eql(config.patches);
        });

        it('creates a trigger for each note', function() {
            var config = {
                    notes: [220, 440, 880]
                },
                instrument = new Instrument(config);

            expect(instrument.triggers.length).to.equal(config.notes.length);
            instrument.triggers.forEach(function(trigger) {
                expect(trigger).to.be.an.instanceof(Trigger);
            });
        });
    });

    it('.addPatch() adds a new patch and selects it', function() {
        var instrument = new Instrument(),
            patchToAdd = new Patch({});

        expect(instrument.patches.length).to.equal(1);

        sinon.spy(Instrument.prototype, 'selectPatch');

        instrument.addPatch(patchToAdd);

        expect(instrument.patches.length).to.equal(2);
        expect(instrument.patches[1]).to.eql(patchToAdd);
        expect(Instrument.prototype.selectPatch).to.have.been.calledOnce;
        expect(Instrument.prototype.selectPatch).to.have.been.calledWith(instrument.patches.length - 1);
    });

    it('.selectPatch() loops through the triggers and sets a signal with the right note for each', function() {
        var notes = [110, 220, 440, 880],
            instrument;

        Patch.prototype.getSignal.returnsArg(0);

        // .selectPatch() is called in constructor
        instrument = new Instrument({
            notes: notes
        });

        notes.forEach(function(note) {
            expect(Patch.prototype.getSignal).to.have.been.calledWith(note);
            expect(Trigger.prototype.setSignal).to.have.been.calledWith(note);
        });

        expect(Patch.prototype.getSignal.callCount).to.equal(4);
        expect(Trigger.prototype.setSignal.callCount).to.equal(4);
    });
});
