let password = "";
let passwordLength = 8;
let numAllowed = false;
let upperCaseAllowed = false;
let symbolsAllowed = false;
const passLenSlider = document.querySelector(".pass-len-slider");

function displayPassLength(length) {
    document.querySelector(".pass-length-holder").textContent = length;
    passwordLength = Number(length);
}

function generatePassword() {
    password = "";
    let passOptions = "abcdabcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = `!#$&@%*`;
    if (numAllowed) passOptions += numbers;
    if (upperCaseAllowed) passOptions += upperCase;
    if (symbolsAllowed) passOptions += symbols;
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passOptions.length);
        password += passOptions[randomIndex];
    }
    return password;
}

function displayPassword() {
    document.querySelector(".pass-display-screen").textContent = password;
}

passLenSlider.addEventListener("input", (e) => {
    displayPassLength(e.target.value);
});

document.querySelector("#include-num").addEventListener("click", (e) => {
    numAllowed = e.target.checked;
});

document.querySelector("#include-upper").addEventListener("click", (e) => {
    upperCaseAllowed = e.target.checked;
});

document.querySelector("#include-symbol").addEventListener("click", (e) => {
    symbolsAllowed = e.target.checked;
});

displayPassLength(passLenSlider.value);
