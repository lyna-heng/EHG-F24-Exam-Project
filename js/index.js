        // Initialize the map and set view to desired coordinates and zoom
        var map = L.map('map').setView([56.330628437333694, 9.890469815586842], 10); // Coordinates [lat, lon], Zoom level

        // Add a tile layer (OpenStreetMap tiles as default)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Add Svejstrup
        var marker1 = L.marker([56.351652, 9.926592]).addTo(map);
        marker1.bindPopup("<b>Lilleå</b><br>This is a peaceful fishing spot.").openPopup();

        // Svejstrup marker
        var marker2 = L.marker([56.345191, 9.971036]).addTo(map);
        marker2.bindPopup("<b>Svejstrup Fishing Park</b><br>Great for family fishing.");

        //Vadsted marker
        var marker3 = L.marker([56.250869, 9.836164]).addTo(map);
        marker3.bindPopup("<b>Vadsted Storsø</b><br>Enjoy calm lake fishing here.");


        // Optional: Add a custom icon for markers
        var customIcon = L.icon({
            iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
            shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
            iconSize: [38, 95], // Size of the icon
            shadowSize: [50, 64], // Size of the shadow
            iconAnchor: [22, 94], // Point of the icon that corresponds to the marker's location
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76] // Point from which the popup should open
        });
