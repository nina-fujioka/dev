var wsize=$(window).width(),hsize=$(window).height(),pcsize=1159,tbsize=641,timer=!1;$(window).resize(function(){timer!==!1&&clearTimeout(timer),timer=setTimeout(function(){function e(){$(".c-heightMax").css("height",t+"px")}var i=$(window).width(),t=$(window).height();i>pcsize?e():tbsize>i?$(".c-heightMax").css("height",187):pcsize>i&&$(".c-heightMax").css("height",580)},200)}),$(function(){function e(){$(".c-heightMax").css("height",hsize+"px")}wsize>pcsize?e():tbsize>wsize?$(".c-heightMax").css("height",187):pcsize>wsize&&$(".c-heightMax").css("height",580)}),$(function(){var e=$(".c-humberger"),i=$(".l-container"),t=function(){return $(".l-container,.p-menu,.type-1").addClass("is-animate"),$(".c-overlay")[0]?($(".c-overlay").remove(),$(".l-container,.p-menu,.type-1").removeClass("is-animate"),$(".l-header__info--primary").removeClass("is-show")):i.append('<div class="l-container__overlay c-overlay"></div>'),!1};e.on("touchstart click",t),i.on("touchstart click",".c-overlay",t)});