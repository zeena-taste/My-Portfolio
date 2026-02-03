const img = document.querySelector('.profile-img');

img.addEventListener('click', () => {
  img.classList.toggle('blurred');
});

// index.js

const sections = document.querySelectorAll('.content-section, .intro'); // include home
const navLinks = document.querySelectorAll('.sidebar a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // prevent default anchor jump
        const targetId = link.getAttribute('href').substring(1); // remove #
        showSection(targetId);
    });
});

function showSection(id) {
    sections.forEach(sec => {
        if (sec.id === id) {
            sec.classList.add('active');
        } else {
            sec.classList.remove('active');
        }
    });
}
