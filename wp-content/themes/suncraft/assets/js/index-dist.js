$(document).ready(function(){function refresh(){(ww=$(window).width())<limit?location.reload(!0):limit<ww?location.reload(!0):ww=limit}var tOut,ww=$(window).width(),limit=415;$(window).resize(function(){var resW=$(window).width();clearTimeout(tOut),(limit<ww&&resW<limit||ww<limit&&limit<resW)&&(tOut=setTimeout(refresh,100))}),$(".burger").click(function(){$(this).toggleClass("open"),$("nav.main-menu").toggleClass("open"),$("body, html").toggleClass("noScroll")}),$(function(){$("section.blog-listings .list .cards").slice(0,6).show(),$("#loadMore").on("click",function(e){e.preventDefault(),$("div:hidden").slice(0,6).slideDown(),0===$("div:hidden").length&&$("#load").fadeOut("slow"),$("html,body").animate({scrollTop:$(this).offset().top},1500)})}),$(".partners-slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0}),$(".on-the-go").slick({slidesToShow:2,infinite:!0,slidesToScroll:1,dots:!0,responsive:[{breakpoint:641,settings:{slidesToShow:1}}]}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);(target=target.length?target:$("[name="+this.hash.slice(1)+"]")).length&&(event.preventDefault(),$("html, body").animate({scrollTop:target.offset().top},1e3,function(){var $target=$(target);if($target.focus(),$target.is(":focus"))return!1;$target.attr("tabindex","-1"),$target.focus()}))}}),$("section:not(.pre_footer):not(.blog-listings) article *, section article > div:not(.partner-list), section img.absolute, section article div.list div.cards").addClass("transition"),$("section article div.partner-list, section article div.partner-list *:not(.cards), section article div.list, section#menu article .meal-background, section#menu article .meal-background *, section.posts .content_area, section.posts .content_area .inner, .wrapper, .slick-slider, [class^='slick']").delay(400).removeClass("transition"),$("section article .chopstick.transition.left").addClass("transLeft"),$("section article .chopstick.transition.right").addClass("transRight"),$(window).scroll(function(){$("section article .transition").each(function(){var elem,docViewTop,docViewBottom,elemTop;!0==(elem=this,docViewTop=$(window).scrollTop(),docViewBottom=docViewTop+$(window).height(),(elemTop=$(elem).offset().top)+$(elem).height()<=docViewBottom&&docViewTop<=elemTop)&&$(this).addClass("visible")})})});
//# sourceMappingURL=index-dist.js.map