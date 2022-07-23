var SINGAPORECOORDINATES = [1.352083, 103.819836];
var USCOORDINATES = [37.09024, -95.712891];
var TAIWANCOORDINATES = [23.69781, 120.960515];
var JAPANCOORDINATES = [36.204824, 138.252924];
var MALAYSIACOORDINATES = [4.210484, 101.975766];

var mymap = L.map("map", {
  worldCopyJump: true,
  minZoom: 1.5,
  maxBounds: [
    //south west
    [-200, -200],
    //north east
    [200, 200],
  ],
  maxBoundsViscosity: 1.0,
}).setView([45, 10], 2);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,

    // this map option disables world wrapping. by default, it is false.
    continuousWorld: false,

    accessToken:
      "pk.eyJ1Ijoid2FkMnByb2plY3QiLCJhIjoiY2t2Z3lyaXdvNHV3MTJwbXMxZ2R2eGw3NSJ9.Na27hF4TgK_PtBxdmSYMnw", //adam's token
  }
).addTo(mymap);

var BottleIcon = L.icon({
  iconUrl: "../resources/pip.gif",
  shadowUrl: "",

  iconSize: [70, 45], // size of the icon
  shadowSize: [0, 0], // size of the shadow
  iconAnchor: [35, 18], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [0, -10], // point from which the popup should open relative to the iconAnchor
});

function addMarker(coordinates, header, description) {
  var marker = L.marker(coordinates, { icon: BottleIcon }).addTo(mymap);
  marker.bindPopup(`<b>${header}</b><br>${description}`).openPopup();
}

addMarker(USCOORDINATES, "Joe", "United States");
addMarker(TAIWANCOORDINATES, "周杰伦 Jay Chou", "Taiwan");
addMarker(JAPANCOORDINATES, "Piplup", "Japan");
addMarker(MALAYSIACOORDINATES, "Namewee", "Malaysia");
addMarker(SINGAPORECOORDINATES, "林俊杰 JJ Lin", "Singapore");

//click coordinates
/**
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
mymap.on('click', onMapClick);
*/
