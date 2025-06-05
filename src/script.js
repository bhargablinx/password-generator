const passLenSlider = document.querySelector(".pass-len-slider");

function displayPassLength(length) {
    document.querySelector(".pass-length-holder").textContent = length;
}

passLenSlider.addEventListener("input", (e) => {
    displayPassLength(e.target.value);
});

displayPassLength(passLenSlider.value);
