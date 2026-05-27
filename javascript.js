const generateBtn =
document.getElementById("generateBtn");

const result =
document.getElementById("result");

generateBtn.addEventListener(
    "click",
    generatePasswords
);

function randomLower(){

    return String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
    );
}

function randomUpper(){

    return String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
    );
}

function randomNumber(){

    return String.fromCharCode(
        Math.floor(Math.random() * 10) + 48
    );
}

function randomSymbol(){

    const symbols =
    "!@#$%^&*()_+[]{}<>?/";

    return symbols[
        Math.floor(Math.random() * symbols.length)
    ];
}

function generatePasswords(){

    const length =
    Number(document.getElementById("length").value);

    const amount =
    Number(document.getElementById("amount").value);

    const uppercase =
    document.getElementById("uppercase").checked;

    const lowercase =
    document.getElementById("lowercase").checked;

    const numbers =
    document.getElementById("numbers").checked;

    const symbols =
    document.getElementById("symbols").checked;

    let generators = [];

    if(uppercase){
        generators.push(randomUpper);
    }

    if(lowercase){
        generators.push(randomLower);
    }

    if(numbers){
        generators.push(randomNumber);
    }

    if(symbols){
        generators.push(randomSymbol);
    }

    if(generators.length === 0){

        result.innerText =
        "Selecione pelo menos uma opção.";

        return;
    }

    let passwords = "";

    for(let j = 0; j < amount; j++){

        let password = "";

        for(let i = 0; i < length; i++){

            const randomFunction =
            generators[
                Math.floor(
                    Math.random() * generators.length
                )
            ];

            password += randomFunction();
        }

        passwords += password + "\n";
    }

    result.innerText = passwords;
}