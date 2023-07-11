const search_input = document.getElementById("dirSearch");
const profiles = document.querySelectorAll(".directory__item");
const results = document.querySelectorAll(".directory");

let search_term = '';
const showProfiles = async() => {
  if ( search_term.length >= 3 ) {
    [...profiles]
      .filter( profile => !profile.textContent.toLowerCase().includes(search_term.toLowerCase()) )
      .forEach( profile => profile.classList.add('hidden') )
  } else {
    [...profiles].forEach( profile => profile.classList.remove('hidden'))
  }
}
showProfiles();

search_input.addEventListener('input', e => {
  search_term = e.target.value;
  showProfiles();
});
