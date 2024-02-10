export const addRippleEffect = (button: HTMLButtonElement): void => {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  button.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 600);
};
