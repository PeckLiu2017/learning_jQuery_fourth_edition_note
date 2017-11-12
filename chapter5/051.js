$(document).ready(function() {
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p');
  $('<a id="top"></a>').prependTo('body');
  var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
  $('span.footnote').each(function(index) {
    $('<sup>' + (index + 1) + '</sup>').insertBefore(this);
    $(this).appendTo($notes).wrap('<li></li>');
  });
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: 'external',
    title: function() {
      return 'Learn more ' +
        $(this).text() +
        ' at Wikipedia';
    },
    id: function(index, oldValue) {
      return 'wikilink-' + index;
    }
  });
});
