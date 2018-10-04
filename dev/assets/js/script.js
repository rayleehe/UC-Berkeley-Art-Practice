// desktop window match
const dq = window.matchMedia( "(min-width: 800px)" );
// mobile desktop match
const mq = window.matchMedia( "(max-width: 800px)" );
// variable names; used to position headers
var big_header_height = $('.big-header').height();
var header_height = $('.header').height();
var header_line_height = $('.header-line2').height();

// header position to bypass logo animation; used for desktop
if($('.top-header-wrapper').length === 0){
$('.big-header').css({
    position: 'fixed',
    'margin-top': '0px',
});
$('.home-link').css({
    position: 'fixed',
    'z-index': '100',
});
$('.dropdown-content').css({
  'margin-top': '11%'
});
$('.img-about-head').css({
    'margin-top': $('.home-link img').height() + big_header_height,
});
}

// header position for mobile pages without logo animation
if ($(window).width() < 800 && $('.top-header-wrapper').length === 0) {
  $('.big-header').css({
      position: 'fixed',
      'margin-top': '100px',
  });
}

// dropdown toggle
function myFunction(x) {
    x.classList.toggle("change");
}

function Function() {
  document.getElementById("myDropdown").classList.toggle("show");
}

var coll = document.getElementsByClassName("collapsible");
var i;

var elems = document.getElementsByClassName('content');

var arrow = document.getElementsByClassName('collapsible');

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // $(".collapsible").not(this).toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      }
  });
}

if (dq.matches) {
  $('.head-img').css({
      'margin-top': big_header_height
  });
  $('.dropdown-content').css({
    'margin-top': header_height + header_line_height
  });
}

// news toggle
document.getElementById("more").addEventListener("click", function(){
    var e = document.getElementById("text-1-more");
    var m = document.getElementById("more");
    var l = document.getElementById("less");
    if(e.style.display == 'block'){
      e.style.display = 'none';
    }else {
        m.style.display = 'none';
        e.style.display = 'block';
        l.style.display = 'block';
    }
});

document.getElementById("less").addEventListener("click", function(){
    var e = document.getElementById("text-1-more");
    var m = document.getElementById("more");
    var l = document.getElementById("less");
    if(e.style.display == 'block'){
      e.style.display = 'none';
      l.style.display = 'none';
      m.style.display = 'block';
    }else {
        m.style.display = 'none';
        e.style.display = 'block';
        l.style.display = 'block';
    }
});
