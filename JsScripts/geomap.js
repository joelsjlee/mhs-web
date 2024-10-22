
const files = ["1840-dateline-geojson.json", "1841-dateline-geojson.json", "1842-dateline-geojson.json",
    "1843-dateline-geojson.json", "1844-dateline-geojson.json", "1845-dateline-geojson.json", "1846-dateline-geojson.json",
    "1847-dateline-geojson.json", "1848-dateline-geojson.json"
];

// Makes map and sets it to Boston (.setView([long, lat], zoom))
var map = L.map('map').setView([42.3601, -71.0589], 12);

// Sets background image for map and attribution. There are probably some cool directions we can go with this 
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
}).addTo(map);

// The marker cluster group (all markers are one cluster)
const markers = L.markerClusterGroup();

// Keeps track of info to be used later for legend 
const removedMarkers = {};
const legendData = [];

// Each file is 
files.forEach((file, index) => {

    // Assuming first 4 chars in a file name are the year 
    const year = file.substring(0, 4);

    // To avoid needing custom icons, I just adjust the hue for each year. Added benefit that it allows users to interpret how far apart two icons are 
    const hueRotation = index * 30;

    // ALlows the legend to have the info needed (year and the amount to adjust the icon hue by)
    legendData.push({ year, hueRotation });

    // Fetches the data 
    fetch("../../../data/jqa/geo/" + file)
        .then(response => {
            return response.json();
        })

        // Operates on it 
        .then(data => {

            // Add markers to the cluster group from the GeoJSON data
            const geoJsonLayer = L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    const marker = L.marker(latlng);

                    // Changes color by adjusting hue by the amount specified above 
                    marker.on('add', function () {
                        marker._icon.style.filter = `hue-rotate(${hueRotation}deg)`;
                    });


                    // Adds popup with the full date 
                    marker.bindTooltip(feature.properties.date, {
                        permanent: false,
                        direction: "top"
                    });

                    return marker;
                },

                // Click event, opens the pge on the primary source co-op website 
                onEachFeature: function (feature, layer) {
                    if (feature.properties && feature.properties.link) {
                        layer.on('click', function () {
                            window.open(feature.properties.link, '_blank');
                        });
                    }
                }
            });

            // Each file is a "layer", adds this layer to the cluster group 
            markers.addLayer(geoJsonLayer);

            // Add the marker cluster group to the map
            map.addLayer(markers);
        })


});

createLegend(legendData);

function createLegend(legendData) {
    // Keeps the legend in the bottom right 
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        // Sets up the div and gives it the title of legend 
        const div = L.DomUtil.create('div', 'legend');
        div.innerHTML = '<h4>Legend</h4>';

        legendData.forEach(item => {
            const legendItem = L.DomUtil.create('div', 'legend-item', div);

            // image is sourced from leaflet.. the hue filter is appled based off the legend dict
            legendItem.innerHTML = `
                <img src="https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png" 
                     style="filter: hue-rotate(${item.hueRotation}deg);">
                <span>${item.year}</span>
            `;

            // toggles markers on click 
            legendItem.addEventListener('click', () => toggleMarkersByYear(item.year, legendItem));
        });
        return div;
    };
    legend.addTo(map);
}

function hideMarkersByYear(targetYear) {

    // If markers for the year are not already stored, make a space for them 
    if (!removedMarkers[targetYear]) {
        removedMarkers[targetYear] = [];
    }

    // Iterate through all markers in the cluster group
    markers.eachLayer(function (layer) {

        // extracts the year of each marker from its data 
        const markerYear = layer.feature.properties.date.substring(0, 4);

        // If the marker's year matches the target year remove it and store the value for later 
        if (markerYear === targetYear) {
            removedMarkers[targetYear].push(layer); // store

            markers.removeLayer(layer); // Remove
        }

    });

    // Refresh clusters to update count
    markers.refreshClusters();
}

function showMarkersByYear(targetYear) {
    // Check if there are removed markers for the target year

    removedMarkers[targetYear].forEach(marker => {
        markers.addLayer(marker); // Re-add marker to the cluster group
    });

    // Clear the stored markers for the year since they are restored
    delete removedMarkers[targetYear];


    // Refresh clusters to update count
    markers.refreshClusters();

}

function updateLegendItemStyle(legendItem, isHidden) {
    if (isHidden) {
        legendItem.classList.add('filtered-out'); //hide 
    } else {
        legendItem.classList.remove('filtered-out'); // unhide
    }
}

function toggleMarkersByYear(targetYear, legendItem) {

    if (removedMarkers[targetYear] && removedMarkers[targetYear].length > 0) {
        // If markers are hidden, show them and their legend entry
        showMarkersByYear(targetYear);
        updateLegendItemStyle(legendItem, false);
    } else {
        // If markers are shown, hide them  and their legend entry
        hideMarkersByYear(targetYear);
        updateLegendItemStyle(legendItem, true);
    }
}


