export const handleDragMenu = (): void => {
  const dragHandle = document.getElementById('drag-handle');
  const menuWrapper = document.getElementById('menu-wrapper');

  if (!dragHandle || !menuWrapper) {
    return;
  }

  let offsetX: number;
  let offsetY: number;
  let isDragging = false;

  dragHandle.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - dragHandle.getBoundingClientRect().left;
    offsetY = event.clientY - dragHandle.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    menuWrapper.style.left = `${x}px`;
    menuWrapper.style.top = `${y}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
};
