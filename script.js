function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    // Function to scroll to a specific section by index
    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth' });
            sessionStorage.setItem('currentSection', `#${sections[index].id}`);
            currentSectionIndex = index;
        }
    }

    // Scroll to the saved section if it exists
    const savedSection = sessionStorage.getItem('currentSection');
    if (savedSection) {
        sections.forEach((section, index) => {
            if (`#${section.id}` === savedSection) {
                currentSectionIndex = index;
                section.scrollIntoView();
            }
        });
    }

    // Event listener to track the current section on the screen
    window.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                currentSectionIndex = index;
                sessionStorage.setItem('currentSection', `#${section.id}`);
            }
        });
    });

    // Next and Previous buttons event listeners
    document.getElementById('nextBtn').addEventListener('click', () => {
        scrollToSection(currentSectionIndex + 1);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        scrollToSection(currentSectionIndex - 1);
    });
});