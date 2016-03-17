var expect = require('chai').expect;

describe('Bad test', function() {
  it('should pass', function() {
    expect(true).to.equal(false);
  });

  it('should pass', function() {
    expect(true).to.equal(true);
  });

  it('should pass', function() {
    expect(true).to.equal(true);
  });
});
