

const formControl1 = document.querySelector('.form-control1');
const generateBtn = document.querySelector('.generate-btn');


generateBtn.addEventListener('click', generateRandomNumber);


function generateRandomNumber () {
    formControl1.value = Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;
}




// Second Part
const formControl2 = document.querySelector('.form-control2');
const buttons = document.getElementsByClassName('button');
const backWard = document.getElementById('backWard');
const clear = document.getElementById('clear');
const submitBtn = document.querySelector('.submit-btn');



for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', handleClick);
}

let values = [];

function handleClick (e) {
    if(values.length <= 3 && values.length >= 0){
        formControl2.value += e.target.innerHTML;
        values.push(e.target.innerHTML);
    }
}


// backWard Event


backWard.addEventListener('click', function () {
    const copyValues = values;
    copyValues.pop();
    formControl2.value = copyValues.join('');
})

clear.addEventListener('click', function () {
    values = [];
    formControl2.value = '';
})

const leftTry = document.getElementById('leftTry');

 submitBtn.addEventListener('click', function () {
    //Right Wrong Part Section
    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    if(formControl1.value && formControl2.value) {
        if(formControl1.value == formControl2.value) {
            right.style.display = 'block';
            wrong.style.display = 'none';
            setInterval(() => {
                right.style.display = 'none';
                wrong.style.display = 'none';
            }, 1000);
        }else {
            wrong.style.display = 'block';
            right.style.display = 'none';
            setInterval(() => {
                right.style.display = 'none';
                wrong.style.display = 'none';
            }, 1000);
        };
        // Remaining Effort Section
    let remainingChance = leftTry.innerHTML;
    remainingChance--;
    leftTry.innerHTML = remainingChance;
    if(remainingChance == 0) {
        submitBtn.disabled = true;
        generateBtn.disabled = true;
        formControl1.disabled = true;
        formControl2.disabled = true;
    }
    }
    
    
    // All Clear Section
    setTimeout(() => {
        values = [];
        formControl2.value = '';
        formControl1.value = ''
    },600)
})