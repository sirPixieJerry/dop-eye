import { generateBackgroundColor } from './generateBackgroundColor';
import { colorSVG } from './colorSVG';
import { colorReflection } from './colorReflection';
import { recordItemColor } from './recordItemColor';

type ClickableElement = HTMLElement & { id: string };

export const handleClickableElement = (): void => {
  document.addEventListener('click', (evt): void => {
    if (evt.target === null) return;

    const color = generateBackgroundColor();
    const target = evt.target as ClickableElement;

    if (!target.matches('.clickable')) return;

    const box = document.getElementById('box')!;
    const path = document.querySelector('path')!;
    const reflexOne = document.getElementById('reflex-one')!;
    const reflexTwo = document.getElementById('reflex-two')!;

    switch (target.id) {
      case 'box':
      case 'path':
        recordItemColor(target);
        colorSVG(box, path, color);
        break;

      case 'reflex-one':
      case 'reflex-two':
        recordItemColor(target);
        colorReflection(reflexOne, reflexTwo, color);
        break;

      default:
        recordItemColor(target);
        target.style.backgroundColor = color;
    }
  });
};
