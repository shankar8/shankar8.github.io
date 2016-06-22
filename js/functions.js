// JavaScript Document

$(document).ready(function(){


 //intro Section fade In animation
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        var introTop = $(".introSection").offset().top;
        var featureTop = $(".featureSection").offset().top;

        if(wScroll>introTop-$(this).height()/1.2){
            $(".introTextMain").addClass("isShowing");
            $(".introImage").addClass("isShowing");
            //console.log("haha");
        }else{
            $(".introTextMain").removeClass("isShowing");
            $(".introImage").removeClass("isShowing");
        }


    });





// feature section animation on hover
$(".featureOne").hover(function() {
      //console.log("hahah");
      $(".featureTextMain").removeClass("showText");
      $(".featureTextOne").addClass("showText");
    }, function() {
      //console.log("getout");
      $(".featureTextMain").addClass("showText");
      $(".featureTextOne").removeClass("showText");
    });

$(".featureTwo").hover(function() {
      //console.log("hahah");
      $(".featureTextMain").removeClass("showText");
      $(".featureTextTwo").addClass("showText");
    }, function() {
      //console.log("getout");
      $(".featureTextMain").addClass("showText");
      $(".featureTextTwo").removeClass("showText");
    });

$(".featureThree").hover(function() {
      //console.log("hahah");
      $(".featureTextMain").removeClass("showText");
      $(".featureTextThree").addClass("showText");
    }, function() {
      //console.log("getout");
      $(".featureTextMain").addClass("showText");
      $(".featureTextThree").removeClass("showText");
    });

$(".featureFour").hover(function() {
      //console.log("hahah");
      $(".featureTextMain").removeClass("showText");
      $(".featureTextFour").addClass("showText");
    }, function() {
      //console.log("getout");
      $(".featureTextMain").addClass("showText");
      $(".featureTextFour").removeClass("showText");
    });






//Tile scale on click
$(".featureOne").click(function(){
	$(".featureOneColor").toggleClass("scale");
});

$(".featureTwo").click(function(){
	$(".featureTwoColor").toggleClass("scale");
});

$(".featureThree").click(function(){
	$(".featureThreeColor").toggleClass("scale");
});

$(".featureFour").click(function(){
	$(".featureFourColor").toggleClass("scale");
});








//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});





    $(window).scroll(function(){

	 //to arrange icons
	  var wScroll = $(this).scrollTop(),
	  wContact = $(".contactSection").offset().top,
	  wFooter = $(".footerSection").offset().top;

        if(wScroll> wContact - $(window).height()){
	  		$(".iconSetOne, .iconSetTwo").addClass("moveIt");
	  }else{
	  		$(".iconSetOne, .iconSetTwo").removeClass("moveIt");
	  }


	 //to make the icons sit
	  if(wScroll > wFooter - $(window).height()){
	  		console.log("hahaha")
	  		$(".socialBox").addClass("sit");
	  }else{
	  		$(".socialBox").removeClass("sit");
	  }


    });







//---------------------------------------------------------------------------------------------
// Nav slider fix
//---------------------------------------------------------------------------------------------
/*
$("#navButton").click(function(){
      $(".pageContent").toggleClass("pageContentMove");
      console.log("hahaha");
});

*/
//---------------------------------------------------------------------------------------------
// contact Modal
//---------------------------------------------------------------------------------------------

$(".contactButton").click(function(){
      $(".overlayContact").addClass("showOverlayContact");
      $(".contactModal").addClass("showContactForm");
});


$(".closeContact").click(function(){
      $(".overlayContact").removeClass("showOverlayContact");
      $(".contactModal").removeClass("showContactForm");
});





//---------------------------------------------------------------------------------------------
// Navigation Modal
//---------------------------------------------------------------------------------------------

$(".navButton").click(function(){
      $(".overlayNav").addClass("showOverlayNav");
      $("#nav").addClass("showNav");
});


$(".closeNav").click(function(){
      $(".overlayNav").removeClass("showOverlayNav");
      $("#nav").removeClass("showNav");
});







//---------------------------------------------------------------------------------------------
// Dealer Modal
//---------------------------------------------------------------------------------------------

$(".dealerButton").click(function(){
      $(".overlayDealer").addClass("showOverlayDealer");
      $(".dealerModal").addClass("showDealer");
});


$(".closeDealer").click(function(){
      $(".overlayDealer").removeClass("showOverlayDealer");
      $(".dealerModal").removeClass("showDealer");
});



//---------------------------------------------------------------------------------------------
// News Modal
//---------------------------------------------------------------------------------------------

$(".newsButton").click(function(){
      $(".overlayNews").addClass("showOverlayNews");
      $(".newsModal").addClass("showNews");
});


$(".closeNews").click(function(){
      $(".overlayNews").removeClass("showOverlayNews");
      $(".newsModal").removeClass("showNews");
});












});

//---------------------------------------------------------------------------------------------
// Quote Slider
//---------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
