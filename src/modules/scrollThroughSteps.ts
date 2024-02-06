import { applyColorFromStep } from './applyColorFromStep';
import { steps } from './handleClickableElement';

let scrollIndex = 0;
let removeStepsByIndexTimeout: NodeJS.Timeout;

export const scrollThroughSteps = (mousePositionX: number): void => {
  if (steps.length === 0) return;
  scrollIndex = Math.floor((mousePositionX / window.innerWidth) * steps.length);
  applyColorFromStep(steps[scrollIndex]);
};

export const removeStepsByIndex = (): void => {
  clearTimeout(removeStepsByIndexTimeout);
  removeStepsByIndexTimeout = setTimeout(() => {
    steps.slice(0, steps.length - scrollIndex);
    console.log({ scrollIndex });
  }, 2500);
};
