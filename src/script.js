function displayPassLength(length) {
    document.querySelector(".pass-length-holder").textContent = length;
}

document.querySelector(".pass-len-slider").addEventListener("input", (e) => {
    // console.log(e.target.value);
    displayPassLength(e.target.value);
});
