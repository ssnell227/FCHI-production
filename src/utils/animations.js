import gsap from 'gsap'

export const slideIn = element => {
    gsap.to(element, 1, {
        opacity:1,
        x: 0,
        ease: 'power4.out',
    })
}

export const slideOut = element => {
    gsap.to(element, 1, {
        opacity: 0,
        x: -50,
        ease: 'power4.out',
    })
}
export const slideInRight = element => {
    gsap.to(element, 1, {
        opacity:1,
        x: 0,
        ease: 'power4.out',
    })
}
export const slideOutRight = element => {
    gsap.to(element, 1, {
        opacity: 0,
        x: 50,
        ease: 'power4.out',
    })
}
export const fadeIn = element => {
    gsap.to(element, 1, {
        opacity: 1,
        y: 0,
        ease: 'power4.out',
        stagger: {
            amount: 0.3
        }
    })
}

export const fadeOut = element => {
    gsap.to(element, 1, {
        opacity: 0,
        y: -50,
        ease: 'power4.out;'
    })
}