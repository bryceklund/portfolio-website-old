/*function scrollAnimation() {
    console.log('`scrollAnimation is running...');

    $('#projects-link').click(function() {
        $(window).scrollTo($('#project1', 1000));
    });
}*/

function windowH(viewportW, viewportH) {
    if (viewportW.matches && viewportH.matches) {
        var wH = $(window).height();
        $('main').css({height: wH});
    } else {
        $('main').css({height: '900px'});
    }
}

$('.projects-link').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
        scrollTop: $('#project2').offset().top
    }, 1000);
});

 function titleFormat(viewport) {
     if (viewport.matches) {
         $('header h2').replaceWith('<h2>Full stack developer, musician, IT professional</h2>');
     }
 }

 
let viewportW = window.matchMedia("(min-width: 700px)")
let viewportH = window.matchMedia("(min-height: 500px)")
let viewportWidth = $(window).width();

 windowH(viewportW, viewportH);
 titleFormat(viewportW);