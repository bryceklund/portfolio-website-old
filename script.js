function scrollAnimation() {
    $(document).ready(function() {
    console.log('`scrollAnimation is running...');
    $('.projects-link').localScroll();
    }); 
}



function windowH(viewport) {
    if (viewport.matches) {
        var wH = $(window).height();
    
        $('main').css({height: wH});
        $('.project').css({height: wH});
    } else {
        $('main').css({height: '900px'});
    }
 }

 function titleFormat(viewport) {
     if (viewport.matches) {
         $('header h2').replaceWith('<h2>Full stack developer, musician, IT professional</h2>');
     }
 }
 
let viewport = window.matchMedia("(min-width: 700px)")

 scrollAnimation();
 windowH(viewport);
 titleFormat(viewport);