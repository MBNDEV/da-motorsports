# DA Motorsports Theme

Custom WordPress theme for DA Motorsports.

## Theme Details

- Theme Name: `DA Motorsports Theme`
- Theme URI: https://github.com/MBNDEV/mbn-theme
- Description: `Custom Theme for MBN`
- Version: `1.1.0`
- Author: `My Biz Niche`
- Author URI: https://www.mybizniche.com/
- License: `GPL2` - https://www.gnu.org/licenses/gpl-2.0.html
- Text Domain: `mbn-theme`

## Overview

This repository contains a WordPress theme built with:

- native Gutenberg block support
- Tailwind CSS styling
- Composer for PHP tooling
- npm for frontend tooling
- a Block Template sync system for version-controlled templates

## Requirements

- WordPress 5.8+ (or latest supported)
- PHP version compatible with your WordPress install
- Node.js and npm for asset builds
- Composer for PHP dependency management

## Installation

1. Copy or clone this theme into `wp-content/themes/da-motorsports-theme`
2. Install PHP dependencies:
   ```bash
   composer install
   ```
3. Install Node dependencies:
   ```bash
   npm install
   ```
4. Build assets for production:
   ```bash
   npm run build
   ```
5. Activate the theme in WordPress Admin: **Appearance > Themes**

## Development

### Frontend Development

- Start the local development build/watch process:
  ```bash
  npm run start
  ```
- Build production assets:
  ```bash
  npm run build
  ```

### PHP / Theme Development

- Composer manages PHP tooling and packages.
- Autoloading is configured in `functions.php`.
- Theme logic and helpers are organized in `inc/`.

### Block Development

This theme ships with Gutenberg block support and a dedicated block folder.
See `blocks/README.md` for block-specific development details.

## Project Structure

- `assets/` - compiled CSS, JS, images, icons
- `blocks/` - Gutenberg block code and documentation
- `inc/` - PHP includes and theme helper files
- `template-parts/` - reusable template partials and block templates
- `page-templates/` - classic WordPress page templates
- `resources/css/` - source CSS assets
- `scripts/` - utility scripts for versioning and security

## Build & Linting

- Install dependencies: `composer install && npm install`
- Build assets: `npm run build`
- Start dev mode: `npm run start`
- Run PHP coding standards: `composer run lint`
- Fix linting issues: `composer run lint:fix`

## Block Template Sync System

The theme includes a template sync mechanism for keeping Block Templates in sync between database and files.

- `template-parts/` stores header, footer, and layout block templates
- `page-templates/` contains classic PHP page templates
- Sync tools are available in the WordPress admin to export/import templates

## Useful Links

- `CHANGELOG.md` - release notes and version history
- `docs/DEPLOYMENT.md` - deployment guide
- `docs/DEPLOYMENT_CHECKLIST.md` - deployment checklist
- `docs/VERSIONING.md` - versioning workflow
- `docs/RELEASE-CHECKLIST.md` - release process
- `SECURITY.md` - security policy and guidance
- `blocks/README.md` - block development documentation

## Notes

This README is intended for theme maintainers and developers working with the WordPress theme. For environment-specific deployment and sync workflows, refer to the `docs/` directory.
