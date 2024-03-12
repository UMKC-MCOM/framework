const giButton = document.getElementById('getInfoButton');
const giForm = document.getElementById('getInfoForm');
const giFormClose = document.getElementById('getInfoClose');
const giFormScreen = document.getElementById('getInfoFormScreen');

// Open the Get More Info form when the button is clicked.
if ( giButton != null ) {
    giButton.addEventListener('click', function(e) {
        e.preventDefault();
        giForm.setAttribute('aria-hidden', false);
        giFormScreen.setAttribute('aria-hidden', false);
        // giButton.setAttribute('aria-hidden', true); // Button doesn't need to hide, it's covered
    });
}
if ( giFormClose != null ) {
// Close the Get More Info form when the X is clicked.
    giFormClose.addEventListener('click', function(e) {
        e.preventDefault();
        giForm.setAttribute('aria-hidden', true);
        giFormScreen.setAttribute('aria-hidden', true);
    });
}