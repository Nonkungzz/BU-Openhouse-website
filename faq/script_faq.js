// เปิด/ปิดเมนูมือถือเมื่อกดไอคอน
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});




function showPopup(index) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    // เปลี่ยนข้อความใน popup ตาม index
    const messages = [
        "Join us on August 29-31, 2024 at Bangkok University - Main Campus (Rangsit)",
        "You can register in advance for the BU OPEN HOUSE at https://openhouse.bu.ac.th/en/register or register on-site at the PRO-CENTER, located in Building A3.",
        "You only need to register once for the BU OPEN HOUSE. After that, you can view the activity schedules for the different clusters on the website. If you’re interested in any specific activities, simply scan the QR code at each faculty/program’s activity station to join in!",
        "Bangkok University welcomes diversity in attire. You can choose between wearing your school uniform or a free-style outfit, as long as it is appropriate for an educational setting.",
        "All faculty activities will start at 9:00 AM and end at 4:30 PM. After that, enjoy a special evening event featuring a concert and musical performances on the main stage in the Hallway - Building C6, Surat Osathanugrah Library from 5:00 PM to 8:00 PM."
    ];
    popupText.innerText = messages[index - 1];
    popup.style.display = 'block'; // แสดง popup

    // รออนิเมชั่นก่อนแสดง
    setTimeout(() => {
        popup.classList.add('show'); // เพิ่มคลาสเพื่อแสดงอนิเมชั่น
    }, 10);
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // ซ่อน popup
}


// ฟังก์ชันเพื่อแสดงอนิเมชั่นเมื่อโหลดหน้า
window.onload = function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show'); // เพิ่มคลาส show เพื่อเริ่มอนิเมชั่น
        }, index * 300); // หน่วงเวลาตามลำดับ (300ms)
    });
}
