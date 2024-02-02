import { generateBackgroundColor, colorSVG, colorReflection } from '../modules';

type ClickableElement = HTMLElement & { id: string };

((): void => {
  document.addEventListener('click', (evt): void => {
    if (evt.target === null) return;

    const color = generateBackgroundColor();
    const target = evt.target as ClickableElement;

    if (!target.matches('.clickable')) return;

    const box = document.getElementById('box');
    const path = document.querySelector('path');
    const reflexOne = document.getElementById('reflex-one');
    const reflexTwo = document.getElementById('reflex-two');

    switch (target.id) {
      case 'box':
      case 'path':
        colorSVG(box, path, color);
        break;

      case 'reflex-one':
      case 'reflex-two':
        colorReflection(reflexOne, reflexTwo, color);
        break;

      default:
        target.style.backgroundColor = color;
    }
  });
})();
