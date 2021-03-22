const chai = require('chai');
const expect = chai.expect;
const Box = require('../src/Box.js');

describe('Box', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a default height and width', function() {
    let babyBox = new Box();

    expect(babyBox).to.have.property('height').to.equal(100);
    expect(babyBox).to.have.property('width').to.equal(100);
  })

  it('should be able to have a unique height and width', function() {
    let babyBox2 = new Box(10, 10);

    expect(babyBox2).to.have.property('height').to.equal(10);
    expect(babyBox2).to.have.property('width').to.equal(10);
  })
});
