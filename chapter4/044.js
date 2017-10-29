$(document).ready(function() {
  $('p').eq(2)
   .css('border', '1px solid #333')
   .click(function() {
     var $clickedItem = $(this);
     $clickedItem.next().slideDown('slow', function() {
       $clickedItem.slideUp('slow');
     });
   });
  $('p').eq(3).css('backgroundColor', '#ccc').hide();
});
