// JavaScript Document

$(document).ready(function(){

    $(window).scroll(function(){

        var wScroll = $(this).scrollTop();
        var introTop = $(".introSection").offset().top;
        var featureTop = $(".featureSection").offset().top;

        if(wScroll>introTop-$(this).height()/1.2){
            $(".introText").addClass("isShowing");
            //console.log("haha");
        }else{
            $(".introText").removeClass("isShowing");
        }


        






    });




});

//---------------------------------------------------------------------------------------------
// Quote Slider
//---------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
