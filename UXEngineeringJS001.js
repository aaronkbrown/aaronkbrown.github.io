
$(document).ready(function(){
  $("ul.clicker li").toggle(function(){
    $(this).wrap("<del></del>");
    $(this).addClass("checked");
    },
    function(){
    $(this).unwrap("<del></del>");
    $(this).removeClass("checked");
    }
  );
});