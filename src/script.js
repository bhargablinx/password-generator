let password = "";
let passwordLength = 8;
let numAllowed = false;
let upperCaseAllowed = false;
let symbolsAllowed = false;
const passLenSlider = document.querySelector(".pass-len-slider");

function displayPassLength(length) {
    document.querySelector(".pass-length-holder").textContent = length;
    passwordLength = Number(length);
    generatePassword();
}

function generatePassword() {
    password = "";
    let passOptions = "abcdabcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = `!#$&@%*`;
    if (upperCaseAllowed) {
        passOptions = "abcdabcdefghiJKLMNOPQRSTUVWXYZ";
    }
    if (numAllowed) passOptions += numbers;
    if (symbolsAllowed) passOptions += symbols;
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passOptions.length);
        password += passOptions[randomIndex];
    }
    displayPassword();
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
    generatePassword();
});

document.querySelector("#include-upper").addEventListener("click", (e) => {
    upperCaseAllowed = e.target.checked;
    generatePassword();
});

document.querySelector("#include-symbol").addEventListener("click", (e) => {
    symbolsAllowed = e.target.checked;
    generatePassword();
});

document.querySelector(".re-generate-btn").addEventListener("click", () => {
    generatePassword();
});

document.querySelector(".copy-btn").addEventListener("click", () => {
    const copyText = document.querySelector(".pass-display-screen");
    copyText.select();
    navigator.clipboard.writeText(password);
});

displayPassLength(passLenSlider.value);
generatePassword();
document.querySelector("#include-num").checked = false;
document.querySelector("#include-upper").checked = false;
document.querySelector("#include-symbol").checked = false;
