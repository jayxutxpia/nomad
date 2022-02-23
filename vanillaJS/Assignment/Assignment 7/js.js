///////////////////////////////////////////////////////////////////////////

// Select Elements

const formGenerate = document.querySelector("#form-generate");
const inputGenerate = document.querySelector("#form-generate input");

const formGuess = document.querySelector("#form-guess");
const inputGuess = document.querySelector("#form-guess input");

const setNumber = document.querySelector("#set-number");
const resetNumber = document.querySelector("#alert-reset");
const higherValue = document.querySelector("#alert-higher");

const result = document.querySelector("#result");
const warning = document.querySelector("#alert-warning");

const restart = document.querySelector("#restart");

///////////////////////////////////////////////////////////////////////////

// Create Variable

const ADD_CLASS_HIDDEN = "hidden";
const LOCAL_NUMBER = "number";

///////////////////////////////////////////////////////////////////////////

// Create Fuctions

// Number Generator function
function onNumberGenerate(event) {
  event.preventDefault();
  let generateValue = inputGenerate.value;
  if (generateValue < 0) {
    warning.classList.add(ADD_CLASS_HIDDEN);
    resetNumber.classList.remove(ADD_CLASS_HIDDEN);
    higherValue.classList.add(ADD_CLASS_HIDDEN);
  } else if (generateValue == "") {
    warning.classList.remove(ADD_CLASS_HIDDEN);
    resetNumber.classList.add(ADD_CLASS_HIDDEN);
    higherValue.classList.add(ADD_CLASS_HIDDEN);
  } else if (generateValue == 0) {
    warning.classList.add(ADD_CLASS_HIDDEN);
    resetNumber.classList.add(ADD_CLASS_HIDDEN);
    higherValue.classList.remove(ADD_CLASS_HIDDEN);
  } else {
    warning.classList.add(ADD_CLASS_HIDDEN);
    resetNumber.classList.add(ADD_CLASS_HIDDEN);
    higherValue.classList.add(ADD_CLASS_HIDDEN);
    setNumber.innerText = `0 ~ ${generateValue}`;
  }
}

// User's Guess function
function onSubmitGuess(event) {
  event.preventDefault();
  let randomNum = Math.floor(Math.random() * inputGenerate.value + 1);
  if (randomNum == inputGuess.value) {
    result.classList.remove(ADD_CLASS_HIDDEN);
    result.innerText = `🎲 Your choice: ${inputGuess.value}\n🖥️ Computer's choice: ${randomNum}\n\n🎉 You win!`;
  } else {
    result.classList.remove(ADD_CLASS_HIDDEN);
    result.innerText = `🎲 Your choice: ${inputGuess.value}\n🖥️ Computer's choice: ${randomNum}\n\n💣 You lose!`;
  }
}

function innit() {
  setNumber.innerText = "0 ~ ?";
  inputGenerate.value = "";
  inputGuess.value = "";
  warning.classList.add(ADD_CLASS_HIDDEN);
  resetNumber.classList.add(ADD_CLASS_HIDDEN);
  result.classList.add(ADD_CLASS_HIDDEN);
}

///////////////////////////////////////////////////////////////////////////

// Restart the game when refresh
innit();

///////////////////////////////////////////////////////////////////////////

// Events

formGenerate.addEventListener("submit", onNumberGenerate);
formGuess.addEventListener("submit", onSubmitGuess);

restart.addEventListener("click", innit);

///////////////////////////////////////////////////////////////////////////
