$(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $(".cv-btn").addClass('cv-animation');

        } else {
            $(".cv-btn").removeClass('cv-animation');
            $(".cv-btn").removeClass('cv-animation');
        }
    });
});


$(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $(".navbar").addClass('smaller');            
            $(".mouse-icon").addClass('mouse-exit');
            $(".mouse p").addClass('mouse-p-exit');
        } else {
            $(".navbar").removeClass('smaller');

        }
    });
});


