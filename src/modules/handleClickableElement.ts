import { generateBackgroundColor } from './generateBackgroundColor';
import { colorSVG } from './colorSVG';
import { colorReflection } from './colorReflection';
import { recordColorChange } from './recordColorChange';
import { resetTimer, setStopRewind } from './rewindColors';
import { scrollThroughSteps } from './scrollThroughSteps';

export type StepType = {
  target: string;
  color: string;
};

let isScroll = false;
export const steps: StepType[] = [];

type ClickableElement = HTMLElement & { id: string };

export const handleClickableElement = (): void => {
  document.addEventListener('mousedown', (): void => {
    isScroll = true;
    setStopRewind(true);
  });

  document.addEventListener('mouseup', (): void => {
    isScroll = false;
    setStopRewind(false);
  });

  document.addEventListener('mousemove', (evt) => {
    if (!isScroll) return;
    scrollThroughSteps(evt.clientX);
  });

  document.addEventListener('click', (evt): void => {
    resetTimer();
    if (evt.target === null) return;

    const target = evt.target as ClickableElement;
    if (!target.matches('.clickable')) return;

    const color = generateBackgroundColor();

    switch (target.id) {
      case 'box':
      case 'path':
        recordColorChange(target);
        colorSVG(color);
        break;

      case 'reflex-one':
      case 'reflex-two':
        recordColorChange(target);
        colorReflection(color);
        break;

      default:
        recordColorChange(target);
        target.style.backgroundColor = color;
    }
  });
};
