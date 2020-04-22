const renderImage = () => {
    var imageId = 0;
    const imageArray = ["la.jpg", "chicago.jpg", "ny.jpg"];

    setInterval(() => {
        buildImgElement = (imageId < imageArray.length)
            ? "<img class=\"carousal_img\" src= \"./images/" + imageArray[imageId++] + "\" />"
            : "<img class=\"carousal_img\" src= \"./images/" + imageArray[0] + "\" />";

        if (imageId == imageArray.length) {
            imageId = 0;
        }

        var x = document.getElementById("imgHolder").innerHTML = buildImgElement;
        console.log(x);
    }, 3000);

}