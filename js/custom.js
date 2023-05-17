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
        loop: true,
        autoplay: true,
        responsiveClass: true,
        nav: true,
        margin: 30,    
        autoplayTimeout: 4000,
        smartSpeed: 400,
        center: true,
        responsive: {
            0: {
                items: 2,
                margin: 10, 
            },
            480: {
                items: 3,
                margin: 10, 
            },
            575: {
                items: 3,
                margin: 10, 
            },
            991: {
                items: 4
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
            991: {
                margin: -80
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

(function($) { "use strict";
 
 	//Parallax            
              
	function scrollBanner() {
	  $(document).on('scroll', function(){
      var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
          'top' : (scrollPos/2)+'px',
          'opacity' : 1-(scrollPos/700)
        });
        $('.parallax-00').css({
          'top' : (scrollPos/-3.5)+'px'
        });
        $('.parallax-01').css({
          'top' : (scrollPos/-2.8)+'px'
        });
        $('.parallax-top-shadow').css({
          'top' : (scrollPos/-2)+'px'
        });
      });    
	  }
	scrollBanner();	              

	//Page cursors

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
              
  
//Scroll back to top
// Cursor JS 
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')
  
  });            
              
})(jQuery); 