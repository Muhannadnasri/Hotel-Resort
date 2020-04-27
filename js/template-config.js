/* --------------------------------------------------------------------------
 * File        : template-config.js
 * Version     : 1.0
 * Author      : IMediapixel
 * Author URI  : http://themeforest.net/user/imediapixel
 *
 * IMediapixel Copyright 2019 All Rights Reserved.
 * -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
 * javascript handle initialization
		1. Parallax
		2. To Top
 *
 * -------------------------------------------------------------------------- */
(function($){

	"use strict";
	
	var TemplateApp = {
		//---------- 1. Parallax -----------
	    template_parallax:function() {
	    	$('.impx-parallax').parallax({
	    		speed: .3
	    	});
	    },


	    //----------- 2. To top Jquery -----------
		template_toTop:function() {

			$(document).scroll(function () {
				var toTop = $('.to-top');

				if ($(this).scrollTop() > 400) {
					toTop.fadeIn();
				} else {
					toTop.fadeOut();
				}
			});
		},

	  // theme init
      theme_init:function(){
      	 TemplateApp.template_parallax();
      	 TemplateApp.template_gmap();
      	 TemplateApp.template_gmap2();
      	 TemplateApp.template_toTop();
      }

	}//end themeApp


	jQuery(document).ready(function($){

		TemplateApp.theme_init();

    });

})(jQuery);
