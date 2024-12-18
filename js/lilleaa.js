        // Initialize the map and set view to desired coordinates and zoom
        var map = L.map('map').setView([56.35143583928305, 9.926251941945726], 14); // Coordinates [lat, lon], Zoom level

        // Add a tile layer (OpenStreetMap tiles as default)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
