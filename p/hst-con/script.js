window.addEventListener('load', (load) => {
  const list = document.getElementById('list');
  const interval = setInterval(() => {
    let found = false;
    for (const child of list.children) {
      if (!found) {
        if (child.classList.contains('active')) {
          found = true;
          child.classList.remove('active');
        }
      } else {
        child.classList.add('active');
        if (child.classList.contains('last-li')) {
          clearInterval(interval);
        }
        break;
      }
    }
  }, 4000);
});
