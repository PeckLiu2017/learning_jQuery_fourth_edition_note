// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
  $('#switcher-default').on('click', function() {
    $('body').removeClass('narrow');
    $('body').removeClass('large');
  });
  $('#switcher-narrow').on('click', function() {
    $('body').removeClass('large');
    $('body').addClass('narrow');
  });
  $('#switcher-large').on('click', function() {
    $('body').removeClass('narrow');
    $('body').addClass('large');
  });
});
