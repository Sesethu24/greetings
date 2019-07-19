function Greeting(data) {

    let nameGreeted = data || {};

    function language(name, lang) {

       if (!lang) {
            return "Please select language!"
        }
        var upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);

        if (nameGreeted[name] === undefined) {
            nameGreeted[name] = 0
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
    function getName() {
        return nameGreeted;
    }

    function counter() {
        var k = Object.keys(nameGreeted)
        return k.length;
    }
    console.log(nameGreeted)
    return {
        language,
        getName,
        counter
    }

}