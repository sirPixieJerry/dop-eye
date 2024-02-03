export const colorSVG = (
  box: HTMLElement,
  path: SVGElement,
  color: string,
): void => {
  box.style.backgroundColor = color;
  path.style.fill = color;
};
