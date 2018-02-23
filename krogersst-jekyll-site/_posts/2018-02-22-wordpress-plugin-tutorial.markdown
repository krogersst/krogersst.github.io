---
layout: post
title:  "Create a Database and Visualization Plugin for WordPress"
date:   2018-02-22 16:21:37 -0500
categories: tutorial
---
## How to Create a Database and Visualization Plugin for WordPress
*under construction*

###STEP ONE - Creating the scaffolding:###

Create a new file yourwidget.php
At the top of this file copy and paste this code.

```
<?php  /**
* Plugin Name: Your Widget
* Version: 1.0
*
*/
```

This information will be displayed by WordPress when you install your plugin and allows for you to keep track of which version has been installed.

Now copy and paste this code to initiate your plugin.

```
if ( ! defined( 'ABSPATH' ) ) exit;

function my_widget_init(){

if( !class_exists( 'My_Widget' ) ) {
	class My_Widget extends WP_Widget {
```
