const { getLocation } = require('../operations')
const expect = require('chai').expect;

describe('Testing algo for sample data', () => {
    it('plateau dimensions: 10 5, landing location: 10 5 E, instructions: RRMMMMMR', async () => {
        let data = getLocation('RRMMMMMR', 10, 5, 10, 5, 'E')
        expect(data).to.be.an('object');
        expect(data).to.have.nested.property('roverLongitude');
        expect(data).to.have.nested.property('roverLatitude');
        expect(data).to.have.nested.property('roverDirection');
        expect(data.roverLongitude).to.equal(5);
        expect(data.roverLatitude).to.equal(5);
        expect(data.roverDirection).to.equal('N');
    })
    it('plateau dimensions: 5 10, landing location: 0 0 S, instructions: LMMMMML', async () => {
        let data = getLocation('LMMMMML', 5, 10, 0, 0, 'S')
        expect(data).to.be.an('object');
        expect(data).to.have.nested.property('roverLongitude');
        expect(data).to.have.nested.property('roverLatitude');
        expect(data).to.have.nested.property('roverDirection');
        expect(data.roverLongitude).to.equal(5);
        expect(data.roverLatitude).to.equal(0);
        expect(data.roverDirection).to.equal('N');
    })
    it('plateau dimensions: 8 4, landing location: 1 2 N, instructions: RMLMRMLML', async () => {
        let data = getLocation('RMLMRMLML', 8, 4, 1, 2, 'N')
        expect(data).to.be.an('object');
        expect(data).to.have.nested.property('roverLongitude');
        expect(data).to.have.nested.property('roverLatitude');
        expect(data).to.have.nested.property('roverDirection');
        expect(data.roverLongitude).to.equal(3);
        expect(data.roverLatitude).to.equal(4);
        expect(data.roverDirection).to.equal('W');
    })
    it('plateau dimensions: 2 5, landing location: 1 3 N, instructions: RMLMMLL', async () => {
        let data = getLocation('RMLMMLL', 2, 5, 1, 3, 'N')
        expect(data).to.be.an('object');
        expect(data).to.have.nested.property('roverLongitude');
        expect(data).to.have.nested.property('roverLatitude');
        expect(data).to.have.nested.property('roverDirection');
        expect(data.roverLongitude).to.equal(2);
        expect(data.roverLatitude).to.equal(5);
        expect(data.roverDirection).to.equal('S');
    })
});