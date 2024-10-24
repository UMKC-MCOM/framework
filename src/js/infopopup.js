const giButton = document.getElementById('getInfoButton') !== null ? document.getElementById('getInfoButton') : false;
const giForm = document.getElementById('getInfoForm') !== null ? document.getElementById('getInfoForm') : false;
const giFormClose = document.getElementById('getInfoClose') !== null ? document.getElementById('getInfoClose') : false;
const giFormScreen = document.getElementById('getInfoFormScreen') !== null ? document.getElementById('getInfoFormScreen') : false;

if ( giButton ) {
    // Open the Get More Info form when the button is clicked.
    giButton.addEventListener('click', function(e) {
        e.preventDefault();
        giForm.setAttribute('aria-hidden', false);
        giFormScreen.setAttribute('aria-hidden', false);
    });
}
if ( giFormClose ) {
    // Close the Get More Info form when the X is clicked.
    giFormClose.addEventListener('click', function(e) {
        e.preventDefault();
        giForm.setAttribute('aria-hidden', true);
        giFormScreen.setAttribute('aria-hidden', true);
    });
}
