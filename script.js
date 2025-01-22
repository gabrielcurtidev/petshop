    const video = document.getElementById('meuVideo');
    const menuBtn = document.querySelector('.menuToggle');
    const linkMobile = document.querySelector('.nav-links-mobile');
    const iconX = document.querySelector('.nav-links-mobile i');
    const menuMobileLinks = document.querySelector('.nav-links-mobile ul li a');
    
    video.addEventListener('play', () => {
            video.requestFullscreen();
    });

    document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        video.pause();
    }
    });

    menuBtn.addEventListener('click', function(){
        // menuBtn.classList.toggle('open');
        linkMobile.classList.toggle('open');
        document.body.style.overflow = 'hidden';

    })

    menuMobileLinks.addEventListener('click', function(){
        linkMobile.classList.remove('open');
        document.body.style.overflow = '';
    })
    
    iconX.addEventListener('click', function () {
        linkMobile.classList.remove('open');
        document.body.style.overflow = '';
        
    });