const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const runButton = document.querySelector('#run-button');
const terminalOutput = document.querySelector('#terminal-output');
const copyButton = document.querySelector('#copy-button');

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? 'Schließen' : 'Menü';
});

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = 'Menü';
  });
});

runButton?.addEventListener('click', () => {
  terminalOutput.innerHTML = '<span class="prompt">&gt;&gt;&gt;</span> Hallo, Welt!<span class="cursor"></span>';
  runButton.textContent = 'Ausgeführt ✓';
  window.setTimeout(() => {
    runButton.innerHTML = 'Erneut ausführen <span aria-hidden="true">↗</span>';
  }, 1600);
});

copyButton?.addEventListener('click', async () => {
  const code = 'name = "Welt"\nmessage = f"Hallo, {name}!"\nprint(message)';
  try {
    await navigator.clipboard.writeText(code);
    copyButton.textContent = 'Kopiert ✓';
    window.setTimeout(() => { copyButton.textContent = 'Code kopieren'; }, 1600);
  } catch {
    copyButton.textContent = 'Markiere den Code';
  }
});
