import { expect } from 'chai';
import { colorSVG } from './colorSVG';

describe('colorSVG', () => {
  it('should set backgroundColor on box and fill color on path', () => {
    const box = document.createElement('div');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    document.body.appendChild(box);
    document.body.appendChild(path);
    colorSVG(box, path, 'red');
    expect(box.style.backgroundColor).to.equal('red');
    expect(path.style.fill).to.equal('red');
  });
});
