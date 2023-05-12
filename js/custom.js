$(document).ready(function(){
    $('.home-prod-sldr').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        margin: 15,    
        autoplayTimeout: 4000,
        smartSpeed: 400,
        center: true,
        navText: ['&#8592;', '&#8594;'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 5
            },
            1200: {
                items: 5
            }
        }
    });
    /* Video Slider */
    $('.pro-vdo-sld').owlCarousel({
        stagePadding: 200,
        loop:true,
        items:1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: -320,
        
    })
    
       
});
// Sticky Header JS Starts
if (jQuery(window).width() > 0) {
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 20) {
            jQuery("header").addClass("sticky");
        } else {
            jQuery("header").removeClass("sticky");
        }
    });
}
 // Video Play Button
 if ($(".wl-modal-btn").length > 0) {
    $(".wl-modal-btn").click(function() {
        var modalPopup = $(this).attr("data-modal");
        $(".wl-modal").removeClass("wl-modal-open");
        $("#" + modalPopup).addClass("wl-modal-open");
        $("body").addClass("wl-modal-active");
    });
    $(".wl-modal .wl-m-close").click(function() {
        $(".wl-modal").removeClass("wl-modal-open");
        $("body").removeClass("wl-modal-active");
        $(".video-play-box").removeClass("video-play");
    });
    $(".wl-modal").click(function(m) {
        if ($(m.target).is(".wl-modal-open")) {
            $(".wl-modal").removeClass("wl-modal-open");
            $("body").removeClass("wl-modal-active");
            $(".video-play-box").removeClass("video-play");
        }
    });
    document.addEventListener("keydown", function(event) {
        const key = event.key;
        if (key === "Escape") {
            $(".wl-modal").removeClass("wl-modal-open");
            $("body").removeClass("wl-modal-active");
        }
    });
}
// Video Popup
if ($("#videoPlaypopup").length > 0) {
    $("#videoPlaypopup").each(function() {
        var playBtn2 = $(".video-play-btn");
        var vBox2 = $(".wl-video-modal");
        var vPlay2 = $(".video-play-box");

        var Video2 = $(this).find("video");
        var Source2 = $(this).find("source");
        var playStopBtn2 = $(this).find("button") && $(vBox2);

        playBtn2.click(function() {
            var vPath2 = $(this).attr("data-src");
            Video2.trigger("load");
            Video2.trigger("play");
            vBox2.find(Source2).attr("src", vPath2);
        });

        playStopBtn2.click(function() {
            Source2.attr("src", "/");
            Video2.trigger("pause");
            vBox2.removeClass("wl-modal-open");
            $("body").removeClass("modal-open");
        });

        Video2.click(function() {
            event.stopPropagation();
        });

        Video2.on("ended", function() {
            Source2.attr("src", "/");
            Video2.trigger("pause");
            vBox2.removeClass("wl-modal-open");
            vPlay2.removeClass("video-play");
            $("body").removeClass("modal-open");
        });

        $(document).on("keydown", function(event) {
            if (event.key === "Escape") {
                Source2.attr("src", "/");
                Video2.trigger("pause");
                vPlay2.removeClass("video-play");
            }
        });
    });
}