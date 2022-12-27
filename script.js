const TIME_DELAY = 200;

const keyAllElements = document.querySelectorAll(".key");
const renderedText = document.getElementById("rendered_text");

const spaceBarElement = document.querySelector(".space_bar");
const enterElement = document.querySelector(".enter");
const backspaceElement = document.querySelector(".backspace");

const tabElement = document.querySelector(".tab");
const capslockElement = document.querySelector(".capslock");
const rightShiftElement = document.querySelector(".right-shift");
const leftShiftElement = document.querySelector(".left-shift");

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "Space":
      applyClickEffect(spaceBarElement);
      renderedText.innerHTML = renderedText.innerHTML + " ";
      break;

    case "CapsLock":
      if (event.getModifierState("CapsLock")) {
        capslockElement.classList.add("pressed");
      } else {
        capslockElement.classList.remove("pressed");
      }
      break;

    case "ShiftLeft":
    case "ShiftRight":
      if (event.getModifierState("Shift") && event.code == "ShiftRight") {
        applyClickEffect(rightShiftElement);
      } else if (event.getModifierState("Shift") && event.code == "ShiftLeft") {
        applyClickEffect(leftShiftElement);
      }
      break;

    case "Enter":
      applyClickEffect(enterElement);
      renderedText.innerHTML = renderedText.innerHTML + "\n";
      break;

    case "Backspace":
      applyClickEffect(backspaceElement);
      renderedText.innerHTML = renderedText.innerHTML.slice(0, -1);
      break;

    case "Tab":
      applyClickEffect(tabElement);
      renderedText.innerHTML = renderedText.innerHTML + "\t";
      break;

    default:
      // for loop necessary to identify which key has been pressed
      // as the event listener is only attached to window object
      for (let i = 0; i < keyAllElements.length; i++) {
        if (keyAllElements[i].textContent === event.key) {
          applyClickEffect(keyAllElements[i]);
        }
      }
      renderedText.innerHTML = renderedText.innerHTML + event.key;
      break;
  }
});

/**
 * Adds "pressed" class to element and removes it later
 * This creates an effect of an button being clicked
 */
function applyClickEffect(element) {
  if (!element) {
    return;
  }

  element.classList.add("pressed");
  const callback = () => element.classList.remove("pressed");
  setTimeout(callback, TIME_DELAY);
}
