$(document).ready(function() {

    $('#home-welcome').parallax("50%", -0.2);
    //$('#sec-01').parallax("50%", -0.2);
	//$('#sec-02').parallax("50%", -0.2);
	//$('#sec-03').parallax("50%", -0.1);
	//$('#sec-04').parallax("50%", -0.2);


    /*ONE PAGE NAV*/
    $('nav.nav').onePageNav({
        //filter : ':not(.external)',
        scrollThreshold : 0.25
    });
    
    
    $('.top-box, .crollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash);
		e.preventDefault();
	});
    
    
    //stick Nav when scroll
    var stickyNavTop = $('nav.navi').offset().top;  
    if (jQuery(window).width() > 1880 && jQuery(window).width() < 2000) { 
		stickyNavTop = $('nav.navi').offset().top + 40;
	}
	if (jQuery(window).width() > 1500 && jQuery(window).width() < 1870) { 
		stickyNavTop = $('nav.navi').offset().top + 20;
	}
	var stickyNav = function(){  
		var scrollTop = $(window).scrollTop();  
		if (scrollTop > stickyNavTop) {   
		    $('nav.navi').addClass('sticky'); 
		    $('header').css('margin-bottom', '160px'); 
		} else {  
		    $('nav.navi').removeClass('sticky');   
		    $('header').css('margin-bottom', '80px'); 
		}  
	};  
	stickyNav();  
  
	$(window).scroll(function() {  
	    stickyNav();  
	});  
    //End stick Nav when scroll
    
    
    
    
    //full height header
    if (jQuery(window).width() > 1500) { 
		var   window_height = $(window).height();
		function fullscreenImgHeight(){
			$('#home-welcome').css('height', window_height);
			
			if (jQuery(window).width() > 1800 && jQuery(window).width() < 2000) {  
				$('#home-welcome').css('padding-top', '200px');
				$('#home-welcome').css('overflow', 'hidden');
				var contentTop = $('.home-midd').offset().top;
				//alert(contentTop);
				var contentHeight = $('.home-midd').height();
				var newHeight = $('#home-welcome').height() - contentTop + contentHeight - 98;
			}
			else {
				$('#home-welcome').css('padding-top', '100px');
				$('#home-welcome').css('overflow', 'hidden');
				var contentTop = $('.home-midd').offset().top - 19;
				//alert(contentTop);
				var contentHeight = $('.home-midd').height();
				var newHeight = $('#home-welcome').height() - contentTop + contentHeight - 137;
			}
			
		 	
		 	//alert(contentHeight);
		 	$('.home-midd').css('height', newHeight) ;
			
			
		}
		fullscreenImgHeight(); 
		$(window).bind('resize',function() {
			//fullscreenImgHeight();
		});
	}
    //End full height header
    
    
    /* BORDERS */
    var w = $(window).width();
    $('.top_box_left, .top_box_right').css('border-left-width', w);
    $('.bot_box_left, .bot_box_right').css('border-right-width', w);
    
     
    
    $('#basic-modal .basic').click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});
	
	//Modal Form
    $('.modal').click(function (e) {
		$('#modal-content').modal();
        $('#simplemodal-container').css('height', 'auto');
		return false;
	});

   $(".mtoggle").click(function() {
        $(this).parent().next("ul").slideToggle(300);
    });
});

//function is called after form is submitted, sets timer that closes overlay
function closeModalForm(){
    modalTimer = window.setTimeout(closeOverlay, 1000);
}
function closeOverlay()
{
        $.modal.close();
}

// CAROUSEL
$(function() {

    $.fn.startCarousel = function() {
        var bodywidth = $('body').width(),
            itemwidth = $('.mycarousel li').outerWidth(true),       
            mycontwidth = bodywidth > itemwidth ? bodywidth - bodywidth%itemwidth : itemwidth,
            licount = $('.mycarousel li').size(),
            jscroll = 1;
            
        if(licount > mycontwidth/itemwidth){
            jscroll =  mycontwidth/itemwidth;
        } else {
            jscroll = 0;
            mycontwidth = licount * itemwidth;
        }
        
        //$('.team-wrap').width(mycontwidth);
            
        $('.mycarousel').jcarousel({
            scroll:jscroll
        });
    };
    
    $(this).startCarousel();
    
    $(window).resize(function(){
        $(this).startCarousel();
    }); 
    var carousel = $('.mycarousel');
    $(carousel).jcarousel({
        scroll:1,
        wrap: 'circular'
    });
    
    carousel.touchwipe({
        wipeLeft: function() {
            carousel.jcarousel('next');
        },
        wipeRight: function() {
            carousel.jcarousel('prev');
        }
    });
    
});


$(window).resize(function() {
    var w = $(window).width();
    $('.top_box_left, .top_box_right').css('border-left-width', w);
    $('.bot_box_left, .bot_box_right').css('border-right-width', w);
});