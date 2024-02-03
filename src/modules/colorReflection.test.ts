import { expect } from 'chai';
import { colorReflection } from './colorReflection';

describe('colorReflection', () => {
  it('sets backgroundColor on both elements', () => {
    const reflexOne = document.createElement('div');
    const reflexTwo = document.createElement('div');
    colorReflection(reflexOne, reflexTwo, 'red');
    expect(reflexOne.style.backgroundColor).to.equal('red');
    expect(reflexTwo.style.backgroundColor).to.equal('red');
  });
});
