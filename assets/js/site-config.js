/* Runtime settings the theme and builder modules read on start-up.
   These were printed inline by the CMS on every page; here they live once. */

/* Web fonts the builder waits for before revealing masked text. */
var seaFontData = {};
seaFontData["ux-font-1531806071558"] = {};
seaFontData["ux-font-1531806041397"] = {};
seaFontData["Poppins"] = {};

/* Buttons offered inside the PhotoSwipe lightbox. */
var photoSwipeLocalize = [];
photoSwipeLocalize.push({
  id: "facebook",
  label: "Share on Facebook",
  url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
});
photoSwipeLocalize.push({
  id: "twitter",
  label: "Tweet",
  url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
});
photoSwipeLocalize.push({
  id: "pinterest",
  label: "Pin it",
  url: "https://www.pinterest.com/pin/create/button/" +
       "?url={{url}}&media={{image_url}}&description={{text}}"
});
photoSwipeLocalize.push({
  id: "download",
  label: "Download image",
  url: "{{raw_image_url}}",
  download: true
});

var seaCopyTipText = "Copied!";
var isFilterClick = false;

/* Grid modules can page in more posts from a back end. This build is static,
   so the feature stays off and no endpoint is configured. */
var UxCBModGlobal = [];
var UxCBModGlobalAjax = "false";
var ajaxurl = "";

/* Legacy jPlayer fallback path. Kept so the audio module can initialise. */
var JS_PATH = "assets/js/";
