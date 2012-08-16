exports.main = function() {
var bb = require("barbutton");
var data = require("self").data;
  
let barbutton = bb.BarButton({
	id: "ID",
	alwaysShowLabel: true,
	image: data.url("image.png"),
    panel:panel
    }
});
};