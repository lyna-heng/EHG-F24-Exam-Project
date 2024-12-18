        // Initialize the map and set view to desired coordinates and zoom
        var map = L.map('map').setView([56.250459511380086, 9.836237133018939], 15); // Coordinates [lat, lon], Zoom level

        // Add a tile layer (OpenStreetMap tiles as default)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);