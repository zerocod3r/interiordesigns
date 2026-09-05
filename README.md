# Kajal Designs — portfolio site

A static portfolio for an interior design studio. Eight pages, no build step at
serve time and no server-side dependency: open `index.html` or serve the folder.

## Layout

    index.html                Work — five project tiles on a packed grid
    work/<slug>/              One page per project: sticky brief + image column
    about/                    Contact
    404.html
    robots.txt
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

## Regenerating

The page and image build scripts are not part of the served site. They read the
studio's renders from their own folder and write this directory:

    content.py   projects, copy, running order, tile grid
    images.py    derivative ladders and tile crops
    chrome.py    shared head, header, menu, lightbox shell
    pages.py     the eight page templates
    brand.py     wordmark, favicon, brand.css
    run.py       builds all of it

## To replace before launch

`SITE` in `content.py` carries the studio's email, phone, city and the four
social URLs. All four social links and the phone number are placeholders.
