    const menu = document.querySelector('#mobile-menu')
    const menuLinks = document.querySelector('.navbar__menu')
    const navlogo = document.querySelector('#navbar__logo')
    const body = document.querySelector('body')

    // Display Mobile Menu
    const mobileMenu = () => {
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
        body.classList.toggle('active')
    }

menu.addEventListener('click', mobileMenu)

// Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
})

gsap.from('animate-history', {
    scrollTrigger: 'animte-history',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
})

gsap.from('animate-img', {
    scrollTrigger: 'animte-history',
    duration: 1.2,
    opacity: 0,
    x: -200,
})