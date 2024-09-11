(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();

	(function($) {

		$(document).ready(function() {
	  
		  function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
			  'total': t,
			  'days': days,
			  'hours': hours,
			  'minutes': minutes,
			  'seconds': seconds
			};
		  }
	  
		  function initializeClock(endtime) {
			function updateClock() {
			  var t = getTimeRemaining(endtime);
			  document.querySelector(".days > .value").innerText = t.days;
			  document.querySelector(".hours > .value").innerText = t.hours;
			  document.querySelector(".minutes > .value").innerText = t.minutes;
			  document.querySelector(".seconds > .value").innerText = t.seconds;
	  
			  if (t.total <= 0) {
				clearInterval(timeinterval);
				// Opcionalmente, limpiar localStorage si el contador termina
				localStorage.removeItem('countdownEndtime');
			  } else {
				// Actualizar el tiempo final en localStorage
				localStorage.setItem('countdownEndtime', endtime);
			  }
			}
	  
			var timeinterval = setInterval(updateClock, 1000);
			updateClock(); // Ejecutar inmediatamente para mostrar el valor inicial correcto
		  }
	  
		  // Obtener o establecer endtime en localStorage
		  var endtime = localStorage.getItem('countdownEndtime');
	  
		  if (!endtime) {
			// Establecer endtime para 7 días, 0 horas, 8 minutos, 59 segundos desde ahora
			var futureDate = new Date();
			futureDate.setDate(futureDate.getDate() + 7);
			futureDate.setHours(futureDate.getHours() + 0);
			futureDate.setMinutes(futureDate.getMinutes() + 8);
			futureDate.setSeconds(futureDate.getSeconds() + 59);
			endtime = futureDate.toISOString();
			localStorage.setItem('countdownEndtime', endtime);
		  }
	  
		  initializeClock(endtime);
	  
		});
	  
	  })(jQuery);
	  
	  
	  

})(jQuery);