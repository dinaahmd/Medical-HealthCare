$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
jQuery(document).ready(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
});
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[980,2],
      itemsTablet:[768,2],
      itemsMobile:[650,1],
      pagination:true,
      navigation:false,
      slideSpeed:1000,
      autoPlay:true
  });
});