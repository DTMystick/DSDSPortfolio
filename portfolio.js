// let c = document.getElementsByClassName("about");

// function navbarDisplay(){
//     // let a = document.getElementById(nav1);
//     // let b = document.getElementById(nav2);
//     // let c = document.getElementById(about);
//     let a = document.getElementsByClassName("nav1");
//     let b = document.getElementsByClassName("nav2");
    
//     if (c[0].style.top == 0){
//         // alert("test");
//         a[0].classList.remove("d-none");
//         b[0].classList.add("d-none");
//     }
// }
// c[0].addEventListener("scroll", navbarDisplay());


$(document).ready( function() { // after the HTML document has been read and parsed...
	
    // cache things that are generally static or that you plan to access often - early
    // so you don't have to keep querying for them over and over again
    let $window = $(window); // I'm using $'s in the vars to denote that they are jQuery objects specifically
    let $body = $('body');
    let $primaryNav = $('.nav1');
    let primaryNavLocation = $primaryNav.offset().top; // get the starting position of the nav (distance from top of screen)
    let primaryNavHeight = $primaryNav.outerHeight(); // ^ where this is just a number and NOT a jQuery object...
  
      // I'm breaking this out into it's own function for use later... (you may want many function to run on scroll)
    // create parameters for all the info you'll need to use in this function
      function positionNavigation(scrollPosition, thisHeight, thisLocation) {
        let scrolledToElement = scrollPosition >= thisLocation;
        if ( scrolledToElement ) { // if the nav bar has reached the top
            alert("test");
          // add a class to the body (so you can use this state to style other elements as well)
        // $body.addClass('sticky-nav');
        $body.css({
              paddingTop: thisHeight, // add the padding CSS to body to make up for the missing nav in the static element flow
            });
      } else {
        //   if ( $body.hasClass('sticky-nav') ) { // probably unessesary - but for example
        //   $body.removeClass('sticky-nav').css({ // note the chained method example as opposed to seperate ones above...
              paddingTop: 0;
            //  });
        // }
      }
    }
  
    $window.on('scroll', function() { // 'on the event that the window is scrolled...'
    
        // get current scroll position this this strangly named method
        let scrollPosition = $window.scrollTop(); 
      
      // maybe just watch when we're relativly near the top of a really long page...?
      let reasonableContext = $window.height() * 2; 
      // 2 times window height should be enough.. maybe not though... check scroll speeds to be sure.
        
      // true if scroll position is in the reasonable context to observe changes - just for readablity
      let inTheZone = scrollPosition < reasonableContext;
   
          if ( inTheZone ) { // loose guess at when this would be appropriate...
      
          // postition the navigation with these current pieces of information...
        positionNavigation(scrollPosition, primaryNavHeight, primaryNavLocation);
   
      } else { // if NOT in the zone worth observing... don't run the function to check...
          console.log("Our scroll is so far away... we shouldnt even worry about this now");
      }
    }).trigger('scroll'); // trigger a 'scroll' event on load... to check at start / page load etc
  
  });