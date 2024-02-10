import { applyColorFromStep } from './applyColorFromStep';

export type StepType = {
  target: string;
  color: string;
};

export const steps: StepType[] = [];
let stepIndex = steps.length - 1;

const DELAY = 1000;
const TIMEOUT = 5000;

let idleTime: NodeJS.Timeout;
let interval: NodeJS.Timeout;
let pauseRewind = false;
let initialDelay: number;

export const updateStepIndex = (): void => {
  stepIndex = stepIndex + 1;
};

export const undoColorChange = (): void => {
  if (stepIndex < 0) return;
  applyColorFromStep(steps[stepIndex]);
  stepIndex = stepIndex - 1;
};

export const redoColorChange = (): void => {
  if (stepIndex > steps.length - 1) return;
  applyColorFromStep(steps[stepIndex]);
  stepIndex = stepIndex + 1;
};

const rewind = (): void => {
  const removeStep = (): void => {
    if (pauseRewind) return;
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

export const setPauseRewind = (): void => {
  pauseRewind = !pauseRewind;
};

export const resetTimer = (): void => {
  if (pauseRewind) return;
  clearTimeout(idleTime);
  clearTimeout(interval);
  initialDelay = DELAY;
  idleTime = setTimeout(() => {
    rewind();
  }, TIMEOUT);
};
