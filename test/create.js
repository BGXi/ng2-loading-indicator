var loadingIndicator = require('../build/ng2-simple-loading.decorator')
    .LoadingIndicator;
var expect = require('chai').expect;
describe('Initial', function () {
    it('should loading-indicator is function', function () {
        expect(loadingIndicator).to.be.a('function');
    });
});
