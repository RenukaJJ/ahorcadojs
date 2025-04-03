let secretWord = "";
let displayWord = [];
const gameWord = document.getElementById("containers");
const notvalid = document.getElementById("notValid");


function Start(){
    secretWord = document.getElementById("secret").value.toLowerCase();
    displayWord = Array(secretWord.length).fill("_"); // Crear un array con '_'
    updateDisplay();
}

function Validar(){
    const inputLetter = document.getElementById("letter");
    const letter = inputLetter.value;
    if (letter && secretWord.includes(letter)) { // Si la letra está en la palabra
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
                displayWord[i] = letter; // Reemplazar '_' con la letra correcta
            }
        }
        updateDisplay()
    }
    else{
        notvalid.innerHTML += letter;
    }

    
    inputLetter.value = "";
}

function updateDisplay() {
    gameWord.innerHTML = displayWord.join(" "); // Mostrar la palabra con espacios
}