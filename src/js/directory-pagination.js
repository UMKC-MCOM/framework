// loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js", true)
const dataSet = await fetch("https://www.umkc.edu/hr/profiles/index.json").then( response => response.json());

// console.log(_find(dataSet, ))


let perPage = 8;
const displayPageNav = perPage => {

  let pagination =``
  const totalItems = dataSet.length
  perPage = perPage ? perPage : 1
  const pages = Math.ceil(totalItems/perPage)

  for(let i = 1; i <= pages; i++) {
    pagination += `<a href="#">${i}</a>`
  }

  let pagNav = document.getElementById('pagination')
  pagNav.innerHTML = pagination;
  // pagNav.innerHTML = `showing ${perPage} of ${totalItems}`;
  pagNav.childNodes.forEach( item => {
    item.addEventListener("click", function(e){
      e.preventDefault();
      displayItems(item.innerHTML,perPage);
    });
  });
}

const displayItems = ( page = 1, perPage = 2 ) => {

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
      <p class="di__title">${item.title}</p>
      <p class="di__dept">${item.email}</p>
    </div>`)

  document.querySelector('.paginationDirectory').innerHTML = html.join('')

}

displayPageNav(perPage)
displayItems(1, perPage)
