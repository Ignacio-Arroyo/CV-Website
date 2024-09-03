// JavaScript to toggle the navigation menu on mobile
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navLinks').classList.toggle('active');
});
// script.js

// Optional: Add smooth scrolling for the timeline container
document.querySelector('.timeline-container').scrollLeft = 0;

// You can also add event listeners or additional interactions here
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        const content = item.querySelector('.timeline-content');
        const contentRect = content.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        // Reset any transformation
        content.style.transform = 'translateX(-50%)';

        // Check if the right edge of the content box goes beyond the viewport
        if (contentRect.right > viewportWidth) {
            // Adjust the transform to move the content box to the left
            const overflowRight = contentRect.right - viewportWidth;
            content.style.transform = `translateX(calc(-50% - ${overflowRight}px))`;
        }

        // Check if the left edge of the content box goes beyond the viewport
        if (contentRect.left < 0) {
            // Adjust the transform to move the content box to the right
            const overflowLeft = 0 - contentRect.left;
            content.style.transform = `translateX(calc(-50% + ${overflowLeft}px))`;
        }
    });
});


