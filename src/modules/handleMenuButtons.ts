import { addRippleEffect } from './addRippleEffect';
import {
  redoColorChange,
  setPauseRewind,
  undoColorChange,
} from './rewindColors';

export const handleMenuButtons = (): void => {
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (evt) => {
      const button = evt.currentTarget as HTMLButtonElement;
      addRippleEffect(button);

      if (button.id === 'pause') {
        button.classList.toggle('active');
        setPauseRewind();
      }
      if (button.id === 'redo') {
        redoColorChange();
      }
      if (button.id === 'undo') {
        undoColorChange();
      }
    });
  });
};
