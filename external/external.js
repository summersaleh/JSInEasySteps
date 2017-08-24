function init() {
	document.getElementById('panel').innerHTML = "Hello..from an external JavaScript file!";

	window.alert('Document Loaded!');
}

window.onload = init;