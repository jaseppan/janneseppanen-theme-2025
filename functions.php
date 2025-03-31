<?php

// Enqueue styles
function jst_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'jst_theme_enqueue_styles' );

// Enqueue smooth scroll script
function jst_enqueue_script() {
    wp_enqueue_script(
        'janneseppanen-theme',
        get_template_directory_uri() . '/assets/js/script.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'jst_enqueue_script');

// Shortcode for displaying current year
function jst_copyright_shortcode() {
    return '© ' . date('Y');
}
add_shortcode('copyright', 'jst_copyright_shortcode');