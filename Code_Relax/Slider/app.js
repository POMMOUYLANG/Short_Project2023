const inputSlider = document.querySelector("input");
const inputValue = document.querySelector(".value");

const myFunction = () => {
  let value = inputSlider.value;
  inputValue.style.left = value + "%";
  inputValue.innerText = value + "%";
};

inputSlider.oninput = myFunction;
