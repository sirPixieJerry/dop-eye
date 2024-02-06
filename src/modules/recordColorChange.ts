type StepType = {
  target: string;
  color: string;
};

const steps: StepType[] = [];

const pushStep = (step: StepType): void => {
  steps.push(step);
};

export const recordColorChange = (target: Element): void => {
  if (target instanceof HTMLElement) {
    const computedStyle = window.getComputedStyle(target);
    pushStep({
      target: target.id,
      color: computedStyle.backgroundColor,
    });
  }
  if (target instanceof SVGElement) {
    const computedStyle = window.getComputedStyle(target);
    pushStep({
      target: target.id,
      color: computedStyle.fill,
    });
  }
};