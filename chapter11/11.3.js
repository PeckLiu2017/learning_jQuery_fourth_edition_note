$(document).ready(function() {
  $('#fx-toggle').show().on('click', function() {
    $.fx.off = !$.fx.off;
  });

  // $movable 用来装入 bio 的信息
  var $movable = $('<div id="movable"></div>')
    .appendTo('body');
  var bioBaseStyles = {
      display: 'none',
      height: '5px',
      width: '25px'
    },
    bioEffects = {
      duration: 800,
      easing: 'easeOutQuart',
      specialEasing: {
        opacity: 'linear'
      }
    };

  function showDetails() {
    var $member = $(this);
    // 如果个人介绍已经展开了，再点击一次就收回去
    if ($member.hasClass('active')) {
      $member
        .removeClass('active')
        .children('div').hide();
      return
    }
    // 确保在显示其它成员的信息之前，让当前成员的信息淡出
    $movable.fadeOut();

    // 展示现在这个人的简介时把上一个的简介收回去
    $('div.member.active')
      .removeClass('active')
      .children('div')
      .fadeOut();

    $member.addClass('active');

    $(this).find('div').css({
      display: 'block',
      left: '-300px',
      top: 0
    }).each(function(index) {
      // 这里使用的是默认时间，一个展示完才从上到下展示下一个
      $(this).animate({
        left: 0,
        top: 25 * index
      }, {
        // 为单个属性增加缓动函数
        duration: 'slow',
        specialEasing: {
          top: 'easeInQuart'
        }
      });
    }).promise().done(showBio);
  }

  function showBio() {
    // 先找到 top left 和宽高
    var $member = $(this).parent(),
      $bio = $member.find('p.bio'),
      startStyles = $.extend(bioBaseStyles, $member.offset()),
      endStyles = {
        width: $bio.width(),
        top: $member.offset().top + 5,
        left: $member.width() + $member.offset().left - 5,
        opacity: 'show'
      };
      console.log($member.offset());

    $movable
      .html($bio.clone())
      .css(startStyles)
      .animate(endStyles, bioEffects)
      .animate({
        height: $bio.height()
      }, {
        easing: 'easeOutQuart'
      });

  }

  $('div.member').click(showDetails);

});
