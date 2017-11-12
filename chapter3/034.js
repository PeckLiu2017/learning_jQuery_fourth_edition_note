// 这种样式虽然精简但不易看得懂
$(document).ready(function () {
  $('#switcher-default').addClass('selected');
  $('#switcher button').click(function () {
    var bodyClass = this.id.split('-')[1];
    $('body').removeClass().addClass(bodyClass);
    $('#switcher button').removeClass();
    $(this).addClass('selected');
  });
  $('#switcher h3').click(function () {
    $('#switcher button').toggleClass('hidden');
  });
});
