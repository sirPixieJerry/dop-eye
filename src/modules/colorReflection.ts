export const colorReflection = (
  reflexOne: HTMLElement | null,
  reflexTwo: HTMLElement | null,
  color: string,
): void => {
  if (reflexOne === null || reflexTwo === null) return;
  reflexOne.style.backgroundColor = color;
  reflexTwo.style.backgroundColor = color;
};
