import { expect } from 'chai';
import { colorSVG } from './colorSVG';

describe('colorSVG', () => {
  beforeEach(() => {
    const box = document.createElement('div');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    box.id = 'box';
    path.id = 'path';
    document.body.appendChild(box);
    document.body.appendChild(path);
  });
  afterEach(() => {
    const box = document.getElementById('box');
    const path = document.getElementById('path');
    if (box) box.remove();
    if (path) path.remove();
  });

  it('sets color on both elements', () => {
    const box = document.getElementById('box');
    const path = document.getElementById('path');

    colorSVG('red');

    if (!box) throw new Error('box not found');
    if (!path) throw new Error('path not found');

    expect(box.style.backgroundColor).to.equal('red');
    expect(path.getAttribute('fill')).to.equal('red');
  });
});
