export const colorReflection = (color: string): void => {
  const reflexOne = document.getElementById('reflex-one');
  const reflexTwo = document.getElementById('reflex-two');

  if (reflexOne === null || reflexTwo === null) return;

  reflexOne.style.backgroundColor = color;
  reflexTwo.style.backgroundColor = color;
};
