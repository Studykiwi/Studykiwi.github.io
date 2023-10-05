document.addEventListener("DOMContentLoaded", function () {
    const leftPanelLinks = document.querySelectorAll(".left-panel a");

    leftPanelLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the target section's ID (e.g., "#section1")
            const targetSectionId = this.getAttribute("href");

            // Get the target section's position
            const targetSection = document.querySelector(targetSectionId);
            const targetSectionTop = targetSection.getBoundingClientRect().top;
            const currentScrollPosition = window.pageYOffset;

            // Calculate the target scroll position
            const targetScrollPosition = currentScrollPosition + targetSectionTop - 50;

            // Scroll to the target section with the calculated position
            window.scrollTo({
                top: targetScrollPosition,
                behavior: "smooth" // Smooth scrolling animation
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");

    dropdownButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const dropdownContent = this.nextElementSibling; // Get the next sibling, which is the dropdown content
            const arrowIcon = this.querySelector(".arrow-icon"); // Get the arrow icon within the button

            // Toggle the visibility of the dropdown content
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                arrowIcon.textContent = "▶"; // Set the arrow down
            } else {
                dropdownContent.style.display = "block";
                arrowIcon.textContent = "▼"; // Set the arrow left
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const leftPanel = document.querySelector('.left-panel');
    const content = document.querySelector('.content');

    toggleButton.addEventListener('click', () => {
        leftPanel.classList.toggle('closed');
        leftPanel.style.transition = '0.3s ease';
        content.classList.toggle('widemode');
    });
});

function toggleLeftPanel() {
    const windowWidth = window.innerWidth;
    const leftPanel = document.querySelector('.left-panel');
    const content = document.querySelector('.content');

    if (windowWidth <= 1000) {
        leftPanel.classList.add('closed'); // Add the 'closed' class
        content.classList.add('widemode'); // Expand content
    } else {
        leftPanel.classList.remove('closed'); // Remove the 'closed' class
        content.classList.remove('widemode'); // Collapse content
    }
}

// Initial call to set the state based on window width
toggleLeftPanel();

// Add a resize event listener to update the state when the window is resized
window.addEventListener('resize', toggleLeftPanel);


window.addEventListener('scroll', () => {
    const leftPanel = document.querySelector('.left-panel');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
        leftPanel.style.top = '50px';
        leftPanel.style.position = 'fixed';
        leftPanel.style.transition = 'none'; // Disable transition
    } else {
        leftPanel.style.position = 'absolute';
        leftPanel.style.top = (150) + 'px';
        leftPanel.style.transition = '0s ease'; // Enable transition
    }
});
