const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconAside = document.querySelector('.navbar-shopping-cart')
const productAside = document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggleDesktopMenu)
iconMenu.addEventListener('click', toggleMobileMenu)
iconAside.addEventListener('click', toggleProductAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')

    const isProductAsideOpen = !productAside.classList.contains('inactive')
    if (isProductAsideOpen) {
        productAside.classList.add('inactive')
    }
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')

    const isProductAsideOpen = !productAside.classList.contains('inactive')
    if (isProductAsideOpen) {
        productAside.classList.add('inactive')
    }
}
function toggleProductAside() {
    productAside.classList.toggle('inactive')

    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')
    }
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
}
