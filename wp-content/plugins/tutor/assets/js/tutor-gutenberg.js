(()=>{"use strict";var t={};/************************************************************************/// The module cache
var r={};// The require function
function e(n){// Check if module is in cache
var o=r[n];if(o!==undefined){return o.exports}// Create a new module (and put it into the cache)
var a=r[n]={exports:{}};// Execute the module function
t[n](a,a.exports,e);// Return the exports of the module
return a.exports}/************************************************************************/// webpack/runtime/rspack_version
(()=>{e.rv=()=>"1.4.11"})();// webpack/runtime/rspack_unique_id
(()=>{e.ruid="bundler=rspack@1.4.11"})();/************************************************************************/;// CONCATENATED MODULE: external "wp.i18n"
const n=wp.i18n;// CONCATENATED MODULE: ./assets/react/gutenberg/custom-button.js
/**
 * Add custom button on Gutenberg header to open Tutor frontend
 * builder
 *
 * @since v2.0.5
 */(function(t,r){var e="tutor-frontend-builder-trigger";// prepare our custom link's html.
var o='\n        <a id="'.concat(e,'" class="tutor-btn tutor-btn-primary tutor-btn-sm tutor-text-nowrap" href="').concat(tutorInlineData.frontend_dashboard_url,'" target="_blank">\n        ').concat((0,n.__)("Edit with Frontend Course Builder","tutor"),"\n        </a>\n    ");// check if gutenberg's editor root element is present.
var a=document.getElementById("editor");if(!a){return}var i=r.data.subscribe(function(){setTimeout(function(){if(!document.getElementById(e)){var t=a.querySelector(".edit-post-header-toolbar");if(t instanceof HTMLElement){t.insertAdjacentHTML("beforeend",o)}}},100)});// unsubscribe is a function - it's not used right now 
// but in case you'll need to stop this link from being reappeared at any point you can just call unsubscribe();
})(window,wp);// CONCATENATED MODULE: ./assets/react/gutenberg/index.js
})();