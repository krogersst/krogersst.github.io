jQuery(document).ready(function ($) {

  $('#slider').ready(function(){
    setInterval(function () {
        moveLeft();
    }, 6000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 600, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

});

/*
<script>
{% include slider.js %}
</script>
<div id="slider">
  <ul>
    <li><img src="{{ site.url }}/assets/screenshots/visab_home.jpg"/></li>
    <li><img src="{{ site.url }}/assets/screenshots/visab_database.jpg"/></li>
    <li><img src=" {{ site.url }}/assets/screenshots/visab_map.jpg"/></li>
    <li><img src=" {{ site.url }}/assets/screenshots/visab_timeline.jpg"/></li>
    <li><img src=" {{ site.url }}/assets/screenshots/visab_images.jpg"/></li>
    <li><img src=" {{ site.url }}/assets/screenshots/visab_people.jpg"/></li>
  </ul>
</div>
*/
