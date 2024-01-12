// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk hilangkan nav hamburger menu
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});
// penjelasannya = tolong carikan saya elemen yg nama selektornya adalah tanda pagar hamburger menu, ketika dokumennya dot addeventlistener, ketika klik dimanapun di halaman klik, pakai function supaya bisa ambil eventnya, if adalah jika kita klik diluar hamburger menu dan diluar navbar