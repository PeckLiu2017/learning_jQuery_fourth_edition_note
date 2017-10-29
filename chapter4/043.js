$(document).ready(function() {
  $('p').eq(2)
    .css('border','1px solid #333')
    .click(function () {
      $(this).next().slideDown('slow',function () {
        $(this).slideUp('slow')
      });
    });
  $('p').eq(3).css('backgroundColor','#ccc').hide();
});
