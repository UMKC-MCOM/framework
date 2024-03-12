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
        sessionStorage.getItem("hideSiteAlert") == true
        || title.toLowerCase() == "remove web banner"
        || desc.toLowerCase() == "remove web banner"
      ) {
        return false
      }
      let alertContent = `<h1 class="site-alert__title">${title}</h1><p>${desc}</p>`;
      if ( link ) {
        alertContent += `<p><a href="${link}">Alert details</a>.</p>`
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
  .catch((error) => {})
}
checkAlerts()

fetch('https://www.umkc.edu/global-assets/api/campus-alert.aspx?assetId=84fe7bf3ac1e04cd75402c87af2d0f19&assetType=block')
  .then( response => {
    return response.json();
  })
  .then ( data => {
    showAlert(data);
  })
  .catch( function (err) {
    console.log(err);
  })

async function showAlert(data){
  var mainContainer = document.querySelector("body");
  let dn = data.asset.xhtmlDataDefinitionBlock.structuredData.structuredDataNodes;
  let alertDiv = document.createElement("div");
  alertDiv.className = "site-alert";
  alertDiv.style.cssText = `
    padding: 10px 45px;
    border-top: solid 12px #0066cc;
    border-bottom: solid 6px rgb(255, 221, 0);
    background-color: rgb(255, 221, 0);
    font-size: 18px !important;
    display: flex;
    align-items: center;
  `;
  alertDiv.innerHTML = `<svg class="icon site-alert__icon" style="height: 1.5rem; flex-basis: 1.5rem; width: 1.5rem;" viewBox="0 0 6.8 18.2"><path d="M0.1,16.2l1.7-0.4V7.9L0,7.5V5.4h5.2v10.3l1.6,0.4v2.1H0.1C0.1,18.2,0.1,16.2,0.1,16.2z M5.2,2.5H1.8V0h3.4V2.5z"/></svg><div class="site-alert__content" style="flex: 1 1;">{{content}}</div>
  <button class="o-btn site-alert__close"><svg class="icon site-alert__icon" viewBox="0 0 24 24" style="height: 1.75rem; flex-basis: 1.75rem; width: 1.75rem;">
  <path d="M18.4,16.5l3.9-3.8c0.5-0.5,0.6-1.3,0.1-1.9c-0.4-0.6-1.2-0.8-1.8-0.4c-0.1,0.1-0.2,0.1-0.3,0.2 l-3.9,3.9l-3.9-3.9c-0.5-0.5-1.3-0.6-1.9-0.1c-0.1,0.1-0.2,0.2-0.2,0.3c-0.4,0.6-0.4,1.4,0.1,1.9l3.9,3.8l-3.9,3.8 c-0.5,0.5-0.6,1.3-0.1,1.9c0.4,0.6,1.2,0.8,1.8,0.4c0.1-0.1,0.2-0.1,0.3-0.2l3.9-3.9l3.9,3.9c0.5,0.5,1.3,0.6,1.9,0.1 c0.1-0.1,0.2-0.2,0.2-0.3c0.4-0.6,0.4-1.4-0.1-1.9L18.4,16.5z"></path></svg></button>`;
  dn.forEach( node => {
    let current = node.structuredDataNodes;
    let active = ( current[0].text.includes("Yes") ? true : false );
    // Homepage Only, if yes, mark it true.
    let hpOnly = current[1].text == "yes" ? true : false;
    // If active and hpOnly is true and the location is the homepage, assigned for UMKC

    let matches = /http(s)?:\/\/(www\.)?umkc\.edu\/(index\.html)?/
    if ( active && ( hpOnly && matches.test(window.location.href) ) ) {

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
