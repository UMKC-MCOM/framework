function checkAlerts() {
  let header = document.querySelector("header");
  let alertDiv = document.createElement("div");
      alertDiv.className = "site-alert";
      alertDiv.innerHTML = `<svg class="icon site-alert__icon"><use xlink:href="#info"></use></svg><div class="site-alert__content">{{content}}</div>
      <button class="o-btn site-alert__close"><svg class="icon site-alert__icon"><use xlink:href="#close"></use></svg></button>`;
  fetch("https://content.getrave.com/rss/umkc/channel1")
  .then((response) => {
    if (response.ok) {
      return response.text();
    }
    return Promise.reject(response);
  })
  .then((data) => {
    let parseString = new window.DOMParser().parseFromString(data, "text/xml");
    const items = parseString.querySelectorAll("item");
    items.forEach( el => {
      let title = el.querySelector("title").innerHTML;
      let desc = el.querySelector("description").innerHTML;
      let pubDate = el.querySelector("pubDate").innerHTML;
      let link = el.querySelector("link").innerHTML;
      // If the title reads "Remove Web Banner", don't show anything
      if (
        JSON.parse(sessionStorage.getItem("hideSiteAlert")) === true
        || title.toLowerCase() == "remove web banner"
        || desc.toLowerCase() == "remove web banner"
      ) {
        return false;
      }
      let alertContent = `<h1 class="site-alert__title">${title}</h1><p>${desc}</p>`;
      if ( link ) {
        alertContent += `<p><a href="${link}">Alert details</a>.</p>`;
      }
      alertDiv.innerHTML = alertDiv.innerHTML.replace(`{{content}}`, alertContent);
      header.insertAdjacentElement('beforebegin', alertDiv);
      let alertClose = document.querySelectorAll(".site-alert__close");

      alertClose.forEach(el => {
        el.addEventListener("click", function(e) {
          sessionStorage.setItem("hideSiteAlert", true);
          el.parentElement.classList.add("hidden");
        });
      });
    });
  })
  .catch((error) => {});
}
checkAlerts();

fetch('https://www.umkc.edu/global-assets/api/campus-alert.php?assetId=84fe7bf3ac1e04cd75402c87af2d0f19&assetType=block')
  .then( response => {
    return response.json();
  })
  .then ( data => {
    showAlert(data);
  })
  .catch( function (err) {
    console.log(err);
  });

async function showAlert(data){
  var mainContainer = document.querySelector("body");
  let dn = data.asset.xhtmlDataDefinitionBlock.structuredData.structuredDataNodes;
  let alertDiv = document.createElement("div");
  alertDiv.className = "site-alert";
  alertDiv.innerHTML = `<svg class="icon site-alert__icon"><use xlink:href="#info"></use></svg><div class="site-alert__content">{{content}}</div>
  <button class="o-btn site-alert__close"><svg class="icon site-alert__icon"><use xlink:href="#close"></use></svg></button>`;
  dn.forEach( node => {
    let sessionAlertHide = ( sessionStorage.getItem("hideSiteAlert") !== null ? JSON.parse(sessionStorage.getItem("hideSiteAlert")) : false );
    let current = node.structuredDataNodes;
    let active = ( current[0].text.includes("Yes") ? true : false );
    // Homepage Only, if yes, mark it true.
    let hpOnly = current[1].text == "yes" ? true : false;
    // If active and hpOnly is true and the location is the homepage, assigned for UMKC

    let matches = /http(s)?:\/\/(www\.)?umkc\.edu\/(index\.html)?/
    if ( !sessionAlertHide && ( active && hpOnly && matches.test(window.location.href) || ( !hpOnly && active) ) ) {
      let content = current[2].text;
      alertDiv.innerHTML = alertDiv.innerHTML.replace("{{content}}", content);
      mainContainer.prepend(alertDiv);
      let alertClose = document.querySelectorAll(".site-alert__close");

      alertClose.forEach(el => {
        el.addEventListener("click", function(e) {
          sessionStorage.setItem("hideSiteAlert", true);
          el.parentElement.style.display = "none";
        });
      });
    }
  });
}
