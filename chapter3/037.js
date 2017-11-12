// 利用事件冒泡的有利方面一次注册多个事件，这样只要在 $('#switcher') 上注册事件就可以了
$(document).ready(function() {
  $('#switcher').click(function(event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];
      $('body').removeClass().addClass(bodyClass);
      $('#switcher button').removeClass('selected');
      $(event.target).addClass('selected');
      event.stopPropagation();
    } else {
      $('#switcher button').toggleClass('hidden');
    }
  });
});
