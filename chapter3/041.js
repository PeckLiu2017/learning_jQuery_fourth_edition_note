// 使用命名空间防止一下子被解绑所有事件

$(document).ready(function() {
  var toggleSwitcher = function(event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  };
  $('#switcher').on('click', toggleSwitcher);
  $('#switcher').click();
  var setBodyClass = function(className) {
    $('body').removeClass().addClass(className);
    $('#switcher button').removeClass('selected');
    $('#switcher-' + className).addClass('selected');
    $('#switcher').off('click', toggleSwitcher);
    if (className == 'default') {
      $('#switcher').on('click', toggleSwitcher);
    }
  };
  $('#switcher-default').addClass('selected');

  var triggers = {
    D: 'default',
    N: 'narrow',
    L: 'large'
  };

  $(document).keyup(function(event) {
    var key = String.fromCharCode(event.keyCode);
    if (key in triggers) {
      setBodyClass(triggers[key]);
    }
  });
});
