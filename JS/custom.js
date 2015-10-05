$(document).ready(function(){
  $('.biz-box').hover(
    function() { $('.no-sho', $(this)).show(); },
    function() { $('.no-sho', $(this)).hide(); }
    );
});
