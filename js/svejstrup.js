        // Initialize the map and set view to desired coordinates and zoom
        var map = L.map('map').setView([56.34575275817875, 9.971802488023581], 16); // Coordinates [lat, lon], Zoom level

        // Add a tile layer (OpenStreetMap tiles as default)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
