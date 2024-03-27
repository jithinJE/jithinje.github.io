document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentSections = document.querySelectorAll('.content');

    // Hide all content sections
    contentSections.forEach(function(section) {
          section.style.display = 'none';
    });

    // Show content related to the first menu item by default
    contentSections[0].style.display = 'block';

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Hide all content sections
            contentSections.forEach(function(section) {
                   section.style.display = 'none';
            });

            // Get the target section based on href
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Show the target content section
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});
