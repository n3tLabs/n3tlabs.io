var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
const header = document.querySelector('.header.header-absolute')

function toggleModal() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}


menuTrigger.onclick = function() {
    toggleModal()
    header.classList.add('header-to-fixed')
    let isMenuOpen = header.classList.contains('header-to-fixed')
    let mobileMenuLinks = document.querySelectorAll('.mobLinks')
    if (isMenuOpen) {
        mobileMenuLinks.forEach( mobileMenuLink => {
            mobileMenuLink.addEventListener('click', toggleModal )
        })
    }
    
}
