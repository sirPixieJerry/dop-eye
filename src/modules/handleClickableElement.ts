import { generateBackgroundColor } from './generateBackgroundColor';
import { colorSVG } from './colorSVG';
import { colorReflection } from './colorReflection';
import { recordItemColor } from './recordItemColor';
import { resetTimer, updateStopSignal } from './rewindColors';

export type StepType = {
  target: string;
  color: string;
};

export const steps: StepType[] = [];

type ClickableElement = HTMLElement & { id: string };

export const handleClickableElement = (): void => {
  document.addEventListener('click', (evt): void => {
    updateStopSignal(false);
    resetTimer();

    if (evt.target === null) return;
    const target = evt.target as ClickableElement;
    if (!target.matches('.clickable')) return;

    const color = generateBackgroundColor();

    switch (target.id) {
      case 'box':
      case 'path':
        recordItemColor(steps, target);
        colorSVG(color);
        break;

      case 'reflex-one':
      case 'reflex-two':
        recordItemColor(steps, target);
        colorReflection(color);
        break;

      default:
        recordItemColor(steps, target);
        target.style.backgroundColor = color;
    }
  });
};
