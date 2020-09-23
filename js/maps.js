"use strict"
var world_map;//let theMarker = 'null',myLocation;

function map_initializer(){
		//console.log(L);//if(L.map != 'undefined'){console.log('already exists')}else{console.log('newly created')};
	// initialize Leaflet
	world_map = L.map('world_map').setView({lon: 32.54700064661847, lat: 0.3350024208544684},12);//: 0.3350024208544684,32.54700064661847
	//console.log(world_map);//	console.log(world_map.map);
	// add the OpenStreetMap tiles
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
	}).addTo(world_map);
	// show the scale bar on the lower left corner
	L.control.scale().addTo(world_map);
	//L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);	
}
//map_initializer();//this function is called after the map option is clicked in the main menu