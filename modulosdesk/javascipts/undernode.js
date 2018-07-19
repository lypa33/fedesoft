((global, v)=>{


	var o = v();

	o.print("Log");
	o.version();

	document.undernode = "Undernode LLC";
	console.log(document.undernode);
	//console.log(o.print("Log"));
	//console.log(o.version());

})(window, function() {
	

	var Undernode = function(){};

	Undernode.prototype = {
		print: function(x){console.log(x);},
		version: function(){console.log("v1.0 (fedesoft coaching)")}
	};

	return new Undernode();

});