$(document).ready(function(){
  jQuery('#research-slider').slippry({
    // general elements & wrapper
    slippryWrapper: '<div class="sy-box" />', // wrapper to wrap everything, including pager

    // options
    adaptiveHeight: false, // height of the sliders adapts to current slide
    captions: false, // Position: overlay, below, custom, false

    autoHover: false,

    // transitions
    transition: 'horizontal',
    pause: 10000,
    speed: 2000 // time the transition takes (ms)
  });
});
