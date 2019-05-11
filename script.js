function scrollAnimation() {
    $(document).ready(function() {
    console.log('`scrollAnimation is running...');
    $('.projects-link').localScroll();
    }); 
}

function windowH() {
    var wH = $(window).height();
 
    $('main').css({height: wH});
    $('.project').css({height: wH});
 }
 
 scrollAnimation();
 windowH();