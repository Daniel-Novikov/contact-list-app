function isDesktop(){
    if($(window).width() >= 1024){
        return true;
    }
    return false;
}

function initCarousel(sly){
    // Only initialise carousel on desktop
    if(isDesktop()){
        sly.init();
    }

    // Disable the carousel if window resized down
    // or reload if windows width changed
    window.addEventListener('resize', function(){
        if(isDesktop()){
            sly.init();
            sly.reload();
        }
        else {
            sly.destroy();
        }
    }, true);
}
