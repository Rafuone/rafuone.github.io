$(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $(".navbar").addClass('smaller');
            $(".cv-btn").addClass('cv-animation');
            $(".mouse-icon").addClass('mouse-exit');
            $(".mouse p").addClass('mouse-p-exit');



        } else {
            $(".navbar").removeClass('smaller');
            $(".cv-btn").removeClass('cv-animation');
            $(".cv-btn").removeClass('cv-animation');




        }
    });
});