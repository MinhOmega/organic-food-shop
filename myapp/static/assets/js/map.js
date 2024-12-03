function initialize() {
	if (typeof google === 'undefined') {
		console.warn('Google Maps API not loaded');
		return;
	}

	var myCenter = new google.maps.LatLng(23.00019752293718, 72.65583701428193);

	var mapProp = {
		center: myCenter,
		scrollwheel: false,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var mapElement = document.getElementById("contact-map");
	if (!mapElement) return;
	
	var map = new google.maps.Map(mapElement, mapProp);
	var marker = new google.maps.Marker({
		position: myCenter,
		map: map,
	});

	var styles = [{
			"stylers": [{
					"hue": "#baf4c4"
				},
				{
					"saturation": 10
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [{
				"color": "#effefd"
			}]
		},
		{
			"featureType": "all",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "administrative",
			"elementType": "labels",
			"stylers": [{
				"visibility": "on"
			}]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}
	];


	map.setOptions({
		styles: styles
	});
	marker.setMap(map);
}

if (typeof google !== 'undefined') {
	google.maps.event.addDomListener(window, 'load', initialize);
}