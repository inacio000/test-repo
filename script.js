var menu = document.querySelector('.burger'),
    iconMenu = document.querySelector('header .burger'),
    firstNav = document.querySelector('.fr-nav'),
    secondLogo = document.querySelector('.logo-main'),
    menuOpen = document.querySelector('header nav ul'),
    contact = document.querySelector('header .fr-contact'),
    headerColor = document.querySelector('header'),
    burgerDiv = document.querySelector('header .burger-div')

const button = document.querySelector('.zakaz button'),
    overlay = document.querySelector('.overlay'),
    closeModal = document.querySelector('.modal-close'),
    showModal = document.querySelector('.modal-box')

menu.addEventListener('click', function () {
    if (iconMenu.getAttribute("src") == 'src/burger.svg') {
        iconMenu.setAttribute("src", 'src/close.svg')
        menu.style.float = 'right'
        firstNav.style.flexDirection = 'row-reverse'
        menuOpen.style.display = 'flex'
        contact.style.opacity = '0'
        headerColor.style.backgroundColor = 'var(--header-color)'
        secondLogo.setAttribute("src", 'src/images/logo2.png')
        burgerDiv.style.width = '110px'
        document.body.style.padding = '0'
        overlay.style.display = 'block'
        overlay.style.zIndex = '150'
    } else {
        iconMenu.setAttribute("src", 'src/burger.svg')
        firstNav.style.flexDirection = 'row'
        menu.style.float = 'left'
        secondLogo.setAttribute("src", 'src/images/logo.png')
        menuOpen.style.display = 'none'
        contact.style.opacity = '1'
        headerColor.style.backgroundColor = '#fff'
        overlay.style.display = 'none'
    }

    menu.classList.toggle('active')
})

button.addEventListener('click', function () {
    overlay.style.display = 'block'
    overlay.style.position = 'fixed'
    overlay.style.top = '0'
    showModal.style.display = 'block'
})

overlay.addEventListener('click', function () {
    overlay.style.display = 'none'
    showModal.style.display = 'none'
})

closeModal.addEventListener('click', function () {
    overlay.style.display = 'none'
    showModal.style.display = 'none'
})