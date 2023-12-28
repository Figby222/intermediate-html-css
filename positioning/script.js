const btn = document.querySelector("body > button");
const okBtn = document.querySelector(".button");
const popUp = document.querySelector(".popUp");
const content = document.querySelector(".content");
btn.addEventListener("click", () => {
    popUp.style.opacity = "0.8";
    content.style.opacity = "0.4";
    okBtn.disabled = false;
})
okBtn.addEventListener("click", () => {
    popUp.style.opacity = "0";
    content.style.opacity = "1";
    okBtn.disabled = true;
});
