<?php

// Enqueue styles
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

// Enqueue smooth scroll script
function enqueue_smooth_scroll_script() {
    wp_enqueue_script(
        'smooth-scroll',
        get_template_directory_uri() . '/assets/js/smooth-scroll.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_smooth_scroll_script');

// Shortcode for displaying current year
function copyright_shortcode() {
    return '© ' . date('Y');
}
add_shortcode('copyright', 'copyright_shortcode');