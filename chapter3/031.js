$(document).ready(function() {
  $('#switcher-default')
    .addClass('selected')
    .on('click', function() {
      $('body').removeClass('narrow').removeClass('large');
    });
  $('#switcher-narrow').on('click', function() {
    $('body').addClass('narrow').removeClass('large');
  });
  $('#switcher-large').on('click', function() {
    $('body').removeClass('narrow').addClass('large'); //这里 removeClass 和 addClass 的顺序调换不会出现太大问题
  });
  $('#switcher button').on('click', function() {
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
