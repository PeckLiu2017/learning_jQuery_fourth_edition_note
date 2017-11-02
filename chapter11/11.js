// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

// $(function() {
//   // 监听鼠标指针进入或者离开 div.member 的事件
//   // 触发事件太快会反复注册多次动画
//   $('div.member').on('mouseenter mouseleave', function(event) {
//     var size = event.type == 'mouseenter' ? 85 : 75;
//     var padding = event.type == 'mouseleave' ? 0 : 5;
//     $(this).find('img').animate({
//       width: size,
//       height: size,
//       paddingTop: padding,
//       paddingLeft: padding
//     })
//   })
// })


$(function () {
  // 触发事件太快也要等动画完成之后再注册动画事件
  // 只有当动画完成之后发生的mouseenter和mouseleave事件，才会引发另一次动画
  // 快速来回滑动只会使图片稍微拉长
  $('div.member').on('mouseenter mouseleave',function (event) {
    var $image = $(this).find('img');
    if (!$image.is(':animated') || event.type == 'mouseleave') {
      var size = event.type == 'mouseenter' ? 85 : 75;
      var padding = event.type == 'mouseleave' ? 0 : 5;
      $(this).find('img').animate({
        width:size,
        height:size,
        paddingTop:padding,
        paddingLeft:padding
      })
    }
  })
})
