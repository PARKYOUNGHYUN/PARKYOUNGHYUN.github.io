function paintBackgroundImage() {
  const body = document.querySelector("body");
  const imageName = Math.floor(Math.random() * 10);

  body.style.backgroundImage = `url("img/background/${imageName}.jpg")`;
}

paintBackgroundImage();
setInterval(paintBackgroundImage, 5000);
