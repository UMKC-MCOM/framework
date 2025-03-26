const directory = document.querySelector(".di") !== null ? document.querySelector(".di") : false;
const perPage = 10;

const displayPageNav = (dataSet, perPage) => {
  let pagination =``
  const totalItems = dataSet.length
  perPage = perPage ? perPage : 1
  const pages = Math.ceil(totalItems/perPage)
  if ( pages > 1 ){
    for(let i = 1; i <= pages; i++) {
      var pagClass = "";
      if ( i === 1 ){
        pagClass = " active";
      }
      pagination += `<li class="pagination__item"><a class="pagination__link${pagClass}" href="#">${i}</a></li>`
    }
  }
  let pagNav = document.getElementById('pagination')
  pagNav.innerHTML = `<ul class="pagination__list">${pagination}</ul>`;
  // pagNav.innerHTML = `showing ${perPage} of ${totalItems}`;
  pagNav.querySelectorAll("a").forEach( item => {
    item.addEventListener("click", function(e){
      e.preventDefault();
      pagNav.querySelector(".active").classList.remove('active');
      item.classList.add("active");
      document.querySelector(".di").scrollIntoView();
      displayItems(dataSet, item.innerHTML,perPage);
    });
  });
}

const displayItems = ( dataSet, page = 1, perPage = 2 ) => {
let index, offSet
  if(page == 1 || page <=0)  {
    index = 0
    offSet = perPage
  } else if(page > dataSet.length) {
    index = page - 1
    offSet = dataSet.length
  } else {
    index = page * perPage - perPage
    offSet = index + perPage
  }

  const slicedItems = dataSet.slice(index, offSet)

  const html = slicedItems.map(item =>
  `<div class="di__item">
      <img class="di__image" src="${item.image}" loading="lazy" alt="" />
      <p class="di__name"><a href="${item.link}">${item.name}</a></p>
      <p class="di__title">${item.title.toString()}</p>
      <p class="di__dept">${item.email}</p>
    </div>`)

  document.querySelector('.paginationDirectory').innerHTML = html.join('')
}

function filter(searchTerm, dataSet){
  let term = searchTerm.toLowerCase();
  dataSet = dataSet.filter( (e) => {
    let name = e.name.toLowerCase();
    let title = e.title.toString().toLowerCase();
    let email = e.email.toLowerCase();
    if ( name.includes(term) || title.includes(term) || email.includes(term)) {
      return e;
    }
  });

  displayPageNav(dataSet, perPage)
  displayItems(dataSet, 1, perPage)
}

if ( directory ) {
  const dirFeed = directory.dataset.src;
  var dataSet = await fetch(dirFeed).then( response => { if ( response.ok ) return response.json() }).catch((error) => {
    console.log(error.message)
  });
  const search_form = document.getElementById("directory_search");
  const search_input = document.getElementById("dirSearch");
  if ( search_form !== null ) {
    search_form.addEventListener("input", e => {
      let search_t = e.target.value;
      filter(search_t, dataSet);
    });
  }

  displayPageNav(dataSet, perPage);
  displayItems(dataSet, 1, perPage);
}
