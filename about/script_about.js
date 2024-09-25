// เปิด/ปิดเมนูมือถือเมื่อกดไอคอน
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});



window.addEventListener('load', () => {
    // Fade-in content on load
    document.querySelector('.container').classList.add('show-content');
    
    // Delay for hands animation
    setTimeout(() => {
        document.querySelector('.hand-top').classList.add('show-hands');
        document.querySelector('.hand-bottom').classList.add('show-hands');
    }, 300); // Adjust timing as necessary
});
