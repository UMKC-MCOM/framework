// Cookie/GDPR Consent
const gdprBanner = document.querySelector(".gdpr");
const cookieConsent = gdprBanner.querySelector(".banner-accept");
const bannerClosed = localStorage.getItem("bannerClosed");
cookieConsent.addEventListener("click", function(){
  localStorage.setItem("bannerClosed", true);
  checkBanner()
});
function checkBanner() {
  if ( bannerClosed ) {
    gdprBanner.style.display = "none";
  }
}
checkBanner();
