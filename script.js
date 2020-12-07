

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
let leters = ["A", "B", "C", "D", "E", "F", "G", "H"];
let field = [];
let options = [];
function makeArray() {
    let rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) {
        let row = [];
        let arr = rows[i].querySelectorAll('.cell');
        for (let m = 0; m < arr.length; m++) {
            arr[m].setAttribute('name',`${leters[m]}`);
            row.push(arr[m]);
        }
        field.push(row);
    }
}

makeArray();
console.log(field);

function showOptions(from) {
    let cell = from.getAttribute('name');
    let row = from.parentElement.id-1;
    let cellIndex = leters.indexOf(cell);
      for(let i = -2; i<3;i++) {
          if(i==0)continue;
         if(Math.abs(i) == 2) {
            n = 1;
         } else n =2;
         options.push(field[row+i][cellIndex+n]);
         options.push(field[row+i][cellIndex -n]);
      }
      
      
       options.forEach(item => {
          if(item != undefined) item.classList.toggle('options')} )
      
    
}

let selecteds = [];

function select(event) {
    let cell = event.target;
    selecteds.push(cell);
    selecteds.forEach(item => item.classList.toggle('selected'));
    if (selecteds.length > 1) selecteds.shift();
}

let fieldElem = document.querySelector('.field');
fieldElem.addEventListener('click', (event) => {
    select(event);
    showOptions(event.target);
});



