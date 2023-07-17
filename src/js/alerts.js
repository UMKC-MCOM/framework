// $.ajax({
//   url: "https://www.getrave.com/rss/xavier/channel2",
//   cache: false
// }).done(function(d){
//   console.log(d);
//   $(d).find("item").each(function(){
//     var item = $(this);
//     var title = item.find("title").text();
//     var desc  = item.find("description").text();
//     var pubDate = item.find("pubDate").text();
//     var myDate = new Date(pubDate);
//     var expDate = new Date(pubDate);
//    Other days can also be added to the setDate function
//     var exp  = expDate.setDate(expDate.getDate() + 2);
//     var xDate = new Date(exp)
//     var html;
//     if ( new Date() <= exp ){
//       html = "<div class='alert alert--danger' role='alert' aria-atomic='true'><div class='alert--danger__icon'><span class='fa' aria-hidden='true'></span></div><div class='alert__content'>";
//       html += "<p><strong>"+title+"</strong><br />"+ desc +"<br/>Posted: " +  myDate.toLocaleDateString() + "</p>";
//       html += "</div></div>";
//     }
//     $('.alertme').append(html);
//   });
// });

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
  .then((str) => { new window.DOMParser().parseFromString(str, "text/xml") })
  .then((data) => {
    const items = data.querySelectorAll("item");
    items.forEach( el => {
      let title = el.querySelector("title").innerHTML;
      let desc = el.querySelector("description").innerHTML;
      let pubDate = el.querySelector("pubDate").innerHTML;
      let link = el.querySelector("link").innerHTML;
      let expDate = new Date(pubDate);
          expDate = expDate.setDate(expDate.getDate() + 2);
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
