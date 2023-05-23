$(document).ready(function(){
    $('.banner-slider').owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        dots: true,
        margin: 15,
        autoplayTimeout: 50000,
        smartSpeed: 400,
        items:1,
        //animateOut: 'slideOutDown',
        //animateIn: 'flipInX',
        responsive: {}
    });
    $('.home-prod-sldr').owlCarousel({
        loop: false,
        autoplay: false,
        responsiveClass: true,
        nav: false,
        margin: 30,    
        autoplayTimeout: 4000,
        smartSpeed: 400,
        center: false,
        responsive: {
            0: {
                items: 2,
                margin: 10, 
                loop: true,
                autoplay: true,
                center: true,
                autoplayTimeout: 4000,
                smartSpeed: 400,
            },
            480: {
                items: 3,
                margin: 10, 
                loop: true,
                autoplay: true,
                center: true,
                autoplayTimeout: 4000,
                smartSpeed: 400,
            },
            575: {
                items: 3,
                margin: 10, 
                loop: true,
                autoplay: true,
                center: true,
                autoplayTimeout: 4000,
                smartSpeed: 400,
            },
            991: {
                items: 4,
                loop: true,
                autoplay: true,
                center: true,
                autoplayTimeout: 4000,
                smartSpeed: 400,
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
        responsive: {
            0: {
                margin: -100,
                stagePadding: 40,
            },
            360: {
                margin: -100,
                stagePadding: 50,
            },
            480: {
                margin: -120,
                stagePadding: 80,
            },
            768: {
                margin: -100,
                center: true,
                stagePadding: 100,
            },
            992: {
                margin: -130
            },
            1200: {
                margin: -120
            },
            1300: {
                margin: -220
            }
        }
        
    })

    $(".menu-btn").on("click", function(e) {
        $(".menu-float").toggleClass("m-open"), e.preventDefault()
    }), $(".close-btn").on("click", function(e) {
        $(".menu-float").removeClass("m-open"), e.preventDefault()
    })

    
    // Set time imterval to pop the heart in the banner
    setInterval(function(){ 
        $('.banner-heart').addClass("pop")
    }, 3000);

    // Instagram slider
    function detect_active() {
        // get active
        var get_active = $("#dp-slider .dp_item:last-child").data("class");
        $(".bg-item").removeClass("active");
        $(".bg-item[data-item=" + get_active + "]").addClass("active");
      }
      $("#dp-next").click(function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
        detect_active();
      });
    
      $("#dp-prev").click(function () {
        var total = $(".dp_item").length;
        $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
    
        detect_active();
      });
      
      $("body").on("click", "#dp-slider .dp_item:not(:last-child)", function () {
        var get_slide = $(this).attr("data-class");
        console.log(get_slide);
        $("#dp-slider .dp_item[data-class=" + get_slide + "]")
          .hide()
          .appendTo("#dp-slider")
          .fadeIn();
        $.each($(".dp_item"), function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
    
        detect_active();
      });
});
// Sticky Header JS Starts
if ($(window).width() > 0) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
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

//Page cursors
(function($) { "use strict";
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
})($); 