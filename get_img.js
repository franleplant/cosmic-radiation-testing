
// a cache of promises
var cache = {};

function get_img(url, alt, height, width) {

	if (  !cache[  url  ]  ) {
		cache[  url  ] = $.Deferred(function ( defer ) {

			var image = new Image();

			function cleanUp() {
       			image.onload = image.onerror = null;
    		};
    		defer.then( cleanUp, cleanUp );

    		image.onload = function () {
    			defer.resolve(image)
    		};

    		image.onerror = function () {
    			defer.reject();
    		};

    		image.src = url;
    		image.alt = alt;
    		image.height = height;
    		image.width = width;

		}).promise();		

	};

	return cache[url];

};


if( typeof module !== "undefined" && ('exports' in module)){
	module.exports	= get_img;
}