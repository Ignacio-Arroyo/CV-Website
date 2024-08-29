// JavaScript to toggle the navigation menu on mobile
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navLinks').classList.toggle('active');
});