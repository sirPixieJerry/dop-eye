import { expect } from 'chai';
import { recordItemColor } from './recordItemColor';
import { StepType } from './handleClickableElement';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM();
const { document } = window;
(global as any).document = document;
(global as any).window = window;

describe('recordItemColor', () => {
  beforeEach(() => {
    const div = document.createElement('div');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    div.id = 'test-div';
    path.id = 'test-svg';
    div.style.backgroundColor = 'red';
    path.setAttribute('fill', 'blue');
    document.body.appendChild(div);
    document.body.appendChild(path);
  });
  afterEach(() => {
    const div = document.getElementById('test-div');
    const path = document.getElementById('test-svg');
    if (div) div.remove();
    if (path) path.remove();
  });

  it('records item color for HTMLElement', () => {
    const steps: StepType[] = [];
    const target = document.getElementById('test-div');
    recordItemColor(steps, target!);
    expect(steps).to.deep.equal([{ target: 'test-div', color: 'red' }]);
  });

  it('records item color for SVGElement', () => {
    const steps: StepType[] = [];
    const target = document.getElementById('test-svg');
    expect(target).to.exist;
    recordItemColor(steps, target!);
    expect(steps).to.deep.equal([{ target: 'test-svg', color: 'blue' }]);
  });
});
