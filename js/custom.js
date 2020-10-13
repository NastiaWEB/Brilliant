$(window).resize(function () {
  if($(window).width() <= 480){
      $('.main-product').removeClass('col-xs-4');
      $('.main-product').addClass('col-xs-6');
  };
  if($(window).width() >= 480){
      $('.main-product').addClass('col-xs-4');
      $('.main-product').removeClass('col-xs-6');
  };
});
var input = document.getElementsByClassName("inputText");
$(document).on('focus active', 'input',function(){
    $('label[for='+$(this).attr('id')+']').addClass('active');
});
$(document).on('blur', 'input',function(){
    $('label[for='+$(this).attr('id')+']').removeClass('active');
});
$(document).ready(function(){
$("#mb-nav").mCustomScrollbar({
  theme: "minimal"
});
$('#dismiss, .overlay').on('click', function () {
  $('#mb-nav').removeClass('active');
  $('#basket-list').removeClass('active');
  $('.overlay').fadeOut();
});
$('.close-pop-up-phone, .overlay').on('click', function () {
  $('.pop-up-phone').removeClass('active');
  $('.overlay').fadeOut();
});
$('.close-pop-up-sizes, .overlay').on('click', function () {
  $('.pop-up-sizes').removeClass('active');
  $('.overlay').fadeOut();
});
$('.popup').on('click', function (event) {
  event.preventDefault();
  $('.pop-up-sizes').addClass('active');
  $('.overlay').fadeIn();
});
$('.likes-button').on('click', function () {
  $('#heart_main').toggleClass('active');
  $('#heart_last').toggleClass('active');
});
$('#btn').on('click', function () {
  $('#mb-nav').addClass('active');
  $('.overlay').fadeIn();
});
$('.call').on('click', function () {
  $('.pop-up-phone').addClass('active');
  $('.overlay').fadeIn();
});
$('#callback').on('click', function () {
  $('.pop-up-phone').addClass('active');
  $('.overlay').fadeIn();
});
$('.call-mb').on('click', function () {
  $('.pop-up-phone').addClass('active');
  $('.overlay').fadeIn();
});
$('.basket').on('click', function () {
  $('#basket-list').addClass('active');
  $('.overlay').fadeIn();
});
jQuery(function ($) {
  $(".txtphone").mask("+7 (999) 999-99-99");
  $(".txttime").mask("00:00");
});
$('.list_tov').on('click', function () {
   $( ".sub-menu" ).toggleClass( 'active' );
if ( $( ".sub-menu" ).hasClass('active')) {
 $( ".sub-menu" ).slideDown('slow');
} else {
  $( ".sub-menu" ).slideUp('slow');
}
});
$('.mb_list_tov').on('click', function () {
   $( ".mb-submenu" ).toggleClass( 'active' );
if ( $( ".mb-submenu" ).hasClass('active')) {
 $( ".mb-submenu" ).slideDown('slow');
} else {
  $( ".mb-submenu" ).slideUp('slow');
}
});

$('.sidebar_list_tov').on('click', function(){
  $(this).toggleClass( 'active' );
  $(this).next('.sidebar-submenu').toggleClass( 'active' );
  $(this).next('.sidebar-submenu').not(':animated').slideToggle()
});

$('.read-more').click(function(){
$('.description-svarovski-more').toggleClass("active");
$('.open-read-more').toggleClass("active");
$('.close-read-more').toggleClass("active");
});

$('.slider').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
dots: true,
autoplay: true
});
$( '.product_slider' ).slick({
  slidesToShow: 6,
  slidesToScroll: 2,
  arrows: false,
  dots: false,
  autoplay: false
});

$('.slider_testimonial').slick({
slidesToShow: 3,
slidesToScroll: 1,
arrows: true,
dots: false,
autoplay: false,
responsive: [
           {
               breakpoint: 1200,
               settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
               }
           },
           {
               breakpoint: 1010,
               settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1,
                   autoplay: true,
                   arrows: false,
                   dots: true
               }
           },
           {
               breakpoint: 770,
               settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   autoplay: true,
                   arrows: false,
                   dots: true
               }
           }]
});
$( '#my-slider' ).sliderPro({
	width: 470,
	height: 470,
  fade: true,
  buttons: false,
  smallSize: 500,
  mediumSize: 1000,
  largeSize: 3000,
  touchSwipe: false,
  thumbnailWidth: 78,
  thumbnailHeight: 78,
  autoplay: false
});
$('select').selecter();

});
