// เปิด/ปิดเมนูมือถือเมื่อกดไอคอน
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});
