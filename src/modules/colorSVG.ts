export const colorSVG = (color: string): void => {
  const box = document.getElementById('box');
  const path = document.querySelector('path');

  if (box === null || path === null) return;

  box.style.backgroundColor = color;
  path.setAttribute('fill', color);
};
