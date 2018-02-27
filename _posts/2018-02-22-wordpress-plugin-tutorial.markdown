---
layout: post
title:  "Create a Database and Visualization Plugin for WordPress"
date:   2018-02-22 16:21:37 -0500
categories: unpublished
---
## How to Create a Database and Visualization Plugin for WordPress
<p style="text-align: center; font-size: 30px; font-style: italics;">under construction</p>

### What are we doing?
If you have a database that bla blab blablalbalblab. We are creating a WordPress widget, a certain type of plugin that appears as a distinct app on the front-end of your site. I will attempt to refer to our project as a plugin only to keep things streamlined.

### What will we need?

- In this workshop we will be using the text editor [Atom](https://atom.io). It is a fantastic free program with new features, called packages, added all the time. You can use your own favorite text editor of course, but for those just starting out, Atom will easily grow with your skill set.
- You will want to have access to a WordPress site. Set up a simple [wordpress.com](https://wordpress.com) account to test your plugin with if you don't already have a site up and running either locally or live.

### Creating the scaffolding:

1. Create a folder with the name of your plugin. I will name ours _Your_Plugin_. This folder can live on your desktop, it doesn't need to be anywhere special, just somewhere accessible. This folder is where your plugin will live and eventually be zipped and uploaded to WordPress.
2. Open Atom, navigate to File > Add Project Folder > open _Your_Plugin_.
3. Create a new file called _yourplugin.php_ in your folder. Make sure the extension is _.php_. This file is the base of your plugin, where the other files are linked to your plugin, the html structure lives, and the server instructions are housed.
4. At the top of this file copy and paste this code:

   ```php
	 <?php
	 /*
	 * Plugin Name: Your Widget
	 * Version: 1.0
	 *
	 */
	 ```

	 The <code><?php</code> tells the file that this is the language you are writing. The <code>/**</code> signals that you aren't writing code but simply commenting. WordPress however will read this information and it will be displayed by WordPress when you install your plugin. It allows for you to keep track of which version has been installed.
5. Now copy and paste this code to initiate your plugin, replacing the names accordingly:

    ```php
    if ( ! defined( 'ABSPATH' ) ) exit;

    function my_test_widget_init(){

    if( !class_exists( 'MyTest_Widget' ) ) {
      class MyTest_Widget extends WP_Widget {

	 /*
	 * Widget construction
	 */
	 function __construct() {
		 parent::__construct(
			 // base ID of the widget
			 'visab_tab_widget',
			 // name of the widget
			 __('TabDatabase', 'visab' ),
			 // widget options
			 array (
				 'description' => __( 'Displays Visualizing Abolition Database', 'visab' )
			 )
		 );
   ```

6. Now we register and enqueue our scripts and styles. This is a very important step and the one that caused me the most trouble.

   ```php
	 //Enqueue Scripts
	 if( ! function_exists( 'layers_child_scripts' ) ) {
	 	function layers_child_scripts() {

		wp_register_script( 'uicore', plugins_url( '/assets/js/core.min.js', __FILE__ ) );
		wp_register_script( 'uiwidget', plugins_url( '/assets/js/widget.min.js', __FILE__ ) )
		wp_register_script( 'uimouse', plugins_url( '/assets/js/mouse.min.js', __FILE__ ) );
		wp_register_script( 'uislider', plugins_url( '/assets/js/slider.min.js', __FILE__ ) );
		wp_register_script( 'uitab', plugins_url( '/assets/js/tabs.min.js', __FILE__ ) );
		wp_register_script( 'tabulatorjs', plugins_url( '/assets/tabulator-2.12.0/tabulator.js', __FILE__ , array('jquery','jquery-ui-core',) ) );
		wp_register_script( 'visabtabscript', plugins_url( '/assets/js/visabtabscript.js', __FILE__ ) );
		wp_register_script( 'latlon', plugins_url( '/assets/proj4js-2.4.3/dist/proj4.js', __FILE__ ) );
		wp_register_script( 'highcharts', 'https://code.highcharts.com/highcharts.js');
		wp_register_script( 'highmaps', 'https://code.highcharts.com/maps/modules/map.js');
		wp_register_script( 'worldmap', 'https://code.highcharts.com/mapdata/custom/world-continents.js');

		wp_enqueue_script('uicore');
		wp_enqueue_script('uiwidget');
		wp_enqueue_script('uimouse');
		wp_enqueue_script('uitab');
		wp_enqueue_script('uislider');
		wp_enqueue_script('tabulatorjs');
		wp_enqueue_script('visabtabscript');
		wp_enqueue_script('latlon');
		wp_enqueue_script('highcharts');
		wp_enqueue_script('highmaps');
		wp_enqueue_script('worldmap');
	 			}
	 }
	 add_action('wp_enqueue_scripts', 'layers_child_scripts');

	 //Enqueue Styles
	 add_action( 'wp_enqueue_scripts', 'layers_child_styles' );
	 if( ! function_exists( 'layers_child_styles' ) ) {
	 	function layers_child_styles(){

	 	wp_register_style('uicss',plugins_url( '/assets/css/jquery-ui.min.css', __FILE__ ));
	 	wp_register_style('tabcss',plugins_url( '/assets/tabulator-2.12.0/tabulator.css', __FILE__ ));
	 	wp_register_style('visabtabcss',plugins_url( '/assets/css/visabtabcss.css', __FILE__ ));

	 	wp_enqueue_style('uicss');
	 	wp_enqueue_style('tabcss');
	 	wp_enqueue_style('visabtabcss');
	 		}
	 	}
	 }
   ```

7. Next we dive into the fun stuff!
