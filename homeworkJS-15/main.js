$("a").click(function(){
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 1000);
});
$('body').append('<img id="scrollTop" src="img/scroll_to_top.png">');
$('#scrollTop').css({visibility:'hidden',width:30,height:30,position:'fixed',
    right:30, bottom:30, border:0, background: 'blue'});

$(window).scroll(function(){
    if ($(window).scrollTop() > 800) {
    $('#scrollTop').css('visibility','visible');
    }
    if($(window).scrollTop() === 0){
        $('#scrollTop').css('visibility','hidden')
    }
});
$('#scrollTop').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 1500)
});

$('#toggleButton').click(function(){
    $('#scroll-2').slideToggle('slow');
    let $elem = $("#toggleButton");
    $elem.text().trim() === 'Close' ? $elem.text('Open')
        : $elem.text('Close');
});
