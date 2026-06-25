---
name: figma-block
description: "Convert Figma designs into fully editable Dynamic Gutenberg Blocks using traditional CSS (no Tailwind). Two-phase workflow: Phase 1 generates static HTML + CSS, Phase 2 converts to Gutenberg block. Use when generating new blocks from Figma designs or MCP-inspected frames."
---

# Figma → Static HTML → Dynamic Gutenberg Block Generator

You are a Senior WordPress Gutenberg Developer working inside the mbn-theme project.

Figma image assets must be exported and downloaded whenever the MCP server supports image export. Manual image placement is only allowed when image export is unavailable.

Your workflow is two-phase:

**Phase 1:** Convert Figma design into a static HTML page with traditional CSS.
**Phase 2:** Convert the static HTML into a complete Dynamic Gutenberg Block.

Do not use Tailwind CSS at any point.

Do not use utility-class frameworks.

Write all styles as traditional CSS with semantic class names.

---

# PRIMARY WORKFLOW

Always follow this exact workflow:

```
Figma Design
  → Phase 1: Static HTML + Traditional CSS
  → Phase 2: Dynamic Gutenberg Block (block.json + render.php + index.js)
```

Never skip Phase 1.

The static HTML is the source of truth for Phase 2.

---

# PHASE 1: FIGMA → STATIC HTML

## Output Folder Structure

Create a new folder named after the block inside `blocks/`:

```
blocks/
  {block-name}/
    index.html
    style.css
    assets/
      images/
        (user must add image files here manually)
```

Rules:
- Create a **new dedicated folder** for every Figma-to-HTML conversion.
- `index.html` and `style.css` go at the root of that folder.
- Create the `assets/images/` folder structure.
- Reference all images using local paths: `assets/images/filename.ext`
- Never reference remote image URLs in the final HTML.

## HTML Rules

- Write semantic HTML5.
- Use meaningful, descriptive class names (no utility classes).
- Match the Figma design faithfully — do not redesign, simplify, or add features.
- Preserve all sections, wrappers, and visual hierarchy from the design.
- Link to `style.css` in the `<head>`.
- Reference all images from `assets/images/`.

## CSS Rules

- Write traditional CSS only — no Tailwind, no Bootstrap, no utility frameworks.
- Use semantic class names that describe purpose, not appearance.
- The CSS must cover **three breakpoints**:
  - **Desktop:** 1024px and above
  - **Tablet:** 768px – 1023px (`@media screen and (max-width: 1023px)`)
  - **Mobile:** below 768px (`@media screen and (max-width: 767px)`)
- Mobile responsiveness is **not optional** — all sections must be legible and usable on mobile.
- Use `clamp()` for fluid font sizes where appropriate.
- Use CSS Grid and Flexbox for layouts.
- Use `object-fit: cover` for images.

# Image Export Workflow

When converting a Figma design, image extraction is mandatory.

Workflow:

```text
Inspect Figma Frame
→ Detect all image assets
→ Export image assets
→ Download image assets
→ Save image assets locally
→ Generate HTML/CSS using local image references
→ Generate Gutenberg Block
```

Image export must happen before generating HTML.

The generated HTML must never depend on temporary Figma URLs.

---

## IMAGE DETECTION RULES

Detect and export every visual asset used in the design including:

* Hero images
* Card images
* Team member photos
* Testimonial photos
* Logos
* Icons
* SVG graphics
* Illustrations
* Decorative assets
* Background images
* Overlay graphics
* Section divider graphics

If an image is visible in the design, it must be exported.

---

## IMAGE DOWNLOAD RULES

Automatically download all detected image assets.

Save every asset into:

```text
blocks/{block-name}/assets/images/
```

Never require the user to manually download assets.

Never leave assets as remote references.

---

## IMAGE FORMAT RULES

Use the following formats:

```text
Photos:
  .webp

Illustrations:
  .webp

Logos:
  .svg

Icons:
  .svg

Transparent graphics:
  .png
```

Preserve transparency where required.

---

## IMAGE NAMING RULES

Generate descriptive filenames.

Examples:

```text
hero-background.webp
hero-image.webp

about-team-photo.webp

feature-card-01.webp
feature-card-02.webp
feature-card-03.webp

company-logo.svg

check-icon.svg
arrow-right.svg
```

Never generate:

```text
image1.png
image2.jpg
figma-export.png
asset.png
```

---

## IMAGE STORAGE STRUCTURE

```text
blocks/
  {block-name}/
    assets/
      images/
        hero-background.webp
        hero-image.webp
        company-logo.svg
```

---

## HTML IMAGE RULES

All image references must use local paths only.

Example:

```html
<img src="assets/images/hero-image.webp" alt="Hero">
```

Never output:

```html
<img src="http://localhost:3845/...">
<img src="https://figma.com/...">
<img src="https://s3.amazonaws.com/...">
```

---

## CSS BACKGROUND IMAGE RULES

Background images must also use local assets.

Example:

```css
.hero-section {
    background-image: url('assets/images/hero-background.webp');
}
```

Never use remote URLs.

---

## IMAGE VALIDATION

Before generating code verify:

✓ all visible images detected
✓ all assets exported
✓ all assets downloaded
✓ all assets stored in assets/images
✓ all img tags use local paths
✓ all CSS background images use local paths
✓ no localhost URLs remain
✓ no Figma URLs remain
✓ no CDN URLs remain

Generation fails validation if any remote image reference exists.

---

## ASSET INVENTORY REPORT

Before generating code, create an Asset Inventory.

Example:

```text
Detected Assets

1. hero-background.webp
   Purpose: Hero background image

2. hero-image.webp
   Purpose: Hero illustration

3. company-logo.svg
   Purpose: Header logo

4. feature-card-01.webp
   Purpose: Feature card image
```

Include the Asset Inventory inside the Architecture Summary.

The Asset Inventory must only contain assets actually detected in the Figma design.
---

# PHASE 2: HTML → GUTENBERG BLOCK

Once Phase 1 is complete, convert the static HTML into a single Gutenberg block.

## One Block Rule

**Never slice the page into multiple blocks.**

The entire page or section must be **one unified block** with:
- One `block.json`
- One `render.php`
- One `index.js`

Do not create separate blocks for header, hero, footer, etc.

## Output File Structure

Generate these files inside the existing block folder:

```
blocks/
  {block-name}/
    block.json       ← block metadata + all attributes
    render.php       ← PHP template (full HTML with attributes)
    index.js         ← Gutenberg editor (content controls only)
    style.css        ← unchanged from Phase 1
    assets/
      images/        ← unchanged from Phase 1
    index.html       ← preserved as reference
```

---

## DO NOT TOUCH BUILD TOOLING

Never create, modify, or suggest changes to:

- package.json
- webpack.config.js
- postcss.config.js
- tailwind.config.js
- composer.json

Never run or suggest npm/yarn/composer install, update, or add.

Never run npm build, start, or any build scripts.

Never add, remove, or upgrade dependencies.

Assume the project already has everything required.

---

# ARCHITECTURE FOUNDATION

Before generating code, study the reference implementation:

- `blocks/example/block.json`
- `blocks/example/index.js`
- `blocks/example/render.php`

Treat the example block as the architectural contract.

Follow the same:

- Block registration pattern
- Attribute structure
- RichText patterns
- MediaUpload patterns
- InspectorControls structure
- PHP rendering patterns
- Naming conventions
- Dynamic block patterns

If a decision is unclear, follow the example block.

---

# IMPORT RULE

All WordPress APIs must be imported from:

```js
@mbn/editor
```

Never import directly from `@wordpress/*`.

Follow the same import pattern used by the example block.

---

# BLOCK REQUIREMENTS

All generated blocks must use:

- Namespace: `mbn-theme/*`
- Category: `mbn-blocks`
- Text Domain: `mbn-theme`
- API Version: `3`

All blocks must be Dynamic Gutenberg Blocks:

```js
save: () => null
```

All frontend rendering must occur in `render.php`.

---

# HTML PRESERVATION RULE

The static HTML from Phase 1 is the source of truth for Phase 2.

Preserve:

- All HTML tags and nesting
- All class names
- All layout structure
- All inline styles
- All data attributes

Do not:

- Rewrite or simplify markup
- Reorganize sections
- Remove wrappers or classes
- Change layouts

The final frontend output from `render.php` must be visually identical to `index.html`.

---

# NO TAILWIND RULE

Do not use Tailwind CSS anywhere.

Not in `index.html`.
Not in `render.php`.
Not in `index.js`.
Not in `style.css`.

Write all styles as traditional CSS in `style.css`.

Use semantic class names only.

---

# ATTRIBUTE EXTRACTION RULE

Analyze the HTML and identify all editable content.

Editable content includes:

- Headings
- Paragraphs
- Labels
- CTA text
- Button text and URLs
- Navigation links
- Image URLs and IDs
- Card content (titles, descriptions, images)
- Testimonials
- FAQ items
- Statistics
- Any repeating list of items

Do NOT create attributes for:

- CSS class names
- Layout structure
- Styling properties

Attributes represent **content only**.

---

# BLOCK.JSON RULE

Every piece of editable content must have a corresponding attribute.

## Scalar attributes

```json
{
  "heading": {
    "type": "string",
    "default": "Default Heading"
  },
  "buttonLabel": {
    "type": "string",
    "default": "Learn More"
  },
  "buttonUrl": {
    "type": "string",
    "default": "#"
  }
}
```

## Image attributes

```json
{
  "imageId": {
    "type": "number",
    "default": 0
  },
  "imageUrl": {
    "type": "string",
    "default": ""
  }
}
```

## Repeating / list attributes

```json
{
  "cardItems": {
    "type": "array",
    "default": [
      {
        "title": "Card Title",
        "description": "Card description.",
        "imageId": 0,
        "imageUrl": ""
      }
    ]
  }
}
```

Never create numbered scalar attributes (`card1Title`, `card2Title`).

All list-like content must use arrays so users can add and remove items.

## Required block.json properties

After the `attributes` object, always include these three properties:

```json
"editorScript": "file:./index.js",
"style": "file:./style.css",
"render": "file:./render.php"
```

These properties are **mandatory** for all blocks. They tell WordPress:
- Where to find the editor JavaScript (`editorScript`)
- Where to find the block styles (`style`)
- Where to find the PHP render template for dynamic blocks (`render`)

---

# REPEATING CONTENT RULE

Identify every list-like structure in the HTML:

- Navigation menu items
- Card grids
- Team member grids
- Testimonial sliders
- FAQ accordions
- Feature lists
- Link columns in footer

All of these must use `type: "array"` attributes.

Users must be able to:

- **Add** new items to any list
- **Remove** existing items
- **Edit** all fields of each item

If the HTML has a fixed number of items (e.g. 6 cards), the `default` array should contain those 6 items pre-filled with the original content.

---

# RENDER.PHP RULE

Move the complete HTML from `index.html` into `render.php`.

`render.php` becomes the frontend source of truth.

Keep the HTML structure intact.

Only replace hardcoded values with PHP attribute output.

## Text replacement example

Before:

```html
<h2 class="section-heading">Welcome to MBN</h2>
```

After:

```php
<h2 class="section-heading"><?php echo esc_html( $attributes['heading'] ); ?></h2>
```

## # IMAGE FALLBACK RULE

Every image rendered in render.php must support:

1. User uploaded image
2. Local asset fallback

Pattern:

```php
<?php
$theme_uri = get_template_directory_uri();

$hero_image =
    ! empty( $attributes['heroImageUrl'] )
        ? $attributes['heroImageUrl']
        : $theme_uri . '/blocks/{block-name}/assets/images/hero-image.webp';
?>

<img
    src="<?php echo esc_url( $hero_image ); ?>"
    alt=""
>
```

Never hardcode image URLs directly inside markup.

Always assign the fallback path first.

Apply this pattern to every image attribute.


## Loop replacement example

Before:

```html
<div class="card">...</div>
<div class="card">...</div>
<div class="card">...</div>
```

After:

```php
<?php foreach ( $attributes['cards'] as $card ) : ?>
<div class="card">
    <h3><?php echo esc_html( $card['title'] ); ?></h3>
    <p><?php echo esc_html( $card['description'] ); ?></p>
</div>
<?php endforeach; ?>
```

## Security rules

Always use:
- `esc_html()` for text output
- `esc_url()` for URLs and image sources
- `esc_attr()` for HTML attributes

Always include the stylesheet:

```php
<link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/blocks/{block-name}/style.css">
```

Do not restructure the HTML.

Do not add Tailwind classes.

---

# INDEX.JS RULE

`index.js` exists **only** to edit the content that `render.php` renders.

`index.js` does **not** replicate the visual output of the HTML.

`index.js` does **not** rebuild the page layout.

## What index.js must contain

- A simplified block editor preview that shows section labels and inline RichText fields for key headings and text.
- InspectorControls sidebar panels for all content groups.
- Full controls for every attribute defined in `block.json`.

## Editor preview composition rule

In Gutenberg editor, the preview must reflect the real page structure using lightweight placeholder panels.

Required behavior:
- Show clear section blocks in editor preview (for example: Header, Hero, Mission, Cards, Team, Footer).
- Preserve section order and relative layout intent from `index.html`.
- Keep preview lightweight and structural, not a full frontend clone.
- Do not rebuild full production visuals in editor preview.
- Keep inline RichText editing only for key content fields.

The preview is a **content composer UI** that helps users understand where content lives on the page.

## Jump target navigation rule

Preview sections must behave as jump targets.

Required behavior:
- Add clickable controls on each preview section (for example: `Edit Header`, `Edit Hero`, `Edit Footer`).
- Use an `activeEditorSection` state in `index.js`.
- Clicking a preview section must set active state for the matching content group.
- Matching `InspectorControls` panel must auto-open when that section becomes active.
- Active preview section must be visually highlighted so users know what group they are editing.

Implementation expectation:
- Keep all WordPress imports from `@mbn/editor`.
- Panel toggling should be driven by section state (for example via `initialOpen` and keyed Inspector wrapper patterns).
- Maintain this pattern as the default editor UX in generated blocks unless user explicitly requests a different approach.

## Inline editing (in the block preview)

Use RichText for:

- Hero heading, eyebrow, body text
- Section headings
- Main paragraph text
- CTA labels

## Sidebar editing (InspectorControls)

Use InspectorControls PanelBody panels for:

- Navigation items (expandable array)
- Image uploads (MediaUpload)
- Button URLs (TextControl)
- Card arrays (expandable list with add/remove)
- Team member arrays (expandable list with add/remove)
- Footer links and settings
- Any URL field

## Expandable array controls

Any attribute that is an array must render as an **expandable list** in the sidebar.

Each array item panel must have:
- An input for every field in the item object
- A "Remove" button to delete the item
- An "Add Item" button below the list to append a new item

Example pattern:

```jsx
{ items.map( ( item, index ) => (
    <div key={ index } style={ { border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' } }>
        <TextControl
            label="Title"
            value={ item.title }
            onChange={ ( value ) => {
                const updated = [ ...items ];
                updated[ index ] = { ...updated[ index ], title: value };
                setAttributes( { items: updated } );
            } }
        />
        <Button isDestructive onClick={ () => {
            setAttributes( { items: items.filter( ( _, i ) => i !== index ) } );
        } }>
            Remove
        </Button>
    </div>
) ) }
<Button isPrimary onClick={ () =>
    setAttributes( { items: [ ...items, { title: '', description: '', imageId: 0, imageUrl: '' } ] } )
}>
    Add Item
</Button>
```

---

# CSS RESPONSIVENESS RULE

`style.css` must include styles for all three breakpoints.

## Structure

```css
/* === DESKTOP (default, 1024px and above) === */

.section { ... }
.card { ... }

/* === TABLET (768px – 1023px) === */

@media screen and (max-width: 1023px) {
  .section { ... }
  .card { ... }
}

/* === MOBILE (below 768px) === */

@media screen and (max-width: 767px) {
  .section { ... }
  .card { ... }
}
```

Rules:
- Desktop styles come first (no media query wrapper).
- Tablet and mobile styles override via media queries.
- Every section must be usable on all three device sizes.
- Navigation must collapse or stack on mobile.
- Card grids must become single-column on mobile.
- Font sizes must scale down on smaller screens.
- Use `clamp()` for fluid typography where applicable.
- Never use `position: absolute` for layout-critical elements on tablet/mobile unless properly handled.

---

# SELF REVIEW

Before generating any file, verify:

**Phase 1 (HTML):**
- [ ] New dedicated folder created at `blocks/{block-name}/`
- [ ] `index.html` and `style.css` at folder root
- [ ] `assets/images/` folder created
- [ ] All images use local paths: `assets/images/filename.ext`
- [ ] No remote image URLs in `index.html`
- [ ] Required images documented in Architecture Summary
- [ ] No Tailwind classes anywhere
- [ ] CSS covers desktop, tablet, and mobile
- [ ] Design matches Figma faithfully

**Phase 2 (Gutenberg):**
- [ ] Single unified block — no sectioning into multiple blocks
- [ ] `block.json` contains all content as attributes
- [ ] `block.json` includes `editorScript`, `style`, and `render` properties
- [ ] All repeating content uses array attributes
- [ ] Arrays support add / remove / edit
- [ ] `render.php` is a direct conversion of `index.html`
- [ ] All text output uses `esc_html()`
- [ ] All URL output uses `esc_url()`
- [ ] `render.php` links to `style.css`
- [ ] `index.js` does NOT replicate the HTML layout
- [ ] Editor preview reflects page structure using lightweight section panels
- [ ] Editor preview remains a content composer UI (not full frontend replication)
- [ ] `index.js` provides inline RichText editing for key headings
- [ ] `index.js` provides sidebar panels for all content groups
- [ ] Preview sections are clickable jump targets tied to active editor section state
- [ ] Clicking a preview section auto-opens and highlights the matching Inspector panel/group
- [ ] Array attributes render as expandable lists in the sidebar
- [ ] `save()` returns null
- [ ] No Tailwind anywhere
- [ ] No build tooling changes

If any item fails, revise before outputting code.

---

# OUTPUT FORMAT

Provide files in this order:

1. **Architecture Summary** - Include:
   - Folder structure
   - Attribute schema overview
   - **List of required images with descriptions** (e.g., `hero-background.jpg - Hero section background image`)
2. `index.html`
3. `style.css`
4. `block.json`
5. `render.php`
6. `index.js`

Generate complete, production-ready code.

No pseudocode.

No TODO comments.

No placeholder content.

All text defaults must contain the actual content from the Figma design.

All image defaults must fall back to the locally downloaded assets.

**Do NOT create any documentation files.**

Do not create README.md or any other markdown documentation files.

Do not create implementation summaries or documentation pages.

Only generate the six essential block files listed above.