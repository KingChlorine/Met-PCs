// index.html specific
const signButton = document.getElementById("sign");
if (signButton) {
  signButton.addEventListener("click", () => {
    alert("Button clicked!");
  });
}

const myImage = document.querySelector("#imageid");
function FirstImage() {
  if (myImage) myImage.src = "images/setup1.jpg";
}
function SecondImage() {
  if (myImage) myImage.src = "images/setup3.avif";
}

const buttonRight = document.getElementById('slideR');
if (buttonRight) {
  buttonRight.onclick = () => {
    document.getElementById('new').scrollLeft += 100;
  };
}

const buttonLeft = document.getElementById('slideL');
if (buttonLeft) {
  buttonLeft.onclick = () => {
    document.getElementById('new').scrollLeft -= 100;
  };
}

// products.html specific
const cartButton = document.querySelector('.cartButton');
if (cartButton) {
  cartButton.addEventListener('click', () => {
    document.body.classList.toggle('showCart');
  });
}

const closeButton = document.querySelector('.closeButton');
if (closeButton) {
  closeButton.addEventListener('click', () => {
    document.body.classList.toggle('showCart');
  });
}