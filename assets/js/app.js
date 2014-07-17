

function loopingThroughJavaScriptObjects () {

	"use strict";

	var info = {
		"full_name" : "Jeff Cummings", 
		"title" : "Web Developer", 
		"links" : {
			"main_website" : "http://www.sound-decisions.ca" , 
			"tsdn" : "http://www.the-sound-decisions-network.com" , 
			"my_movie_collection" : "http://www.my-movie-collection.com" , 
			"i_want_to_be_a_loser" : "http://www.iwanttobealoser.com"
		}
	};

	var output = "";

	for (key in info.links) {
		if (info.links.hasOwnProperty(key)) {
			output += '<li><a href="' + info.links[key] + '">' + key + '</a></li>';
		} // If the links has the key property. 
	} // for... go through each link.

	var update = document.getElementById('links');
	update.innerHTML = output;

	var name_value = document.getElementById('name_value');
	name_value.innerHTML = info.full_name;    

	var title_value = document.getElementById('title_value');
	title_value.innerHTML = info.title; 

} // end of - function loopingThroughJavaScriptObjects

// Call the function.
//loopingThroughJavaScriptObjects();




function accessObjectsInArrays () {

	"use strict";

	var info = {
		"full_name" : "Jeff Cummings", 
		"title" : "Web Developer", 
		"links" : [
			{ "main_website" : "http://www.sound-decisions.ca" }, 
			{ "tsdn" : "http://www.the-sound-decisions-network.com" }, 
			{ "my_movie_collection" : "http://www.my-movie-collection.com" }, 
			{ "i_want_to_be_a_loser" : "http://www.iwanttobealoser.com" }
		]
	};

	var output = "";

	for (var i = 0;  i <= info.links.length; i++) {
		for (key in info.links[i]) {
			if (info.links[i].hasOwnProperty(key)) {
				output += '<li><a href="' + info.links[i][key] + '">' + key + '</a></li>';
			} // hasOwnProperty check.
		} // for each object.
	}; // for each array element.

	var update = document.getElementById('links');
	update.innerHTML = output;

	var name_value = document.getElementById('name_value');
	name_value.innerHTML = info.full_name;

	var title_value = document.getElementById('title_value');
	title_value.innerHTML = info.title; 

} // end of - function accessObjectsInArrays

// Call the function.
//accessObjectsInArrays(); 





function getAndDisplayJSONDataUsingAjax() {

	var request;

	// Create the Request variable.
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new AcitveXObject("Microsoft.XMLHTTP");
	}

	// From Local Server.
	request.open('GET', 'assets/api/data.json', true);

	request.onreadystatechange = function() {

		if ((request.status === 200) && (request.readyState === 4)) {

			var info = JSON.parse(request.responseText);


			var company_value = document.getElementById('company_value');
			company_value.innerHTML = info.company;

			var name_value = document.getElementById('name_value');
			name_value.innerHTML = info.full_name;    

			var title_value = document.getElementById('title_value');
			title_value.innerHTML = info.title; 

			var items_title_value = document.getElementById('items_title_value');
			items_title_value.innerHTML = info.items_title;					

			var output = '';

			for (var i = 0; i <= info.items.length - 1; i++) {
    			for (key in info.items[i]) {
    				if (info.items[i].hasOwnProperty(key)) {
    					output += '<li><a href="' + info.items[i][key] + '">' + key + '</a></li>';
    				}
    			} // end of - for - link values.
			} // end of - for - array.

    		var update = document.getElementById('items');
    		update.innerHTML = output;

		} // end of - ready.;

	} // end of - event.

	// Sent the request to the server.
	request.send();

} // end of - function getAndDisplayJSONDataUsingAjax.

// Call the function.
//getAndDisplayJSONDataUsingAjax();






// Load data from Sound Decisions Server.
// Uses JSONP.
function dataHandler(info) {

	var company_value = document.getElementById('company_value');
	company_value.innerHTML = info.company;

	var name_value = document.getElementById('name_value');
	name_value.innerHTML = info.full_name;    

	var title_value = document.getElementById('title_value');
	title_value.innerHTML = info.title; 

	var items_title_value = document.getElementById('items_title_value');
	items_title_value.innerHTML = info.items_title;		

	var output = '';

	for (var i = 0; i <= info.items.length - 1; i++) {
		for (key in info.items[i]) {
			if (info.items[i].hasOwnProperty(key)) {
				output += '<li><a href="' + info.items[i][key] + '">' + key + '</a></li>';
			}
		} // end of - for - link values.
	} // end of - for - array.

	var update = document.getElementById('items');
	update.innerHTML = output;	

} // end of - function dataHandler




/** jQuery Code Starts
	***********************************************************
*/

$(document).ready(function() {



	function getAndDisplayJSONDataUsingjQueryAjax() {

		$.getJSON('assets/api/data.json', function(info) {
		//$.getJSON('http://www.sound-decisions.ca/api/data.json', function(info) {

			var company_value = document.getElementById('company_value');
			company_value.innerHTML = info.company;

			var name_value = document.getElementById('name_value');
			name_value.innerHTML = info.full_name;    

			var title_value = document.getElementById('title_value');
			title_value.innerHTML = info.title; 

			var items_title_value = document.getElementById('items_title_value');
			items_title_value.innerHTML = info.items_title;					

			var output = '';

			for (var i = 0; i <= info.items.length - 1; i++) {
				for (key in info.items[i]) {
					if (info.items[i].hasOwnProperty(key)) {
						output += '<li><a href="' + info.items[i][key] + '">' + key + '</a></li>';
					}
				} // end of - for - link values.
			} // end of - for - array.

			var update = document.getElementById('items');
			update.innerHTML = output;

		}); // end of - getJSON


	} // end of - function getAndDisplayJSONDataUsingjQueryAjax.

	// Call the function.
	getAndDisplayJSONDataUsingjQueryAjax();



}); // end of - ready.