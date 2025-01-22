document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.style.opacity = 1;
        }
        
        if (currentScroll > lastScroll && currentScroll > 50) {
            header.style.opacity = Math.max(0, 1 - (currentScroll / 300));
        }
        
        lastScroll = currentScroll;
    });
});
