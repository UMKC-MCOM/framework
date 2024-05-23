import { loadScript } from './load-script.js';
// Create the script tag, set the appropriate attributes
loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDlV7-fmJdxB45GP6pfTKoL4-AI4us-XFE&loading=async&callback=initMap&libraries=marker');
var gMarkers = [];
const mapSource = document.getElementById("map").dataset.source;
const mapBoxes = document.querySelectorAll(".map__checkbox");
const mapCats = [];
mapBoxes.forEach( (box) => {
  mapCats.push(box.getAttribute('id').replace('box', ''));
});
const parser = new DOMParser();
const icons = [];
      icons['dorms'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" class="icon map__icon"><path id="pin" d="M18.71.23s0,0,0,0c0,0,0,0,0,0C11.77.23,6.14,5.86,6.14,12.8c0,2.56.76,4.94,2.08,6.92l10.49,17.05,10.49-17.05c1.31-1.98,2.08-4.36,2.08-6.92C31.28,5.86,25.65.23,18.71.23Z" stroke-width="0"/><path d="M26.19,9.95c-.34,0-.62.24-.62.53v.44h-14.14v-3.21c0-.29-.28-.53-.62-.53s-.62.24-.62.53v7.95c0,.29.28.53.62.53s.62-.24.62-.53v-1.36h14.14v1.36c0,.29.28.53.62.53s.62-.24.62-.53v-5.18c0-.29-.28-.53-.62-.53Z" fill="#fff" stroke-width="0"/><path d="M12.3,10.68h2.13c.35,0,.64-.31.64-.69s-.29-.69-.64-.69h-2.13c-.35,0-.64.31-.64.69s.29.69.64.69Z" fill="#fff" stroke-width="0"/></svg>`;
      icons['rec'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" class="icon map__icon"><path id="pin" d="M18.71.23s0,0,0,0c0,0,0,0,0,0C11.77.23,6.14,5.86,6.14,12.8c0,2.56.76,4.94,2.08,6.92l10.49,17.05,10.49-17.05c1.31-1.98,2.08-4.36,2.08-6.92C31.28,5.86,25.65.23,18.71.23Z" stroke-width="0"/><path id="dumbbell_icon" data-name="dumbbell icon" d="M25.11,8.77c-.12-.12-.27-.18-.43-.18h-.79c-.07,0-.14.01-.2.04v-.63c0-.16-.06-.32-.18-.43s-.27-.18-.43-.18h-.79c-.34,0-.61.27-.61.61v2.51s-5.92,0-5.92,0v-2.51c0-.34-.27-.61-.61-.61h-.79c-.34,0-.61.27-.61.61v.63c-.06-.02-.13-.04-.2-.04h-.79c-.34,0-.61.27-.61.61v1.31s-1.24,0-1.24,0c-.11,0-.2.09-.2.2v2.4s.06.14.06.14l.14.06h1.24s0,1.31,0,1.31c0,.34.27.61.61.61h.79c.07,0,.14-.01.2-.04v.63c0,.16.06.32.18.43s.27.18.43.18h.79c.17,0,.32-.07.43-.18s.18-.26.18-.43v-2.51s5.92,0,5.92,0v2.51c0,.34.27.61.61.61h.79c.16,0,.32-.06.43-.18s.18-.27.18-.43v-.63c.06.02.13.04.2.04h.79c.16,0,.32-.06.43-.18s.18-.27.18-.43v-1.31s1,0,1,0l.14-.06.06-.14v-2.4c0-.11-.09-.2-.2-.2h-1s0-1.31,0-1.31c0-.16-.06-.32-.18-.43h0Z" fill="#fff" stroke-width="0"/></svg>`;
      icons['dining'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" class="icon map__icon"><path id="pin" d="M18.71.23s0,0,0,0c0,0,0,0,0,0C11.77.23,6.14,5.86,6.14,12.8c0,2.56.76,4.94,2.08,6.92l10.49,17.05,10.49-17.05c1.31-1.98,2.08-4.36,2.08-6.92C31.28,5.86,25.65.23,18.71.23Z" stroke-width="0"/><path d="M18.22,13.52s-.05-.09-.04-.14c0-.04.01-.08.01-.11,0-.11-.03-.21-.11-.28-.79-.77-6.34-6.18-6.48-6.28-.15-.11-.31.06-.31.06-1.05,1.11,4.54,6.63,5.3,7.23.35.28.66.26.89.16.06-.03.13-.02.17.03l4.64,4.87c.27.28.7.3.96.03h0c.26-.26.23-.7-.05-.96l-5-4.6Z" fill="#fff" stroke-width="0"/><path d="M22.37,11.68s.39-.03,3.45-3.48c.01-.01.01-.03,0-.04l-.09-.13s-.04-.02-.05,0l-2.5,2.22s-.09.04-.13.02c-.03-.01-.06-.04-.07-.09-.01-.04,0-.09.03-.12l2.4-2.36s.01-.04,0-.05l-.08-.09s-.04-.02-.05,0l-2.49,2.25s-.04.03-.07.03c-.04,0-.07,0-.09-.02,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.01-.02-.02-.05-.01-.09,0-.03.02-.05.04-.07l2.42-2.33s.01-.04,0-.05l-.08-.09s-.04-.02-.05,0l-2.52,2.23s-.08.04-.12.03c-.05-.02-.07-.05-.08-.08-.02-.05,0-.09.03-.13l2.39-2.34s-.13-.15-.13-.15c-.01-.01-.03-.01-.04,0-3.65,2.81-3.71,3.2-3.71,3.2-.15.19-.18.96-.18,1.28,0,.06-.03.12-.07.16l-7.66,6.73c-.32.28-.38.73-.12,1h0c.25.27.71.24,1.01-.05l7.24-7.17s.1-.07.17-.06c.32.02,1.09.04,1.29-.09Z" fill="#fff" stroke-width="0"/></svg>`;
      icons['wellness'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" class="map__icon icon"><path id="pin" d="M18.5.23s0,0,0,0c0,0,0,0,0,0C11.56.23,5.93,5.86,5.93,12.8c0,2.56.76,4.94,2.08,6.92l10.49,17.05,10.49-17.05c1.31-1.98,2.08-4.36,2.08-6.92C31.07,5.86,25.44.23,18.5.23Z" stroke-width="0"/><rect x="16.65" y="6.55" width="3.71" height="10.6" fill="#fff" stroke-width="0"/><rect x="16.65" y="6.55" width="3.71" height="10.6" transform="translate(30.35 -6.65) rotate(90)" fill="#fff" stroke-width="0"/></svg>`;
      icons['safety'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" class="icon map__icon"><path id="pin" d="M18.5.23s0,0,0,0c0,0,0,0,0,0C11.56.23,5.93,5.86,5.93,12.8c0,2.56.76,4.94,2.08,6.92l10.49,17.05,10.49-17.05c1.31-1.98,2.08-4.36,2.08-6.92C31.07,5.86,25.44.23,18.5.23Z" stroke-width="0"/><path id="badge_icon" data-name="badge icon" d="M18.5,6.66c1.17,1.22,2,1.09,3.33.26l1.41,2.27c-1.62.88-1.42,1.53-.74,3.11.08.18.15.35.23.54,1.61,4.02-.37,4.8-2.26,5.55-.88.35-1.29.51-1.95,1.17-.67-.67-1.07-.82-1.95-1.17-1.89-.75-3.88-1.54-2.26-5.55.08-.19.15-.37.23-.54.68-1.58.88-2.23-.74-3.11l1.41-2.27c1.32.83,2.15.96,3.33-.26h0Z" fill="#fff" stroke-width="0"/></svg>`;
var mapItems;
fetch(mapSource)
  .then( res => res.json())
  .then ( data => {
    mapItems = data;
  });

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  const mapOptions = {
    zoom: 16,
    center:{ lat: 39.0340071, lng: -94.5808557 },
    panControl: false,
    zoomControl: true,
    scaleControl: true,
    mapTypeControl: true,
    mapId: "1c8df1be5d0e58ae"
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const infoWindow = new google.maps.InfoWindow();

  if ( mapItems === undefined || mapItems === null) {
      return false;
  }

  // Create the markers
  mapItems.filter((item) => mapCats.includes(item.category)).forEach( (item, i) => {
    let contentString = `
      <div class="map__info">
      <h2 class="map__title">${item.title}</h2>
      <p class="map__content">${item.text}</p>
    `
    const pin = new google.maps.marker.PinElement ({
      glyph: parser.parseFromString(icons[item.category], "image/svg+xml").documentElement,
    });

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: new google.maps.LatLng(item.latitude, item.longitude),
      title: `${i + 1}. ${item.title}`,
      content: pin.glyph,
    });
    marker.category = item.category;
    marker.addListener("click", ({ domEvent, latLng}) => {
      const { target } = domEvent;
      infoWindow.close();
      infoWindow.setContent(contentString);
      infoWindow.open(marker.map, marker);
    });
    gMarkers.push(marker);
  });

  // Show function
  function show(category) {
    gMarkers.forEach( ( item ) => {
      if ( item.category == category ) {
        item.setMap(map);
      }
    });
  }
  // Hide function
  function hide(category) {
    gMarkers.forEach( ( item ) => {
      if ( item.category == category ) {
        item.setMap(null);
      }
    });
  }

  // Checkbox Clicked
  mapBoxes.forEach((box) => {
    box.addEventListener('click', function(e){
      let category = box.getAttribute('id').replace('box', '');
      if ( e.target.checked !== true ){
        hide(category);
      } else {
        show(category);
      }
    });
  });

  function myclick(i) {
    google.maps.event.trigger(markers[i], "click");
  }
};
