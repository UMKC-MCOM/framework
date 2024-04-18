// Cookie/GDPR Consent
const gdprBanner = document.querySelector(".gdpr");
const cookieConsent = gdprBanner.querySelector(".banner-accept");

if ( gdprBanner !== null || cookieConsent !== null ) {
  cookieConsent.addEventListener("click", function(){
    localStorage.setItem("bannerClosed", true);
    gdprBanner.style.display = "none"
    checkBanner(localStorage.getItem("bannerClosed"))
  });
}
function checkBanner(bannerClosed) {
  cookieConsent.addEventListener("click", function(){
    localStorage.setItem("bannerClosed", true);
    checkBanner()
  });

  if ( bannerClosed ) {
    gdprBanner.style.display = "none";
  }
}
checkBanner(localStorage.getItem("bannerClosed"));
