const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  name: document.querySelector(`#name`),
  age: document.querySelector(`#age`),
  social: document.querySelector(`#social`),
  address: document.querySelector(`#address`),
  remove: document.getElementById("#remove"),
};

DOMSelectors.button.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  let age = DOMSelectors.age.value;
  let social = DOMSelectors.social.value;
  let address = DOMSelectors.address.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p>My name is 
    ${name}. I am ${age} years old. My social security number is ${social}. I live at ${address}.
    <button type="button" id="remove">Remove</button>
    </p>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.age.value = "";
  DOMSelectors.social.value = "";
  DOMSelectors.address.value = "";
});

function change() {
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textContent = `Hello I am point ${pointIndex}`;
    });
  });
}

function blue(background, text) {
  background.style.backgroundColor = "blue";
}

DOMSelectors.button.addEventListener("click", function () {
  blue(DOMSelectors.button, DOMSelectors.text);
});

function red(background, text) {
  background.style.backgroundColor = "red";
}

DOMSelectors.button.addEventListener("click", function () {
  red(DOMSelectors.box, DOMSelectors.text);
});

console.log(red);
