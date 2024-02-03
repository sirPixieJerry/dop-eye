import { type StepType } from './handleClickableElement';

const pushStep = (steps: StepType[], step: StepType): void => {
  steps.push(step);
};

export const recordItemColor = (steps: StepType[], target: Element): void => {
  if (target instanceof HTMLElement) {
    const computedStyle = window.getComputedStyle(target);
    pushStep(steps, {
      target: target.id,
      color: computedStyle.backgroundColor,
    });
  }
  if (target instanceof SVGElement) {
    const computedStyle = window.getComputedStyle(target);
    pushStep(steps, {
      target: target.id,
      color: computedStyle.fill,
    });
  }
};
