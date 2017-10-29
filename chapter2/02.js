// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function() {
      $('#selected-plays > li').addClass('horizontal');
      $('#selected-plays li:not(.horizontal)').addClass('sub-level');
      $('a[href^="mailto:"]').addClass('mailto')
      $('a[href$=".pdf"]').addClass('pdflink')
      $('a[href^="http"][href*="henry"]').addClass('henrylink');
      $('tr:even').addClass('alt');
      $('a').filter(function() {
        return this.hostname && this.hostname != location.hostname;
      }).addClass('external');
      // $('td:contains(Henry)').addClass('highlight');
      // $('td:contains(Henry)').nextAll().addClass('highlight');
      // 下面一行代替上面两行
      // $('td:contains(Henry)').nextAll().addBack().addClass('highlight');
      $('td:contains(Henry)').parent().find('td:eq(1)').addClass('highlight').end().find('td:eq(2)').addClass('highlight');
});
