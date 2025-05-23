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




const previewModal = document.getElementById("previewModal");
const previewImage = document.getElementById("previewImage");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".preview-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const imgSrc = this.dataset.preview; 
    previewImage.src = imgSrc;
    previewModal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  previewModal.style.display = "none";
});

// Optional: close modal when clicking outside image
previewModal.addEventListener("click", (e) => {
  if (e.target === previewModal) {
    previewModal.style.display = "none";
  }
});

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


