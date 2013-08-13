
var height = 300;
var width = 300;

$('img').each(function () {

	var old_img = this;
	var src = $(old_img).data("src");
	var alt = $(old_img).attr("alt");


	get_img(  src, alt, height, width).
		done( function (new_img) {

			$(old_img).replaceWith(  $(new_img).clone()  );

		}).
		fail( function () {
			$(old_img).attr("src", "img/error.png").
						attr("height", height).
						attr("width", width);
		});


});