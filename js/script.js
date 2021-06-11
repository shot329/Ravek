// ハンバーガーメニュー
$(function() {
  $('.burger-btn').click(function() {
    $(this).toggleClass('cross');
    $('.header-nav').fadeToggle(300);
    $('.menu').fadeToggle(300);
    $('body').toggleClass('noscroll');
  });
  if ($(window).width() < 768) {
    $('.sp-nav').click(function() {
      $('.burger-btn').toggleClass('cross');
      $('.header-nav').fadeOut();
      $('.menu').fadeIn();
    });
  }
});
