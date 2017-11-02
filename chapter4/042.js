$(document).ready(function() {
  $('p').eq(2)
    .css('border','1px solid #333')
    .click(function () {
      $(this).slideUp('slow').next().slideDown('slow');
    });
  $('p').eq(3).css('backgroundColor','#ccc').hide();
  var $speech = $('div.speech');
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
    $speech.animate({fontSize: num + 'px'}, 'slow');
  });

  var $firstPara = $('p').eq(1);
  $firstPara.hide();
  $('a.more').click(function(event) {
    event.preventDefault();
    $firstPara.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
    var $link = $(this);
    if ($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
  });

  $('div.label').click(function() {
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher
      .css({position: 'relative'})
      .fadeTo('fast', 0.5)
      .animate({left: paraWidth - switcherWidth},
        {duration: 'slow',
         queue: false
      })
      .fadeTo('fast', 1.0)
      .slideUp('slow')
      // 如果在此不使用next()方法，动画就会中断
      .queue(function (next) {
        $switcher.css({backgroundColor: '#f00'});
        next();
      })
      .slideDown('slow');
  });
});