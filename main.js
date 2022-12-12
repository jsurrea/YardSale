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

const productList = []
for (let i = 0; i < 12; i++) {
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
}

function renderProducts(productList) {
    for(product of productList) {
        const cardsContainer = document.querySelector('.cards-container')
    
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        cardsContainer.appendChild(productCard)
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        productCard.appendChild(img)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        productCard.appendChild(productInfo)
        
        const productInfoDiv = document.createElement('div')
        productInfo.appendChild(productInfoDiv)
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        productInfoDiv.appendChild(productPrice)
        
        const productName = document.createElement('p')
        productName.innerText = product.name
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement('figure')
        productInfo.appendChild(productInfoFigure)
    
        const productFigureImg = document.createElement('img')
        productFigureImg.setAttribute('src', 'icons/bt_add_to_cart.svg')
        productInfoFigure.appendChild(productFigureImg)
    }
}

renderProducts(productList)