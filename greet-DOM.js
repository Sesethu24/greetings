var textBtnElem = document.querySelector(".textBtn");
var langBtnElem = document.querySelector(".langBtn");
var greetBtnElem = document.querySelector(".greetBtn");
var displayBox = document.querySelector(".box");
var counterElem = document.querySelector(".counterTotal");
var resetBtnElem = document.querySelector(".resetBtn");

var retrievedObject = localStorage.getItem('greet') ? JSON.parse(localStorage.getItem('greet')) : {};

var greetMe = Greeting(retrievedObject);


var retrievedObject = localStorage.getItem('counter');

counterElem.innerHTML = greetMe.counter()
function languageType() {

    greetMe.language(textBtnElem.value)

 var radioBtn = document.querySelector("input[name='language']:checked");

    if (radioBtn) {
        var type = radioBtn.value;
    }
    if (textBtnElem.value) {
        var display = greetMe.language(textBtnElem.value, type);
        displayBox.innerHTML = display;
        textBtnElem.value = ""
    }

    localStorage.setItem("greet", JSON.stringify(greetMe.getName()));

    counterElem.innerHTML = greetMe.counter()

    resetBtnElem.addEventListener('click', function () {
        
        window.location.reload();
        localStorage.clear();
        displayBox.innerHTML = 0;
    });

}

greetBtnElem.addEventListener('click', languageType)