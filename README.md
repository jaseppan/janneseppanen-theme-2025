# Janne Seppänen Theme 2025

A custom WordPress block theme designed for a portfolio site. This theme is built to be lightweight, responsive, and customizable using the WordPress block editor.

## Features

- **Full Site Editing (FSE):** Built with WordPress block editor support.
- **Customizable Header and Footer:** Includes multiple header and footer template parts.
- **Custom Fonts:** Supports Manrope and Fira Code fonts.
- **Smooth Scrolling:** Smooth scrolling for anchor links.
- **Shortcodes:** Includes a shortcode for displaying the current year.
- **Fixed Header:** A fixed header with customizable padding.
- **Custom Templates:** Includes a "Page No Title" template for pages without titles.

## Installation

1. Download or clone this repository into your WordPress `wp-content/themes` directory.
2. Activate the theme in the WordPress admin under **Appearance > Themes**.
3. Customize the theme using the WordPress block editor.

## Shortcodes

### Current Year Shortcode
Displays the current year with a copyright symbol.

- **Usage:** `[current-year]`
- **Output:** `© 2025`

## File Structure

- **`functions.php`:** Contains theme functions, including enqueuing styles/scripts and shortcodes.
- **`style.css`:** Theme styles, including fixed header and smooth scrolling.
- **`theme.json`:** Theme configuration for colors, typography, spacing, and templates.
- **`parts/header.html`:** Header template part.
- **`parts/footer.html`:** Footer template part.
- **`assets/js/smooth-scroll.js`:** JavaScript for smooth scrolling.
- **`templates/index.html`:** Main template for the homepage.
- **`templates/page.html`:** Template for pages without titles.

## Customization

### Header
- The header is fixed and includes padding for left and right spacing.
- Modify the header in `parts/header.html` or adjust styles in `style.css`.

### Footer
- Customize the footer in `parts/footer.html`.

### Fonts
- The theme uses Manrope and Fira Code fonts. You can update the font files in the `assets/fonts` directory.

### Smooth Scrolling
- Smooth scrolling is enabled for anchor links. The script is located in `assets/js/smooth-scroll.js`.

## Custom Templates

### Page No Title
A custom template for pages without titles.

- **File:** `page-no-title.html`
- **Usage:** Assign this template to a page in the WordPress editor under **Page Attributes**.

## Requirements

- WordPress 6.7 or higher
- PHP 5.7 or higher

## License

This theme is licensed under the [GNU General Public License v2 or later](http://www.gnu.org/licenses/gpl-2.0.html).

## Author

**Janne Seppänen**  
[Portfolio Website](#)  