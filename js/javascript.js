$(".thumbimg").click(function(event) {
	if (this.width < 200) {
		$(this).animate({width: "200px", height: "200px"}, 500, "easeInOutQuint")
	} else {
		// will happen any time the width is NOT less than 200
		$(this).animate({width: "100px", height: "100px"}, 500, "easeInOutQuint")
	}
});

$(document).ready(function() {
	setInterval(changeImage,2000)
});

var imageNumber = 2;

function changeImage() {
	if (imageNumber == 1) {
		$("#bgimage").attr('src', 'img/background_1.jpg');
		imageNumber = 2;
	} else {
		$("#bgimage").attr('src', 'img/background_2.gif');
		imageNumber = 1;
	}
}


// $(document).ready(function() {
// 	setInterval(changeImage,2000);

// });

// var imageNumber = 1;

// function changeImage() {
// 	if (imageNumber == 0) {
// 		$("#bgimage").attr('src', 'img/background_1.jpg');
// 		imageNumber = 1;
// 	} else {
// 		$("#bgimage").attr('src', 'img/background_2.jpg');
// 		imageNumber = 0;
// 		setTimeout("changeImage",2000);
// 	}
// }

// $("")
// $(document).ready(function() {
// 	$("#loader").css({
// 		property1: 'value1',
// 		property2: 'value2'
// 	});
// });