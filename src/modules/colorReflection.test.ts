import { expect } from 'chai';
import { colorReflection } from './colorReflection';

describe('colorReflection', () => {
  beforeEach(() => {
    const reflexOne = document.createElement('div');
    const reflexTwo = document.createElement('div');
    reflexOne.id = 'reflex-one';
    reflexTwo.id = 'reflex-two';
    document.body.appendChild(reflexOne);
    document.body.appendChild(reflexTwo);
  });
  afterEach(() => {
    const reflexOne = document.getElementById('box');
    const reflexTwo = document.getElementById('path');
    if (reflexOne) reflexOne.remove();
    if (reflexTwo) reflexTwo.remove();
  });

  it('sets color on both elements', () => {
    const reflexOne = document.getElementById('reflex-one');
    const reflexTwo = document.getElementById('reflex-two');

    colorReflection('red');

    expect(reflexOne!.style.backgroundColor).to.equal('red');
    expect(reflexTwo!.style.backgroundColor).to.equal('red');
  });
});
