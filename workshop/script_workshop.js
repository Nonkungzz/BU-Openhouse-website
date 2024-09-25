// เปิด/ปิดเมนูมือถือเมื่อกดไอคอน
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        setTimeout(() => {
            element.classList.add('show');
        }, 500); // Delay 0.5 วินาทีเพื่อให้มีการปรากฏขึ้น
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeHand = document.querySelector('.fade-in-hand');
    
    fadeElements.forEach(element => {
        setTimeout(() => {
            element.classList.add('show');
        }, 500); // Delay 0.5 วินาทีเพื่อให้มีการปรากฏขึ้น
    });

    // เพิ่ม animation สำหรับรูปภาพมือ
    setTimeout(() => {
        fadeHand.classList.add('show');
    }, 1000); // หน่วงเวลา 1 วินาทีสำหรับมือ
});
