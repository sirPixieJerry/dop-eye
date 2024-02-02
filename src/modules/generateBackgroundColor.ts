const RANGE = 255;
const MODEL = 'rgb';

export const generateBackgroundColor = (): string => {
  const color = Array(3)
    .fill(0)
    .map(() => Math.floor(Math.random() * RANGE) | 0);
  return `${MODEL}(${color.join(',')})`;
};
