function _pagePreload() {
  // store everthing in a variable only for this scope
  let body = document.getElementsByTagName('body')[0];
  let outerSite = document.getElementById('outerSite');
  // prevent body content from showing split a second.
  body.style.opacity = '0';
  // DOMContentLoaded Event will fire once stylesheet, js and DOM are finished downloading.
  window.addEventListener('DOMContentLoaded', function(){
    // quickly remove style attr(display: none)
    body.removeAttribute('style');
    // Show preloading overlay element
    setTimeout(function(){body.className += 'page-loading';}, 300);
  });
  // load Event this will fire after all resources like images, fonts, iframes done loading.
  window.addEventListener('load', function(){
    // Load body content
    setTimeout(function(){body.className = 'page-loaded';}, 1000);
    // Removing preload node element
    setTimeout(  function(){document.getElementById('page-is-loading').remove();}, 2000);
  });
}

function init() {
  // _pagePreload();
}

export default init;
