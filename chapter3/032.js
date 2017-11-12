$(document).ready(function() {
  $('#switcher-default').addClass('selected');
  $('#switcher button').on('click',function () {
      $('body').removeClass();
      $('#switcher button').removeClass('selected');
      $(this).addClass('selected');
    })
  $('#switcher-narrow').on('click', function() {
    $('body').addClass('narrow');
  });
  $('#switcher-large').on('click', function() {
    $('body').addClass('large'); //这里因为是移除所有元素，所以 removeClass() 要放在前面
  });
});
