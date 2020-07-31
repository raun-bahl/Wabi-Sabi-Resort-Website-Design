/* this js file is responsible for the scroll bar along with the nav bar. appropriate 
references for the inspiration has been done in the reference list */

//when a user scrolls on the page, trigger the scrollFunction which updates 
//the progress scroll bar
window.onscroll = function () {
	scrollFunction();
}

function scrollFunction() {
	  //get scroll position by using .scrollTop
	  var scroll = document.body.scrollTop || document.documentElement.scrollTop;
	  //documentElement.scrollHeight get's the entire element's height
	  //documentElement.clientHeight returns the full-content height
	  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  //calculate  the scrolled percentage by dividing the winScroll by the height
	  //when scroll = height, then scrolled will be 100%, that is, we're at the end of the page
	  var scrolled = (scroll / height) * 100;
	  //change the bar's width by 'scrolled' percent
	  document.getElementById("bar").style.width = scrolled + "%";
}