const expect = require('chai').expect;

class MyNewClass {
  privateVariable;

  constructor(param) {
    this.privateVariable = param;
  }

  getPrivateVariable() {
    return this.privateVariable;
  }
}

describe('MyNewClass', () => {
  it('exposes the private variable through a getter', () => {
    const myClass = new MyNewClass('foo');
    expect(myClass.getPrivateVariable()).to.eql('foo');
  });
});
