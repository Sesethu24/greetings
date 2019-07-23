function Greeting(data) {

    let namesGreeted = data || {};

    function allLetter(input) {
        var letters = /^[A-Za-z]+$/;
        if (input.match(letters)) {
            return true;
        } else {
            return false
        }
    }

    function language(name, lang) {

        
        var upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);

        var smallCaseName = name.toLowerCase()
        if (!lang) {

            return "Please select language!"
        }
        else if (!allLetter(name)) {
            
            return "Please enter a valid name!"
        }
        
        if(name){
              if (namesGreeted[smallCaseName] === undefined) {
            namesGreeted[smallCaseName] = 0
        }
    }
        if (lang === "English") {
            return "Hello " + upperCaseName;
        }
        else if (lang === "isiXhosa") {
            return "Molo " + upperCaseName;
        }
        else if (lang === "Afrikaans") {
            return "Hallo " + upperCaseName;
        }


    }
    function counter() {
        var k = Object.keys(namesGreeted)
        return k.length;
    }
    function getName() {
        return namesGreeted;
    }

    return {
        language,
        getName,
        counter,
        allLetter
    }

}