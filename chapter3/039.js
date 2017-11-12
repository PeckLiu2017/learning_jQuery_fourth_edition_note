// 使用命名空间防止一下子被解绑所有事件
$(document).ready(function() {
  var toggleSwitcher = function(event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  };
  $('#switcher').on('click.collapse', toggleSwitcher);
  $('#switcher-narrow, #switcher-large').click(function() {
    $('#switcher').off('click.collapse');
  });
  $('#switcher-default').click(function() {
    $('#switcher')
      .on('click.collapse', toggleSwitcher);
  });
  $('#switcher').trigger('click'); // 默认触发点击事件
});

$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher').click(function(event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];

      $('body').removeClass().addClass(bodyClass);

      $('#switcher button').removeClass('selected');
      $(event.target).addClass('selected');
    }
  });
});
// 如果在 $(document).ready() 里面无法执行代码，调整一下函数的顺序，或者再写一个 $(document).ready()，把代码放在里面
