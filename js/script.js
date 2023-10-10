$(document).ready(function(){
  $(window).scroll(function () {
    var header = $(".header");
    if ($(window).scrollTop() > 50) {
      header.css("backgroundColor", "#0d1017");
    } else {
      header.css("backgroundColor", "rgba(0, 0, 0, 0)");
    }
  });

  $('.carousel').slick({
    centerMode: true,
    variableWidth: true,
  });   

  $('.slick-slide').on('click', function(e) {
    e.preventDefault();
  });
	
	
		// Capture o evento 'beforeChange' do Slick Slider
	$('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		// Desabilite o Magnific Popup
		enableMagnific = false;
	});

	// Capture o evento 'afterChange' do Slick Slider
	$('.slick-slider').on('afterChange', function(event, slick, currentSlide) {
		// Habilite o Magnific Popup
		enableMagnific = true;
	});
	
	var enableMagnific = true;
	
  $('.image-link').magnificPopup({
		type: 'image',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
	  
	  
  	gallery: {
    	// options for gallery
    	enabled: true
  	},
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-fade',
		disableOn: function() {return enableMagnific;}
  });
});
