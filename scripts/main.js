"use strict";!function(){$("#arrow-btn").click(function(){$("body").animate({scrollTop:$("#about").offset().top},"slow")}),$(window).scroll(function(){var o=$("#navbar");$(window).scrollTop()>$("#hero").height()-o.height()?o.addClass("shrink"):o.removeClass("shrink")}),$(".nav-link").click(function(){var o=$(this).text();"About"===o?$("body").animate({scrollTop:$("#about").offset().top},"slow"):"Portfolio"===o?$("body").animate({scrollTop:$("#portfolio").offset().top},"slow"):"Contact"===o&&$("body").animate({scrollTop:$("#contact").offset().top},"slow")}),"/index.html"!==path&&$("#navbar").addClass("shrink").removeClass("navbar-fixed-top")}();