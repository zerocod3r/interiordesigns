# Kajal Designs — portfolio site

A static portfolio for an interior design studio. Eight pages, no build step at
serve time and no server-side dependency.

## Routes

Every page is written as `<route>/index.html`, so a static host serves it at a
clean path. Nothing in the site links to a `.html` file.

    /                         Work — five project tiles on a packed grid
    /work/<slug>/             One page per project: sticky brief + image column
    /about/                   Contact
    404.html                  Served by the host for anything else

## Publishing to GitHub Pages

Push the contents of this folder to the branch Pages is set to serve. No Jekyll
step is involved — `.nojekyll` turns it off, so the build is copied verbatim.

Links between pages are relative, so the site works from any repository name or
a custom domain without changes. Two things do carry the deployed address, and
both come from `SITE` in the build's `content.py`:

* `404.html`, whose links have to be absolute because the host serves that page
  for a missing URL at any depth;
* `sitemap.xml` and the `<link rel="canonical">` on each page.

If the repository is renamed, or the site moves to a custom domain, update
`SITE["url"]` and `SITE["base"]` and rebuild. For a user site or a custom
domain, `base` is `"/"`.

## Layout

    index.html  about/  work/<slug>/  404.html
    robots.txt  sitemap.xml  .nojekyll
    assets/
      css/   brand.css — this studio's layer over the inherited theme CSS
      js/    site-config.js, theme.js, share.js, portfolio-2col.js, modules/, vendor/
      fonts/ display faces + Font Awesome subsets (woff2)
      img/   favicon, rule, UI sprites, PhotoSwipe skin
      media/ one folder per project, each render at 480–2000px wide

## Projects

    Luxury Residence    11 renders — walnut, marble and candlelight
    Trilok Residence    12 renders — a sculptural arrival
    S-39 Panchsheel     12 renders — painted panels and arched marble
    Crossbond Office     4 renders — a workplace that behaves like a home
    Selected Works       3 renders — entrances, lobbies and a family mandir

## How the pages work

* **Home** places the five tiles on a 24-column grid (`data-gs-x/y/width/height`),
  two wide over three medium. The grid engine gives each image whatever height
  its caption leaves in the cell, so the caption reserve in `brand.css` scales
  with the viewport to hold the images near 3:2. Below 768px it becomes one
  column and the tiles are exactly 3:2.
* **Project pages** are two columns: the brief sits in a sticky column while the
  images scroll past it, and the side alternates from project to project. Images
  open in a lightbox. Whether an image runs full width or pairs with its
  neighbour is set per image in the build's `content.py`.
* **Contact** inverts to black through the builder's colour-change group.
* Every page ends with previous / next or a route back to the work.

## Images

Each render is emitted at 480 / 800 / 1200 / 1600 / 2000px and served through
`srcset` with per-context `sizes`, so a phone downloads roughly a tenth of what
a desktop does. Tile images are cropped to 3:2 with a per-image vertical bias;
gallery images keep their native ratio. Everything lazy-loads.

## Previewing locally

Open it through a server rather than `file://`, so that directory routes
resolve:

    python3 -m http.server 8000

## Regenerating

The build scripts live beside this folder in `kajal-designs-build/`.

## To replace before launch

`SITE` in `content.py` carries the studio's email, phone, city and the four
social URLs. All four social links and the phone number are placeholders.
