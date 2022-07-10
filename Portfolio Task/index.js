const openMenuBtn = document.querySelector(`#open-menu-btn`);
const closeMenuBtn = document.querySelector(`#close-menu-btn`);
const menu = document.querySelector(`.nav-menu`);

openMenuBtn.addEventListener(`click`, () => {
    menu.style.display = `block`;
    closeMenuBtn.style.display = `block`;
    openMenuBtn.style.display = `none`;
})

const closeMenu = () => {
    menu.style.display = `none`;
    closeMenuBtn.style.display = `none`;
    openMenuBtn.style.display = `block`;
}

closeMenuBtn.addEventListener(`click`, closeMenu)

if (window.innerWidth < 1024) {
    document.querySelectorAll(`.nav-menu li a`).forEach(navItem => {
        navItem.addEventListener(`click`, closeMenu);
    })
}

// Changing the nav background on scroll

window.addEventListener(`scroll`, () => {
    document.querySelector(`nav`).classList.toggle(`window-scroll`, window.scrollY > 0);
})