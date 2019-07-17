function Greeting() {

    let nameGreeted = {};

    function language(name, lang) {
        if(!lang) {
            return "Please select language!"
        }

        if (nameGreeted[name] === undefined) {
            nameGreeted[name] = 0
        }

        if (lang === "English") {
            return "Hello " + name;
        }
        else if (lang === "isiXhosa") {
            return "Molo " + name;
        }
        else if (lang === "Afrikaans") {
            return "Hallo " + name;
        }

    }
    function getName() {
        return nameGreeted;
    }

    function counter() {
        var k = Object.keys(nameGreeted)
        return k.length;
    }

    return {
        language,
        getName,
        counter
    }

}