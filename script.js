

function drew() {
    let div = document.createElement('div');
    div.setAttribute('style', 'width:400px;');
    div.className = "field";
    wrapper.append(div);
    let n = 1;
    for (let row = 1; row < 9; row++) {
        let line = document.createElement('div');
        line.className = "row";
        line.id = `${row}`;
        div.append(line);
        for (let cell = 1; cell < 9; cell++) {
            if (n % 2 == 0) {
                line.insertAdjacentHTML("beforeend", `<div class = "cell black"></div>`);
            }
            else {
                line.insertAdjacentHTML("beforeend", '<div class = "cell white"></div>');
            }
            n++;
        }
        n++;
    }
}

drew();
let field = [];
function makeArray() {
    let leters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) {
        let row = [];
        let arr = rows[i].querySelectorAll('.cell');
        for (let i = 0; i < arr.length; i++) {
            arr[i].id = leters[i];
            row.push(arr[i]);
        }
        field.push(row);
    }
}

makeArray();
console.log(field);


let selecteds = [];
function select(event) {
    let cell = event.target;
    selecteds.push(cell);
    selecteds.forEach(item => item.classList.toggle('selected'));
    //console.log(selecteds);
    if (selecteds.length > 1) selecteds.shift();
    //console.log(`after ${selecteds}`);
    //console.log(selecteds);
}

let fieldElem = document.querySelector('.field');
fieldElem.addEventListener('click', (event) => {
    //console.log(`before`);
    //console.log(selecteds);
    select(event);
});



