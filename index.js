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
    `<p id="idremove"><span>My name is ${name}. I am ${age} years old. My social security number is ${social}. I live at ${address}.
    <button type=button id="removebutton" class="remove">Remove</button></span>
    </p>`
  );

  let buttonremove = document.getElementById("removebutton");
  buttonremove.addEventListener("click", function removeCard(event) {
    const element = document.getElementById("idremove");
    element.remove();

    DOMSelectors.name.value = "";
    DOMSelectors.age.value = "";
    DOMSelectors.social.value = "";
    DOMSelectors.address.value = "";
  });
});

function green(background) {
  background.style.backgroundColor = "green";
}

DOMSelectors.button.addEventListener("click", function () {
  green(DOMSelectors.box);
});

function yellow(background) {
  background.style.backgroundColor = "yellow";
}

DOMSelectors.button.addEventListener("click", function () {
  yellow(DOMSelectors.button);
});

// function removebutton() {
//   const element = document.getElementById("idremove");
//   element.remove();
// }

// DOMSelectors.button.addEventListener("click", function () {
//   const element = document.getElementById("idremove");
//   idremove(idremove);
// });

//queryselectorall
//array forEach()
//add event listener
//event.target what did I click?

// const matches = document.querySelectorAll("idremove");

// const values = [
//   {
//     name: document.querySelector("name"),
//     age: "",
//     social: "",
//     address: "",
//   },
// ];
// console.log(values);

// console.log(matches);

// const removelist = document.getElementById("idbutton");
// const removespan = document.createElement("span");
// const removebutton = document.createElement("removebutton");

// removebutton.textContent = "Remove";

// removebutton.addEventListener("click", () => {
//   list.removeChild(removelist);
// });

// console.log(removelist);
// console.log(removespan);
// console.log(removebutton);
