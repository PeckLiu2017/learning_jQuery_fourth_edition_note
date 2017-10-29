// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
  // $speech 用来缓存数据
  // 表示在上次变化的基础上将字体增大或缩小
  var $speech = $('div.speech');
  // DOM 就绪后将字体初始大小保存下来
  var defaultSize = $speech.css('fontSize');

  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch (this.id) {
      case 'switcher-large':
        num *= 1.4;
        break;
      case 'switcher-small':
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);
    }
    $speech.css('fontSize', num + 'px');
  });
  // $('p').eq(1).hide('duration')
  var $firstPara = $('p').eq(1);
  $firstPara.hide();
  // $('a.more').click(function (e) {
  //   e.preventDefault();
  //   // $('p').eq(1).show('slow');
  //   // $('p').eq(1).fadeIn('slow');
  //   $('p').eq(1).slideDown('slow');
  //   $(this).hide();
  // })
  $('a.more').click(function (e) {
    e.preventDefault();
    if ($firstPara.is(':hidden')) {
      $firstPara.fadeIn('slow');
      $(this).text('read less');
    } else {
      $firstPara.fadeOut('slow');
      $(this).text('read more');
    }
  })
});
