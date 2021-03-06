var positionESI = new google.maps.LatLng(36.706188, 3.172063);
var positionBab_Ezzouar = new google.maps.LatLng(36.716846, 3.182178);
var positionBouraoui = new google.maps.LatLng(36.717362, 3.154626);
var positionKouba = new google.maps.LatLng(36.725556, 3.082674);
var positionDeli_Ibrahim = new google.maps.LatLng(36.749492, 2.983282);
var map;
var markerESI;
var marker_bouraoui;
var marker_Bab_Ezzouar;
var marker_Kouba;
var marker_Deli_Ibrahim;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var lat;
var lng;

var infowindow = new google.maps.InfoWindow({
	content : '',
	maxWidth : 400,
	maxHeight : 400
});

function myPositionActivate() {
	var v = document.getElementById('position');
	var box = document.getElementById('check_position');
	if (box.checked)
		v.style.visibility = "hidden";
	else
		v.style.visibility = "visible";

}

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer({

	});

	var mapOptions = {
		center : positionKouba,
		zoom : 13
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	directionsDisplay.setMap(map);

	markerESI = new google.maps.Marker({
		map : map,
		animation : google.maps.Animation.DROP,
		title : "Ecole National superieure d'informatique",
		infos : '<div style="width:200px; height:100px id="content">' + '<h1 id="firstHeading" class="firstHeading">Cours</h1>' + '<p><h4>Analyse des données </h4><h4>BDD avancées </h4><h4>Systemes AD </h4></p>' + '</div>' + '</div>',
		position : positionESI
	});

	marker_bouraoui = new google.maps.Marker({
		map : map,
		animation : google.maps.Animation.DROP,
		infos : '<div style="width:200px; height:100px id="content">' + '<h1 id="firstHeading" class="firstHeading">Cours</h1>' + '<p><h4>Developpement WEB </h4><h4>Management des changements </h4></p>' + '</div>' + '</div>',
		title : "Cité universitaire Bouraoui Ammar",
		position : positionBouraoui
	});

	marker_Bab_Ezzouar = new google.maps.Marker({
		map : map,
		animation : google.maps.Animation.DROP,
		title : "Bab Ezzouar",
		infos : '<div style="width:200px; height:100px id="content">' + '<h1 id="firstHeading" class="firstHeading">Cours</h1>' + '<p><h4>Management des changements </h4><h4>Systemes AD </h4><h4>BDD avancées </h4><h4>Analyse des données </h4></p>' + '</div>' + '</div>',
		position : positionBab_Ezzouar

	});

	marker_Kouba = new google.maps.Marker({
		map : map,
		animation : google.maps.Animation.DROP,
		title : "Kouba",
		infos : '<div style="width:200px; height:100px id="content">' + '<h1 id="firstHeading" class="firstHeading">Cours</h1>' + '<p><h4>Systemes AD </h4><h4>Analyse des données </h4><h4>Management des changements </h4></p>' + '</div>' + '</div>',
		position : positionKouba
	});

	marker_Deli_Ibrahim = new google.maps.Marker({
		map : map,
		animation : google.maps.Animation.DROP,
		title : "Deli Ibrahim",
		infos : '<div style="width:200px; height:100px id="content">' + '<h1 id="firstHeading" class="firstHeading">Cours</h1>' + '<p><h4>Systemes AD </h4><h4>BDD avancées </h4><h4>Management des changements </h4><h4>Analyse des données </h4></p>' + '</div>' + '</div>',
		position : positionDeli_Ibrahim

	});

	google.maps.event.addListener(markerESI, 'click', function() {
		infowindow.content = markerESI.infos;
		infowindow.open(map, markerESI);
	});
	google.maps.event.addListener(marker_bouraoui, 'click', function() {
		infowindow.content = marker_bouraoui.infos;
		infowindow.open(map, marker_bouraoui);
	});
	google.maps.event.addListener(marker_Bab_Ezzouar, 'click', function() {
		infowindow.content = marker_Bab_Ezzouar.infos;
		infowindow.open(map, marker_Bab_Ezzouar);
	});
	google.maps.event.addListener(marker_Kouba, 'click', function() {
		infowindow.content = marker_Kouba.infos;
		infowindow.open(map, marker_Kouba);
	});
	google.maps.event.addListener(marker_Deli_Ibrahim, 'click', function() {
		infowindow.content = marker_Deli_Ibrahim.infos;
		infowindow.open(map, marker_Deli_Ibrahim);
	});

}

function distance(longit1, latit1, longit2, latit2) {
	return Math.acos(Math.sin(Math.toRadians(longit1)) * Math.sin(Math.toRadians(longit2)) + Math.cos(Math.toRadians(longit1)) * Math.cos(Math.toRadians(longit2)) * Math.cos(Math.toRadians(latit1 - latit2))) * 6371;
}

function afficherRoute(lat, lng) {
	var position = new google.maps.LatLng(lat, lng);
	//map.setCenter(position);
	/*****************************************************************/

	//	var image = 'images/beachFlag.png';
	var marker = new google.maps.Marker({
		map : map,
		animation : google.maps.Animation.DROP,
		title : "",
		//		icon : image,

		position : position
	});

	google.maps.event.addListener(marker, 'click', function() {

		infowindow.content = '<div style="width:200px; height:60px">' + '<h3>Ma position</h3>' + '</div>';
		infowindow.open(map, marker);
	});

	/*************************/
	var plusPetiteDistance;
	var lng1;
	var lat1;
	plusPetiteDistance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(lat, lng), new google.maps.LatLng(36.706188, 3.172063));
	lng1 = 3.172063;
	lat1 = 36.706188;
	var dist2 = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(lat, lng), new google.maps.LatLng(36.716846, 3.182178));
	var dist3 = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(lat, lng), new google.maps.LatLng(36.717362, 3.154626));
	var dist4 = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(lat, lng), new google.maps.LatLng(36.725556, 3.082674));
	var dist5 = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(lat, lng), new google.maps.LatLng(36.749492, 2.983282));

	if (plusPetiteDistance > dist2) {
		plusPetiteDistance = dist2;
		lng1 = 3.182178;
		lat1 = 36.716846;
	}
	if (plusPetiteDistance > dist3) {
		plusPetiteDistance = dist3;
		lng1 = 3.154626;
		lat1 = 36.717362;
	}
	if (plusPetiteDistance > dist4) {
		plusPetiteDistance = dist4;
		lng1 = 3.082674;
		lat1 = 36.725556;
	}
	if (plusPetiteDistance > dist5) {
		plusPetiteDistance = dist5;
		lng1 = 2.983282;
		lat1 = 36.749492;
	}
	/*************************/
	var request = {
		origin : position,
		destination : new google.maps.LatLng(lat1, lng1),

		travelMode : google.maps.TravelMode.DRIVING
	};
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			//	directionsDisplay.setDirections(response);
			directionsDisplay.setOptions({
				suppressMarkers : true,
				//suppressInfoWindows : true
			});

			directionsDisplay.setDirections(response);
		}
	});
}

function calcRoute() {

	/*****************************************************************/
	var box = document.getElementById('check_position');
	if (box.checked) {

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				lat = position.coords.latitude;
				lng = position.coords.longitude;
				afficherRoute(lat, lng);

			});
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	} else {
		lat = document.getElementById("latitude").value;
		lng = document.getElementById("longitude").value;
		afficherRoute(lat, lng);
	}

}

google.maps.event.addDomListener(window, 'load', initialize);

