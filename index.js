var slideimg = document.getElementById("slideimg");

var image = new Array(
    "image/img1.jpg",
    "image/img3.jpg",
    "image/img4.jpg",
    "image/img2.jpg"
);

var len = image.length;
var i = 0;

function slider() {
    if (i > len - 1) {
        i = 0;

    }
    slideimg.src = image[i];
    i++;
    setTimeout('slider()', 3000);
}



