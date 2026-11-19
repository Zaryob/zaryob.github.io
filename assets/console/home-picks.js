(() => {
  'use strict';

  const panel = document.querySelector('[data-home-picks]');
  if (!panel) return;

  const list = panel.querySelector('ul');
  const pool = Array.from(panel.querySelector('template').content.children);
  const count = list.children.length;

  // Sample without replacement using the first count steps of a Fisher–Yates shuffle.
  for (let index = 0; index < count; index += 1) {
    const randomIndex = index + Math.floor(Math.random() * (pool.length - index));
    [pool[index], pool[randomIndex]] = [pool[randomIndex], pool[index]];
  }

  list.replaceChildren(...pool.slice(0, count));
})();
