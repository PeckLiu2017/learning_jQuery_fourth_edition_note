$(document).ready(function() {
  $('div.label').click(function() {
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher
      .css({position: 'relative'})
      // .fadeTo('10000', 0)
      .animate({
        opacity: 0
      },{
        duration: '10000',
        queue: true
      })
      .animate({
        left: paraWidth - switcherWidth
      },{
        duration: 'slow',
        queue: true
      })
      .animate({
        opacity: 1
      },{
        duration: '10000',
        queue: true
      })
      .fadeTo('fast', 1.0)
      .slideUp('slow',function () {
        $switcher.css({backgroundColor: '#f00'});
      })
      .slideDown('slow');
  });
});
