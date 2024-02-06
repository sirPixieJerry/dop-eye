import { steps } from './handleClickableElement';
import { applyColorFromStep } from './applyColorFromStep';

const DELAY = 1000;
const TIMEOUT = 5000;

let idleTime: NodeJS.Timeout;
let interval: NodeJS.Timeout;
let stopSignal = false;
let initialDelay = DELAY;

const rewind = (): void => {
  if (!stopSignal) return;
  const removeStep = (): void => {
    if (steps.length > 0) {
      const removedStep = steps.pop();
      applyColorFromStep(removedStep);

      initialDelay = Math.max(initialDelay - 100, 100);

      interval = setTimeout(removeStep, initialDelay);
    }
  };
  removeStep();
};

export const updateStopSignal = (value: boolean): void => {
  stopSignal = value;
};

export const resetTimer = (): void => {
  clearTimeout(idleTime);
  clearTimeout(interval);
  idleTime = setTimeout(() => {
    updateStopSignal(true);
    rewind();
  }, TIMEOUT);
};
