// const directory = document.querySelector(".di") !== null ? document.querySelector(".di") : false;
// if ( directory ) {
//   const search_form = document.getElementById("directory_search");
//   const search_input = document.getElementById("dirSearch");
//   const profiles = document.querySelectorAll(".di__item:not(.di__item--header)");
//   const errorMessage = document.createElement("div");
//       errorMessage.classList = ("alert alert--info");
//       errorMessage.innerHTML = `<p>No results for your search term(s).</p>`;
// 
//   const showProfiles = async(term) => {
//     errorMessage.remove();
//     [...profiles].forEach( profile => profile.classList.remove('hidden'))
//     if ( term.length >= 3 ) {
//       [...profiles]
//         .filter(profile => !profile.textContent.toLowerCase().includes(term.toLowerCase()) )
//         .forEach( profile => {
//           profile.classList.add('hidden') } )
//       let results = document.querySelectorAll(".di__item.hidden");
//       if ( results.length == profiles.length ){
//         directory.appendChild(errorMessage);
//       }
//     }
//   }
// 
//   if ( search_form !== null ) {
//     search_form.addEventListener("input", e => {
//       let search_t = search_input.value;
//       showProfiles(search_t);
//     });
//   }
// }
