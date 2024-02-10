import { applyColorFromStep } from './applyColorFromStep';
import { steps } from './rewindColors';

let scrollIndex = 0;

export const scrollThroughSteps = (mousePositionX: number): void => {
  if (steps.length === 0) return;
  scrollIndex = Math.floor((mousePositionX / window.innerWidth) * steps.length);
  applyColorFromStep(steps[scrollIndex]);
};
