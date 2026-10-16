const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  });
});
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent('KARMIX TECHNOLOGY Website Enquiry - ' + (data.get('service') || 'New Requirement'));
  const body = encodeURIComponent(
    'Hello KARMIX TECHNOLOGY,\\n\\nI would like to discuss a project.\\n\\n' +
    'Name: ' + data.get('name') + '\\n' +
    'Email: ' + data.get('email') + '\\n' +
    'Phone: ' + (data.get('phone') || 'Not provided') + '\\n' +
    'Service: ' + (data.get('service') || 'Not selected') + '\\n\\n' +
    'Project details:\\n' + data.get('message') + '\\n'
  );
  window.location.href = 'mailto:karmixtechnology@gmail.com?subject=' + subject + '&body=' + body;
});
