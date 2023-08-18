function checkAlerts() {
  let header = document.querySelector("header");
  let alertDiv = document.createElement("div");
      alertDiv.className = "site-alert";
      alertDiv.innerHTML = `<svg class="icon site-alert__icon"><use xlink:href="#info"></use></svg><div class="site-alert__content">{{content}}</div>`;
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
      let expDate = new Date(pubDate);
          expDate = expDate.setHours(expDate.getHours() + 2);
      // If the Current date is less than the expiration date
      if ( new Date() <= expDate) {
        let alertContent = `<h1 class="site-alert__title">${title}</h1><p>${desc}</p>`;
        if ( link ) {
          alertContent += `<p>Additional <a href="${link}">updates and emergency details</a>.</p>`
        }
        alertDiv.innerHTML = alertDiv.innerHTML.replace(`{{content}}`, alertContent);
        header.insertAdjacentElement('beforebegin', alertDiv);
      }
    })
  })
  .catch((error) => {})
}
checkAlerts()
