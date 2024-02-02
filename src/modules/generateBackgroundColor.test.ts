import { generateBackgroundColor } from './generateBackgroundColor';
import { expect } from 'chai';

describe('generateBackgroundColor', () => {
  it('should return a string', () => {
    expect(typeof generateBackgroundColor()).to.be.a('string');
  });

  it('should return a string with the format "rgb(xxx,xxx,xxx)"', () => {
    expect(generateBackgroundColor()).to.match(
      /^rgb\(\d{1,3},\d{1,3},\d{1,3}\)$/,
    );
  });

  it('should return a string with a number between 0 and 255', () => {
    const color = generateBackgroundColor()
      .replace(/rgb\(|\)/g, '')
      .split(',')
      .map(Number);
    color.forEach((value) => {
      expect(value).to.be.greaterThanOrEqual(0);
      expect(value).to.be.lessThanOrEqual(255);
    });
  });
});
