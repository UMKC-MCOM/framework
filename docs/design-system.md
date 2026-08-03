# UMKC web system

This repository is an incremental design system, not a page rewrite. Existing
classes remain supported while modules move onto a small shared foundation.

## Stable contract

- `01-abstracts`: build-time Sass helpers. These must not output CSS.
- `02-base`: browser defaults and global CSS custom properties.
- `03-components`: reusable interface pieces that work in any layout.
- `04-layouts`: page-level composition and named content modules.
- `05-utilities`: single-purpose overrides. Utilities are the final layer.

Use CSS custom properties from `_root.scss` for spacing, widths, motion, focus,
radius and elevation. Keep module-specific variables on the module root. New
class names use BEM (`.component__part--variation`) and do not depend on HTML
tag nesting for their primary layout.

## Module definition of done

Every module must have:

1. Semantic HTML with a useful heading structure.
2. A single Sass file imported by its layer barrel.
3. Mobile-first layout with an explicit wide-screen enhancement.
4. Keyboard focus, reduced-motion handling where relevant, and useful image alt
   text (or intentionally empty alt text for redundant linked thumbnails).
5. Realistic long and short content in its example partial.
6. A successful `npm run check` before review. `npm run lint:css:all` exposes
   the existing cleanup backlog and will become the gate one migrated module at
   a time; it is not currently expected to pass.

## News article contract

`includes/ks/news-standard.html` is the reference article. The public hooks are
`.news-article`, `.news-article__*`, `.news-card-grid` and `.news-card__*`.
Article body markup intentionally supports ordinary Cascade WYSIWYG output:
paragraphs, headings, figures, captions and blockquotes require no editor-added
classes. Optional regions (notice, tags, author image and related stories) can
be omitted without changing the remaining layout.

In article body content, add `align-left`, `align-right` or `align-center` to a
`figure` or `blockquote`. Side-aligned content remains full-width on small
screens, floats beside article text on larger screens and visually breaks out
of the reading column on desktop screens. A negative margin is applied only to
the outside edge, while the inside edge retains the standard spacing token so
text cannot overlap the element. Figures use the same caption treatment at
every alignment. Side-aligned blockquotes use the compact pull-quote treatment;
centered and unclassified blockquotes use the full quote treatment. Alignment
classes describe presentation only and do not replace semantic `figure`,
`figcaption` or `blockquote` markup.

Body figures preserve an image's intrinsic aspect ratio; the `3 / 2` crop is
reserved for the article hero. Landscape body images need no orientation class.
Add `media-portrait` to portrait figures so centered portraits cap at `30rem`
and floated portraits cap at `20rem`. Include the source image's `width` and
`height` attributes so browsers can reserve the correct ratio before it loads.
The modifier never changes the shared `figcaption` treatment.

Blockquote attribution belongs in a `footer`. A person's name remains plain
text; wrap the title of the interview, speech, article or other source in
`cite`. Include the em dash in the HTML so attribution punctuation does not
depend on generated CSS content:

```html
<blockquote class="align-left">
  <p>“Quoted statement.”</p>
  <footer>— Name Surname, <cite>UMKC News interview</cite></footer>
</blockquote>
```

Related-story cards link only the headline. The thumbnail is not interactive,
which gives each story one destination and one keyboard stop. Use `alt=""` when
the thumbnail repeats information already conveyed by the headline; use concise
alternative text only when the image adds information a reader needs.

## Releasing CSS without republishing pages

Do not embed generated CSS in Cascade pages. Publish the compiled assets to one
centrally served, versioned location and keep a stable URL for the active major
version, for example:

```text
/design-system/v2/styles.css       immutable release artifact
/design-system/current/styles.css  server/CDN alias to the approved release
```

Templates reference the stable `current` URL once. A compatible CSS release is
then an atomic asset/CDN change, not an 8,000-page publish. Breaking selector or
markup changes require a new major URL and a deliberate template migration.

Release sequence:

1. Run `npm ci` and `npm run check` in CI.
2. Upload hashed Vite assets as immutable files.
3. Test the candidate URL against representative Cascade output.
4. Move the `current` alias only after approval; retain the prior release for
   instant rollback.

The hosting/CDN alias is infrastructure work outside this repository, but this
contract prevents the codebase from coupling minor visual fixes to page output.
