const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<p>Put HTML Here 
    <button type="button" id="remove-btn">Remove</button>
    ${input}</p>`
  );
  DOMSelectors.input.value = "";
});
