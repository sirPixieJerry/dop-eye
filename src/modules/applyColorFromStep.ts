import { colorReflection } from './colorReflection';
import { colorSVG } from './colorSVG';
import type { StepType } from './rewindColors';

export const applyColorFromStep = (step: StepType | undefined): void => {
  if (step === undefined) return;

  const element = document.getElementById(step.target);

  switch (step.target) {
    case 'box':
    case 'path':
      colorSVG(step.color);
      break;

    case 'reflex-one':
    case 'reflex-two':
      colorReflection(step.color);
      break;

    default:
      if (element === null) return;
      element.style.backgroundColor = step.color;
  }
};
