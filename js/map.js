var exp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
var regexp = new RegExp(exp);

var eventsList = document.querySelector('.event-list')

var map = L.map('map').setView([41.3282,19.8158], 14.3);
L.tileLayer.provider('CartoDB.Positron').addTo(map);

var GreenIcon = L.icon({
  iconUrl: 'img/map-icon.svg',
  iconRetinaUrl: 'img/favicon.png',
  iconSize: [28, 28]
});

var eventsLayer = omnivore.geojson('buildings.geojson')
.on('ready', function() {
  map.fitBounds(eventsLayer.getBounds());

  // After the 'ready' event fires, the GeoJSON contents are accessible
  // and you can iterate through layers to bind custom popups.
  eventsLayer.eachLayer(function(layer) {
  // See the `.bindPopup` documentation for full details. This
  // dataset has a property called `name`: your dataset might not,
  // so inspect it and customize to taste.
    if (layer instanceof L.Marker) {
      layer.setIcon(GreenIcon);
    }

    var title = layer.feature.properties.name;
    var description = layer.feature.properties.description;
    var image =  layer.feature.properties.image;
    var large = layer.feature.properties.large;
    var linked = layer.feature.properties.linked;
    var link = linked.match(regexp) ? linked.match(regexp)[0] : undefined;
    linked = linked.replace(link, '');

    if (linked === '' && link !== undefined) {
      description = 'Link';
    }

    var eventListItemContent = '';

    if (link) {
        eventListItemContent = `<h3>${title}</h3><p><a href="${large}"><img src=${image} width="300px"/></a></p>`;
    } else if (description) {
      eventListItemContent = `<h3>${title}</h3><div><a href="${large}"><img src=${image} width="300px"/></a></div>`;
    } else if(image){
      eventListItemContent = `<h3>${title}</h3><div><a href="${large}"><img src=${image} width="300px"/></a></div>`;
    }
      else{
          eventListItemContent = `<h3>${title}</h3><div>`;
      }

    layer.bindPopup(eventListItemContent);

    var eventsListItemContent = '';

    if (link) {
        eventsListItemContent = `<h3>${title}</h3><p class="event-description">${description}<br><a href="${link}" target="_blank">${linked}</a></p>`;
    } else if (description) {
      eventsListItemContent = `<h3>${title}</h3><p class="event-description">${description}</p>`;
    } else if(image){
      eventsListItemContent = `<h3>${title}</h3>`;
    }
      else{
          eventsListItemContent = `<h3>${title}</h3>`;
      }

    var eventsListItem = document.createElement('div');
    eventsListItem.className = "event-item";
    eventsListItem.innerHTML = eventsListItemContent;
    eventsList.appendChild(eventsListItem);
  });
})
.addTo(map);

var CartoDB= L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/{variant}/{z}/{x}/{y}{r}.png', {
attribution: '{attribution.OpenStreetMap} &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 21,
variant: 'light_all'
});

var mq = window.matchMedia('screen and (max-width: 1080px) and (min-resolution: 3dppx), screen and (max-width: 960px)');
if(mq.matches) {
console.log('small device => map zoomable now');
} else {
// disable scroll zoom
map.scrollWheelZoom.disable();
}
