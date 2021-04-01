const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

/**
 * Hover mouse to expand the left section
 * classList.add will add a class to the object
 */
left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);

/**
 * Removes class when not over section
 */
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);

/**
 * Hover mouse to expand the left section
 * classList.add will add a class to the object
 */
right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);

/**
 * Removes class when not over section
 */
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
