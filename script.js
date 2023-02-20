var menu = document.querySelector('.burger')
var iconMenu = document.querySelector('header .burger')
var firstNav = document.querySelector('.fr-nav')
var secondLogo = document.querySelector('.logo-main')
var menuOpen = document.querySelector('header nav ul')
var contact = document.querySelector('header .fr-contact')
var headerColor = document.querySelector('header')
var burgerDiv = document.querySelector('header .burger-div')

menu.addEventListener('click', function() {
    if (iconMenu.getAttribute("src") == 'src/burger.svg') {
        menu.style.float = 'right'
        iconMenu.setAttribute("src", 'src/close.svg')
        firstNav.style.flexDirection = 'row-reverse'
        menuOpen.style.display = 'flex'
        contact.style.opacity = '0'
        headerColor.style.backgroundColor = 'var(--header-color)'
        secondLogo.setAttribute("src", 'src/images/logo2.png')
        burgerDiv.style.width = '75px'
        document.body.style.padding = '0'
    } else {
        iconMenu.setAttribute("src", 'src/burger.svg')
        firstNav.style.flexDirection = 'row'
        menu.style.float = 'left'
        secondLogo.setAttribute("src", 'src/images/logo.png')
        menuOpen.style.display = 'none'
        contact.style.opacity = '1'
        burgerDiv.style.width = '100px'
        headerColor.style.backgroundColor = '#fff'
    }

    menu.classList.toggle('active')
})