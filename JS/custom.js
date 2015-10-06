$(document).ready(function(){
  $('.biz-hover').hide();

  $('.biz-list li').hover(
    function() { $('.biz-hover', $(this)).show(); },
    function() { $('.biz-hover', $(this)).hide(); }
    );
});
