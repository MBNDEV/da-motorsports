# Navigation Menu Sync

This directory contains exported WordPress navigation menus for Git tracking.

## Files

Each menu is exported as a separate PHP file with the naming pattern: `{menu-slug}.php`

## Workflow

### Local Development (Export)

1. Create or edit menus in **Appearance > Menus**
2. Go to **Tools > Nav Menu Sync**
3. Select the checkboxes next to the menus you want to export
4. Click **Export Selected Menus to Files**
5. Commit the generated `.php` files to Git
6. Push to GitHub

### Staging / Production (Import)

1. Pull latest code from Git
2. Go to **Tools > Nav Menu Sync**
3. Click **Import Selected Menus from Files** (or select specific files)
4. The menus will be created or updated automatically

## What Gets Exported

- Menu name and slug
- All menu items (title, URL, target, CSS classes, description)
- Parent/child (dropdown) relationships
- Post/page links stored as slugs (portable across environments)
- Theme location assignments (primary-menu, footer-menu, etc.)

## Important Notes

- **Custom Links**: Use relative URLs (e.g., `/contact`, `/about`) to ensure portability
- **Post/Page Links**: Stored as slugs and resolved to local IDs on import
- **Import Behavior**: Existing menu items are cleared and recreated from the file
- **Theme Locations**: Menu assignments are preserved during export/import

## File Format

Files use PHP array syntax with the following structure:

```php
return array(
    'name'      => 'Main Menu',
    'slug'      => 'main-menu',
    'locations' => array( 'primary-menu' ),
    'items'     => array(
        // Menu items...
    ),
);
```
