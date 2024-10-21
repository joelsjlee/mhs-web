

    var map = L.map('map').setView([42.3601, -71.0589], 12);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(map);

const markers = L.markerClusterGroup();


   // Load GeoJSON data
   fetch("../../../data/jqa/geo/"+"1840-dateline-geojson.json")
   .then(response => {
       return response.json();
   })
   .then(data => {
       // Add markers to the cluster group from the GeoJSON data
       const geoJsonLayer = L.geoJSON(data, {
           pointToLayer: function (feature, latlng) {
               return L.marker(latlng);
           },
           onEachFeature: function (feature, layer) {
               if (feature.properties && feature.properties.link) {
                   layer.on('click', function () {
                       window.open(feature.properties.link, '_blank');
                   });
               }
           }
       });

       // Add the GeoJSON layer to the marker cluster group
       markers.addLayer(geoJsonLayer);

       // Add the marker cluster group to the map
       map.addLayer(markers);
   })

