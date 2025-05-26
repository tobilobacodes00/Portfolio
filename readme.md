# Tobiloba Sulaimon's Portfolio

Welcome to the official repository for **Tobiloba Sulaimon's Portfolio** – a modern, interactive, and fully responsive showcase of my journey as a Frontend Developer and Graphics Designer. This project is a culmination of my skills, creativity, and attention to detail, designed to provide visitors with an engaging and seamless experience across all devices.

---

## 🌐 Live Demo

> [View Portfolio Live](https://tobilobacodes00.github.io/Portfolio/)

---

## 📸 Overview

This portfolio is more than just a collection of projects—it's a living, breathing digital resume. Every section, animation, and interaction is crafted to reflect my personality, technical skills, and design sensibilities. From the smiling logo that greets you as you scroll, to the animated project modals and accessible navigation, every detail is intentional.

---

## 🗂️ Project Structure

- **index.html** – Main landing page (About, Projects, Skills, Certifications, Contacts)
- **styles.css** – Custom responsive styles for all sections and components
- **script.js** – Handles navigation highlighting, modal previews, back-to-top button, logo transitions, and interactive behaviors
- **myCertifications.html** – Dedicated certifications page, grouped by Hard and Soft Skills
- **myCertifications.css** – Custom styles for the certifications page
- **mycertifications.js** – JS for filtering and navigation on certifications page
- **exploreMore.html** – Additional projects page with modal previews
- **/images/** – All images, logos, and project screenshots (hosted externally for performance)
- **/moreProjects/** – Subfolders for full project demos
- **favicon & manifest** – For PWA support and device icons

---

## ✨ Features & Highlights

### 1. **Hero Section**
- **Video Background:** Dynamic video sets the tone for the site, with a bold intro and tagline.
- **Animated Typewriter Effect:** Engages users immediately with a modern, techy feel.

### 2. **About Me**
- **Personal Bio:** A concise, friendly introduction with a professional headshot.
- **Values & Journey:** Brief narrative about my path and what drives me.

### 3. **Interactive Logo**
- **Smiling Logo Animation:**  
  - The logo transitions from a neutral to a smiling expression as the user scrolls, adding a playful, memorable touch.
  - Achieved via JavaScript scroll listeners and CSS transitions for smoothness.
  - Two logo images (`#logo1` and `#logo2`) are swapped with a fade effect for a delightful micro-interaction.

### 4. **Navigation**
- **Sticky Header:** Always accessible, with smooth transitions and semi-transparent background.
- **Active Link Highlighting:** The current section is highlighted in the navbar as you scroll, improving orientation.
- **Keyboard Accessibility:** All navigation links are focusable and usable via keyboard.

### 5. **Projects**
- **Modern Card Grid:** Projects are displayed in a responsive grid with subtle hover effects.
- **Project Details:** Each card includes an image, title, description, and tech stack.
- **Preview Modal:**  
  - Clicking "Preview" opens a modal with a larger image and details.
  - Modal is keyboard-accessible and closes on overlay click or close button.
  - Modal size adapts to image resolution, with CSS ensuring minimum and maximum dimensions for consistency.
- **"View Full Project":** Direct links to live demos or GitHub repositories.
- **AOS Animations:** Cards animate into view as you scroll, powered by the Animate On Scroll library.

### 6. **Explore More Projects**
- **Dedicated Page:** Additional projects are showcased with the same interactive cards and modal previews.
- **Consistent Experience:** All features from the main projects section are preserved.

### 7. **Skills & Certifications**
- **Skills Cards:**  
  - Three categories: Frontend, Design, and Soft Skills.
  - Custom-styled lists with icons for each skill.
- **Certifications:**  
  - Prominent link to a detailed certifications page.
  - Certifications grouped into Hard and Soft Skills.
  - Each certification includes a logo, title, description, and PDF link.

### 8. **Certifications Page**
- **Filterable List:** Users can filter certifications by skill type.
- **Consistent Branding:** Colors, fonts, and layout match the main site.
- **Accessible Layout:** Responsive and easy to navigate.

### 9. **Contacts**
- **Contact Cards:**  
  - GitHub and Email are prominently displayed.
  - Social links (LinkedIn, Twitter, Instagram) are prepared for future use.
- **Accessible:** All contact methods are keyboard and screen reader friendly.

### 10. **Footer**
- **Copyright**
- **Back-to-Top Button:**  
  - Smooth scrolls to the top.
  - Only appears after scrolling down.
  - Keyboard and screen reader accessible.

---

## 🖌️ Design & UX Details

- **Color Palette:**  
  - Vibrant blues and cyans for a modern, tech-forward feel.
  - High contrast for readability.
- **Typography:**  
  - Google Fonts: Quicksand (clean, modern) and Baloo 2 (friendly, approachable).
- **Spacing & Layout:**  
  - Generous padding and margins for a clean, uncluttered look.
  - CSS Flexbox and Grid for responsive layouts.
- **Micro-Interactions:**  
  - Button hover effects, animated modals, and logo transitions create a lively experience.
- **Accessibility:**  
  - Semantic HTML, descriptive alt text, focus outlines, and ARIA attributes where needed.
  - Modal dialogs are keyboard accessible and close on ESC or overlay click.

---

## ⚙️ Technical Stack

- **HTML5** – Semantic, accessible markup
- **CSS3** – Flexbox, Grid, Media Queries, Animations
- **JavaScript (ES6+)** – DOM manipulation, event handling, modal logic, navigation highlighting
- **Font Awesome** – Iconography
- **AOS (Animate On Scroll)** – Scroll-triggered animations
- **Google Fonts** – Custom typography

---

## 📱 Responsiveness

- **Mobile-First Design:**  
  - All layouts adapt gracefully to mobile, tablet, and desktop.
  - Navigation, project cards, and modals are touch-friendly.
- **Media Queries:**  
  - Custom breakpoints for optimal viewing on all devices.
- **Image Handling:**  
  - Images are sized and constrained to prevent overflow or distortion.
  - Minimum modal sizes ensure consistent previews even for small images.

---

## 🏆 Accessibility & Best Practices

- **Semantic HTML:**  
  - Proper use of headings, sections, and ARIA roles.
- **Alt Text:**  
  - All images include descriptive alt attributes.
- **Keyboard Navigation:**  
  - All interactive elements are reachable and usable via keyboard.
- **Color Contrast:**  
  - Meets WCAG guidelines for readability.
- **Performance:**  
  - Optimized images and external hosting for faster load times.
- **Progressive Enhancement:**  
  - Works well even if JavaScript is disabled (core content remains accessible).

---

## 📝 How to Use / Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/tobilobacodes00/My_portfolio.git
   ```
2. **Navigate to the project folder:**
   ```sh
   cd My_portfolio/Portfolio
   ```
3. **Open `index.html` in your browser.**
4. **For full experience:**  
   - Ensure you have an internet connection for Google Fonts, Font Awesome, and AOS.
   - All images are hosted externally for performance.

---

## 🧩 Customization & Extensibility

- **Add Projects:**  
  - Duplicate a `.project-card` block in `index.html` or `exploreMore.html` and update the image, title, description, and links.
- **Add Certifications:**  
  - Edit `myCertifications.html` and update the JS/CSS as needed.
- **Update Branding:**  
  - Replace logo images in `/images/` and update references in HTML/CSS.
- **Expand Contact Methods:**  
  - Uncomment or add new social/contact cards in the Contacts section.

---

## 🛡️ License

This project is licensed under the [MIT License](./LICENSE).

---

## 🙏 Acknowledgements

- **freeCodeCamp** – For project inspiration and learning resources.
- **Font Awesome** – For icons.
- **AOS** – For scroll animations.
- **Google Fonts** – For beautiful typography.
- **Postimg.cc** – For image hosting.

---

## 💡 Final Notes

Every pixel, animation, and interaction in this portfolio is intentional. From the smiling logo that welcomes you as you scroll, to the accessible modals and responsive layouts, this project is a testament to my growth as a developer and designer. I hope you enjoy exploring it as much as I enjoyed building it!

If you have feedback, suggestions, or opportunities, feel free to [contact me](mailto:tobilobasulaimon@gmail.com) or connect via [GitHub](https://github.com/tobilobacodes00).

---

**Thank you for visiting! 🚀**
