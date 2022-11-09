const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
  remove: document.getElementById("remove"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p>My name is 
    ${input}
    <button type="button" id="remove">Remove</button>
    </p>`
  );
  DOMSelectors.input.value = "";
});

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
