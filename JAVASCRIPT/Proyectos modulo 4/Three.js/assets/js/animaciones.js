document.addEventListener('DOMContentLoaded', ()=>{
    gsap.fromTo(
        'canvas',
        {
            left: "50%",
            transform:'translate(-50%,0',
        },
        {
            left:'100%',
            transform: 'translate(-100%,0',
            scrollTrigger: {
                trigger:'#scene',
                start:"bottom center",
                end: "+=100%",
                scrub:"true"
            }
        }
    )
});
document.addEventListener('DOMContentLoaded', ()=>{
    gsap.fromTo(
        'canvas',
        {
            left: "100%",
            transform:'translate(-100%,0',
        },
        {
            left:'100%',
            transform: 'translate(-100%,0',
            scrollTrigger: {
                trigger:'.section1',
                start:"bottom center",
                end: "+=100%",
                scrub:"true"
            }
        }
    )
});
document.addEventListener('DOMContentLoaded', ()=>{
    gsap.fromTo(
        'canvas',
        {
            left: "50%",
            transform:'translate(-50%,0',
        },
        {
            left:'100%',
            transform: 'translate(-100%,0',
            scrollTrigger: {
                trigger:'.section2',
                start:"bottom center",
                end: "+=100%",
                scrub:"true"
            }
        }
    )
});
document.addEventListener('DOMContentLoaded', ()=>{
    gsap.fromTo(
        'canvas',
        {
            left: "100%",
            transform:'translate(-100%,0',
        },
        {
            left:'100%',
            transform: 'translate(-100%,0',
            scrollTrigger: {
                trigger:'.section3',
                start:"bottom center",
                end: "+=100%",
                scrub:"true"
            }
        }
    )
});