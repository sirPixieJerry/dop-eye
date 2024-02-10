import { expect } from 'chai';
import { applyColorFromStep } from './applyColorFromStep';

const mockStep = {
  target: 'mockTarget',
  color: 'red',
};

describe('applyColorFromStep', () => {
  beforeEach(() => {
    const div = document.createElement('div');
    div.id = mockStep.target;
    document.body.appendChild(div);
  });
  afterEach(() => {
    const div = document.getElementById(mockStep.target);
    if (div) div.remove();
  });

  it('should apply color to the specified element', () => {
    const mockTarget = document.getElementById(mockStep.target);
    applyColorFromStep(mockStep);
    if (!mockTarget) throw new Error('mockTarget not found');
    expect(mockTarget.style.backgroundColor).to.equal(mockStep.color);
  });
});
