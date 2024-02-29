const button = document.getElementById('getInfoButton');
const form = document.getElementById('getInfoForm');
const formClose = document.getElementById('getInfoClose');
const formScreen = document.getElementById('getInfoFormScreen');

// Open the Get More Info form when the button is clicked.
if ( button != null ) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.remove('hidden');
        formScreen.classList.remove('hidden');
        button.classList.add('hidden');
    });
}
if ( formClose != null ) {
// Close the Get More Info form when the X is clicked.
    formClose.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.add('hidden');
        formScreen.classList.add('hidden');
        button.classList.remove('hidden');
    });
}
if ( formScreen != null ) {
    // Close the Get More Info form when the smokescreen is clicked.
    formScreen.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.add('hidden');
        formScreen.classList.add('hidden');
        button.classList.remove('hidden');
    });
}
