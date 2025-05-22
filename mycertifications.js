 // JavaScript to handle logo transition
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 1.8) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }
    });
});

window.addEventListener('scroll', () => {
    const logo1 = document.getElementById('logo1');
    const logo2 = document.getElementById('logo2');
    const scrollPosition = window.scrollY;
    
    // Start transition after scrolling 100px
    if (scrollPosition > 100) {
        logo1.style.opacity = '0';
        logo2.style.opacity = '1';
    } else {
        logo1.style.opacity = '1';
        logo2.style.opacity = '0';
    }
});

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // Toggle active class
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
