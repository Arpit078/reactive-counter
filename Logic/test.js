var el = document.getElementById("test");
const increaseBtn = document.getElementById("increase");
let count = 0;
el.innerText = count;

increaseBtn.addEventListener('click', () => {
    count++;
    el.innerText = count;
});
