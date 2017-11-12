$(document).ready(function() {
  // 得到事件目标阻止事件冒泡
  $('#switcher').click(function(e) {
    if (e.target == this) {
      $('#switcher button').toggleClass('hidden');
    }
  });
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
    $('body').addClass('large');
  });
});
