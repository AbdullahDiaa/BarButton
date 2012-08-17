exports.main = function() {
	var bb = require("barbutton");
	var data = require("self").data;
	
	// create the panel
	var panel = require("panel").Panel({
		width: 180,
		height: 180,
		contentURL: "https://en.wikipedia.org/w/index.php?title=Jetpack&useformat=mobile"
	});
	
	// create the barButton with "id , image and Panel"
	let barbutton = bb.BarButton({
		id: "firefox-barbutton",
		image: data.url("image.png"),
		panel:panel
	});
	
	// hide the barbutton
	barbutton.collapsed(true);
	
	// show the barbutton
	barbutton.collapsed(false);
	
	// set Image of the barButton
	barbutton.setImage(data.url("image.png"));
};