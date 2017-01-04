// Landing Elements
//var pContainerHeight = $('.welcome-section').height();

$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    /*
    if (wScroll <= pContainerHeight) {

        $('.logo').css({
            'transform': 'translate(0px, ' + wScroll / 2 + '%)'
        });

        $('.back-bird').css({
            'transform': 'translate(0px, ' + wScroll / 4 + '%)'
        });

        $('.fore-bird').css({
            'transform': 'translate(0px, -' + wScroll / 40 + '%)'
        });

    }
    */

    if (wScroll > $('#portfolio').offset().top - ($(window).height() / 1.2)) {

        $('#portfolio .c-portfolio__thumb').each(function(i) {

            setTimeout(function() {
                $('#portfolio .c-portfolio__thumb').eq(i).addClass('is-showing');
            }, (1000 * (Math.exp(i * 0.14))) - 1000);
        });

    }
});
