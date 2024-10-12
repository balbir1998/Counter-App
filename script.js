const value = document.querySelector(".value");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
let inpNum = document.querySelector("input")
const resetBtn = document.querySelector(".reset");

increment.addEventListener('click', add);
decrement.addEventListener('click', sub);
inpNum.addEventListener('change', change);
resetBtn.addEventListener('click', reset);

function add() {
    value.innerText = parseInt(value.innerText) + inpNum.valueAsNumber;
};

function sub() {
    value.innerText = parseInt(value.innerText) - inpNum.valueAsNumber;
};

function change() {
    const changeNum = inpNum.valueAsNumber;
    if (typeof changeNum !== 'number' || changeNum < 0) {
        inpNum.value = 1;
    };
}

function reset() {
    value.innerText = 0;
    document.querySelector("input").value = 1;
};