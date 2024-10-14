let count = 1;

document.getElementById("carrossel-radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("carrossel-radio" + count).checked = true;
}