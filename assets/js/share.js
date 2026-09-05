/* Share links for single project pages.
   The markup carries only `data-share="<network>"`; the URL and title are read
   from the page at click time, so the links follow wherever the site is hosted. */
(function () {
  'use strict';

  var WINDOWS = {
    facebook:  [600, 300],
    twitter:   [600, 300],
    linkedin:  [863, 500],
    reddit:    [617, 514],
    tumblr:    [600, 300],
    digg:      [715, 330],
    pinterest: [750, 550]
  };

  function endpoint(network, url, title, image) {
    switch (network) {
      case 'facebook':
        return 'https://www.facebook.com/sharer/sharer.php?u=' + url;
      case 'twitter':
        return 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title;
      case 'linkedin':
        return 'https://www.linkedin.com/shareArticle?mini=true&url=' + url;
      case 'reddit':
        return 'https://www.reddit.com/submit?url=' + url + '&title=' + title;
      case 'tumblr':
        return 'https://www.tumblr.com/share/link?url=' + url + '&name=' + title;
      case 'digg':
        return 'https://digg.com/submit?url=' + url;
      case 'pinterest':
        return 'https://www.pinterest.com/pin/create/button/?url=' + url +
               '&description=' + title + (image ? '&media=' + image : '');
      default:
        return null;
    }
  }

  function pageTitle() {
    var heading = document.querySelector('.title-wrap-tit, .entry h1, h1');
    return (heading ? heading.textContent : document.title).trim();
  }

  function pageImage() {
    var meta = document.querySelector('meta[property="og:image"]');
    return meta ? new URL(meta.content, location.href).href : '';
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest ? event.target.closest('[data-share]') : null;
    if (!link) { return; }

    event.preventDefault();

    var network = link.getAttribute('data-share');
    var url = encodeURIComponent(location.href);
    var title = encodeURIComponent(pageTitle());

    if (network === 'mail') {
      location.href = 'mailto:?subject=' + title + '&body=' + url;
      return;
    }

    var target = endpoint(network, url, title, encodeURIComponent(pageImage()));
    if (!target) { return; }

    var size = WINDOWS[network] || [600, 400];
    window.open(
      target,
      'share-' + network,
      'width=' + size[0] + ',height=' + size[1] +
      ',left=' + Math.round(screen.availWidth / 2 - size[0] / 2) +
      ',top=' + Math.round(screen.availHeight / 2 - size[1] / 2)
    );
  });
}());
