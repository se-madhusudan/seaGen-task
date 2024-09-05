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
    -------------------------- Pop-up question 10% scroll ----------------------
*/
