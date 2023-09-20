// Cookie/GDPR Consent
const gdprBanner = document.querySelector(".gdpr");
const cookieConsent = gdprBanner.querySelector(".banner-accept");

cookieConsent.addEventListener("click", function(){
  localStorage.setItem("bannerClosed", true);
  gdprBanner.style.display = "none"
  checkBanner(localStorage.getItem("bannerClosed"))
});
function checkBanner(bannerClosed) {
  // let bannerClosed = localStorage.getItem("bannerClosed");
  cookieConsent.addEventListener("click", function(){
    localStorage.setItem("bannerClosed", true);
    checkBanner()
  });

  if ( bannerClosed ) {
    gdprBanner.style.display = "none";
  }
}
checkBanner(localStorage.getItem("bannerClosed"));
