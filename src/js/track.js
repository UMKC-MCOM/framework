const links = document.querySelectorAll('.track');
links.forEach(link => {
  link.addEventListener('click', function(e){
    console.log(e);
    let category = (link.dataset.category ? link.dataset.category : 'link'),
        action = (link.dataset.action ? link.dataset.action : 'click'),
        label = (link.dataset.label ? link.dataset.label : link.innerText);

    dataLayer.push({'event' : 'customEvent', 'eventCategory' : category, 'eventAction' : action, 'actionLabel' : label})
  });
});
