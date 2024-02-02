export const colorSVG = (
  box: HTMLElement | null,
  path: SVGElement | null,
  color: string,
): void => {
  if (box === null || path === null) return;
  box.style.backgroundColor = color;
  path.style.fill = color;
};
