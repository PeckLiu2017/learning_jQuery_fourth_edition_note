// e.stopPropagation() 阻止时间冒泡，但没有阻止 h3 上的事件冒泡
$(document).ready(function() {
  $('#switcher').click(function(e) {
    $('#switcher button').toggleClass('hidden');
  });
});
$(document).ready(function() {
  $('#switcher-default').addClass('selected');
  $('#switcher button').click(function(e) {
    var bodyClass = this.id.split('-')[1];
    $('body').removeClass().addClass(bodyClass);
    $('#switcher button').removeClass();
    $(this).addClass('selected');
    e.stopPropagation();
    // return false; // 跟 e.stopPropagation() 一样的效果
  });
});
