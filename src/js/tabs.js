var Tabs = {
  init: function() {
    this.bindUIfunctions();
    this.pageLoadCorrectTab();
  },
  bindUIfunctions: function() {
    // Delegation
    let tabs = document.querySelectorAll(".tabs a[href^='#']");
    for ( let tab of tabs ) {
      tab.addEventListener('click', function(event){
        if ( !event.target.classList.contains("visible") ) {
          Tabs.changeTab(event.target.hash);
          document.querySelector(event.target.hash).scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
        event.preventDefault();
      })
    }
  },
  changeTab: function(hash) {
    let anchor = document.querySelector('[href="' + hash + '"]');
    let div = document.querySelector(hash);
    let parentDiv = div.parentElement;
    let activeAnchor = parentDiv.parentElement.querySelector("a[href^='#'][aria-expanded=true]");
    let activeDiv = parentDiv.querySelector(".tabs__content[aria-hidden=false]");
    let btn = parentDiv.querySelector('[data-toggle="' + hash + '"]');
    let activeBtn = parentDiv.querySelector('[data-toggle][aria-expanded=true]');
    // deactivate previously active
    activeAnchor.setAttribute("aria-expanded", false)
    activeBtn.setAttribute("aria-expanded", false);
    activeDiv.setAttribute("aria-hidden", true);
    // active.classList.remove("visible", "on");
    // activeBtn.classList.remove("on");
    // activeDiv.classList.remove("visible");

    // activate current (visually)
    anchor.setAttribute("aria-expanded", true)
    btn.setAttribute("aria-expanded", true);
    div.setAttribute("aria-hidden", false);

    // update URL, no history addition
    window.history.replaceState("", "", hash);
  },
  // If the page has a hash on load, go to that tab
  pageLoadCorrectTab: function() {
    if ( document.location.hash != "" && document.querySelectorAll('.tabs').length > 0 && document.querySelectorAll('[id="'+document.location.hash.substring(1)+'"]').length > 0){
      this.changeTab(document.location.hash);
    }
  }
}

Tabs.init();
