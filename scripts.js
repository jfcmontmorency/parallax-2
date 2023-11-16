window.addEventListener("scroll", function () {
//   window.requestAnimationFrame(function () {
    let top = this.scrollY;

    let layers = document.getElementsByClassName("parallax");
    let layer, speed, yPos;

    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute("data-speed");
      let yPos = Math.round(top * speed / -100);
      layer.setAttribute("style", "transform: translateY(" + yPos + "px)");
    }
//   });
});
