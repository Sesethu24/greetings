var textBtnElem = document.querySelector(".textBtn");
var langBtnElem = document.querySelector(".langBtn");
var greetBtnElem = document.querySelector(".greetBtn");
var displayBox = document.querySelector(".box");
var counterElem = document.querySelector(".counterTotal");


var greetMe = Greeting();

function languageType() {

      greetMe.language(textBtnElem.value)
    var radioBtn = document.querySelector("input[name='language']:checked");

    if (radioBtn) {
        var type = radioBtn.value;
    }
    if(textBtnElem.value) {
        var display = greetMe.language(textBtnElem.value, type);
        displayBox.innerHTML = display;
    }
    counterElem.innerHTML = greetMe.counter()

}

greetBtnElem.addEventListener('click', languageType)