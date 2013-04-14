// Saves options to localStorage.
function save_options() {
	var filterKeywords = document.getElementById("keywords");
	chrome.storage.sync.set({'craigslistFilterKeywords': filterKeywords.value}, function() {
  // localStorage["craigslistFilterKeywords"] = filterKeywords.value;

   // Update status to let user know options were saved.
		var status = document.getElementById("status");
		status.innerHTML = "Options Saved.";
		setTimeout(function() {
		status.innerHTML = "";
		}, 750);
	});
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  chrome.storage.sync.get('craigslistFilterKeywords', function(object) {
  	
 	if (!object)
    	keywords = "";
 	else
 		keywords = object.craigslistFilterKeywords;
 

	var filterKeywords = document.getElementById("keywords");
  	filterKeywords.value = keywords;


	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);