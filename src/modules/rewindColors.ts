import { steps } from './handleClickableElement';
import { applyColorFromStep } from './applyColorFromStep';

const DELAY = 1000;
const TIMEOUT = 5000;

let idleTime: NodeJS.Timeout;
let interval: NodeJS.Timeout;
let stopRewind = true;
let initialDelay: number;

const rewind = (): void => {
  const removeStep = (): void => {
    if (stopRewind) return;
    if (steps.length > 0) {
      console.log(steps.length);
      const removedStep = steps.pop();
      applyColorFromStep(removedStep);

      initialDelay = Math.max(initialDelay - 100, 100);

      interval = setTimeout(removeStep, initialDelay);
    }
  };
  removeStep();
};

export const setStopRewind = (arg: boolean): void => {
  stopRewind = arg;
};

export const resetTimer = (): void => {
  if (stopRewind) return;
  clearTimeout(idleTime);
  clearTimeout(interval);
  initialDelay = DELAY;
  idleTime = setTimeout(() => {
    rewind();
  }, TIMEOUT);
};
