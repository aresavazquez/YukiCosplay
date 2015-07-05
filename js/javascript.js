$(document).on("ready", function(){
	var to = setTimeout( function (){
		TweenLite.to('.logoPreloader', .5, {scale:0});
		TweenMax.to('.preloader', .5, {opacity: 0, onComplete: function(){
			$('.all').css({display: 'block'});
			$('.preloader').css({display: 'none', onComplete: function(){
				TweenLite.to('.logo', 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: 0 });
			}});
		}});
	}, 3500);
	TweenMax.to('.logoPreloader', 1, {scale:1.3, repeat:-1, yoyo:true});
	

	$('.MENU').on('click', function(e){
		e.preventDefault (); // para no cambiar enseguida y permita hacer el efecto
		var top = $('.contenedorGeneral').offset().top; // cambia el valor del top
		console.log($('.contenedorGeneral').offset().top);// para mostrar la posiscion en top en la que se ecuentra
		TweenLite.to(window, 1, {scrollTo:{y: top}, ease:Power2.easeOut, onComplete: function(){
			TweenLite.to('.cara-1', 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: 100, opacity: 1 });
		}});
	});
	//$('.cara-1').on('mouseover', function(){
	//	TweenLite.to('.cara-2', 1, {display: 'block', opacity: 1});
	//});
	//$('.cara-2').on('mouseleave', function(){
	//	TweenLite.to('.cara-2', 1, {display: 'none', opacity: 0});
	//});
	$('.iconMenu').on('click', function (){
		TweenLite.to('.menuSite', 1, {ease: Expo.easeOut, y: -100, display: 'block', opacity: 1});
	});
	$('.menuHome').on('click', function(e){
		e.preventDefault (); // para no cambiar enseguida y permita hacer el efecto
		var top = $('#home').offset().top; // cambia el valor del top
		TweenLite.to(window, 1, {scrollTo:{y: top}, ease:Power2.easeOut
		});
	});
	$('.menuMe').on('click', function(e){
		e.preventDefault (); // para no cambiar enseguida y permita hacer el efecto
		var top = $('#aboutMe').offset().top; // cambia el valor del top
		TweenLite.to(window, 1, {scrollTo:{y: top}, ease:Power2.easeOut
		});
	});
	$('.menuCosplay').on('click', function(e){
		e.preventDefault (); // para no cambiar enseguida y permita hacer el efecto
		var top = $('#cosplay').offset().top; // cambia el valor del top
		TweenLite.to(window, 1, {scrollTo:{y: top}, ease:Power2.easeOut
		});
	});

});