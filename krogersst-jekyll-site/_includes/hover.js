jQuery(document).ready(function ($) {

  $('#homepage-click').click(function() {
    $('#homepage').toggle("fast");
  });

  $('#database-click').click(function(){
    $('#database').toggle("fast");
    $('#homepage').hide("fast");
  });

  $('#map-click').click(function(){
    $('#map').toggle("fast");
  });

  $('#timeline-click').click(function(){
    $('#timeline').toggle("fast");
  });

  $('#images-click').click(function(){
    $('#images').toggle("fast");
  });

  $('#people-click').click(function(){
    $('#people').toggle("fast");
  });

});
