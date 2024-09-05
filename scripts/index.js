/* 
    -------------------------- Mobile Menu ----------------------
*/
const menuIcon = document.querySelector('.menuIcon img');
const nav = document.querySelector('.mobileNav');

nav.style.display = 'none'; //initially setting the display

menuIcon.addEventListener('click', () => {
    if(nav.style.display === 'none') {
        nav.style.display = 'block';
        menuIcon.setAttribute('src', 'images/menu-cross-button.png');
    } else {
        nav.style.display = 'none';
        menuIcon.setAttribute('src', 'images/menu-button.png');
    }
});

/* 
    -------------------------- Banner Background image ----------------------
*/
const heroImage = document.querySelector('.heroImage');

function setBackground() {
    const vpWidth = window.innerWidth;

    if (vpWidth >= 1440) {
        heroImage.setAttribute('src', 'images/desktop-banner.png');
    } else if (vpWidth >= 1024) {
        heroImage.setAttribute('src', 'images/laptop-banner.png');
    } else if (vpWidth >= 768) {
        heroImage.setAttribute('src', 'images/tab-banner.png');
    } else {
        heroImage.setAttribute('src', 'images/mobile-banner.png');
    }
}

// Set the background image on initial load
setBackground();

// Update the background image on window resize
window.addEventListener('resize', setBackground);

/* 
    -------------------------- Pop-up question 10% scroll ----------------------
*/
