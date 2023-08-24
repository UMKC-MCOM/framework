// Cookie/GDPR Consent
const gdprBanner = document.querySelector(".gdpr");
const cookieConsent = gdprBanner.querySelector(".banner-accept");

cookieConsent.addEventListener("click", function(){
  localStorage.setItem("bannerClosed", true);
  gdprBanner.style.display = "none"
  checkBanner(localStorage.getItem("bannerClosed"))
});
function checkBanner(bannerClosed) {
  if ( bannerClosed ) {
    gdprBanner.style.display = "none";
  }
}
checkBanner(localStorage.getItem("bannerClosed"));
