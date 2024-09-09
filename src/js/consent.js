// Cookie/GDPR Consent
const gdprBanner = document.querySelector(".gdpr") !== null ? document.querySelector(".gdpr") : false;
const cookieConsent = gdprBanner && gdprBanner.querySelector('.banner-accept') !== null ? gdprBanner.querySelector(".banner-accept") : false;

function checkBanner(bannerClosed) {
  cookieConsent.addEventListener("click", function(){
    localStorage.setItem("bannerClosed", true);
    checkBanner()
  });

  if ( bannerClosed ) {
    gdprBanner.style.display = "none";
  }
}

if ( gdprBanner && cookieConsent ) {
  cookieConsent.addEventListener("click", function(){
    localStorage.setItem("bannerClosed", true);
    gdprBanner.style.display = "none"
    checkBanner(localStorage.getItem("bannerClosed"))
  });

  checkBanner(localStorage.getItem("bannerClosed"));
}
