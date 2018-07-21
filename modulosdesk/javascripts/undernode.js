((global, v)=>{


	var o = v();

	o.print("Modulos Desk - git clone https://www.modulosdesk.com/");
	o.version();

	//document.undernode = "Undernode LLC";
	//console.log(document.undernode);

})(window, function() {
	

	var Undernode = function(){};

	Undernode.prototype = {
		print: function(x){console.log(x);},
		version: function(){console.log("v1.0 (fedesoft coaching)")}
	};

	return new Undernode();

});