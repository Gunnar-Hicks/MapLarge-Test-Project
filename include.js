document.addEventListener('DOMContentLoaded', () => {
  // Get the directory where include.js is located
  const scripts = document.getElementsByTagName('script');
  let scriptSrc = '';

  for (let script of scripts) {
    if (script.src.includes('include.js')) {
      scriptSrc = script.src;
      break;
    }
  }

  const basePath = scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));

  function loadComponent(id, file) {
    fetch(`${basePath}/${file}`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${file}`);
        return res.text();
      })
      .then(html => {
        const container = document.getElementById(id);
        if (container) container.innerHTML = html;
      })
      .catch(err => console.error(`Error loading ${file}:`, err));
  }

  loadComponent('navbar', 'nav.html');
  loadComponent('sidebar', 'sidebar.html');
});
