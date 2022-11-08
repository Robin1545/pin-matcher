

const formControl1 = document.querySelector('.form-control1');
const generateBtn = document.querySelector('.generate-btn');


generateBtn.addEventListener('click', generateRandomNumber);

values = [];

function generateRandomNumber () {
    leftTry.innerHTML = 3;
    submitBtn.disabled = false;
    formControl1.value = Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000;
    formControl2.value = '';
    formControl2.style.color = 'white';
    values = [];
    document.getElementById('disabledTry').style.display = 'block';
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

// let values = [];

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
    formControl2.style.color = 'white';
})

clear.addEventListener('click', function () {
    values = [];
    formControl2.value = '';
    formControl2.style.color = 'white';
})

const leftTry = document.getElementById('leftTry');

 submitBtn.addEventListener('click', function () {
    //Right Wrong Section
    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    if(formControl1.value && formControl2.value) {
        if(formControl1.value == formControl2.value) {
            right.style.display = 'block';
            wrong.style.display = 'none';
            formControl2.style.color = 'white';
            values = [];
            document.getElementById('disabledTry').style.display = 'none';
            setTimeout(() => {
                formControl1.value = '';
                formControl2.value = '';
            },500);
        }else {
            wrong.style.display = 'block';
            right.style.display = 'none';
            formControl2.style.color = 'red';
            // Remaining Effort Section
        let remainingChance = leftTry.innerHTML;
        remainingChance--;
        leftTry.innerHTML = remainingChance;
        if(remainingChance == 0) {
            submitBtn.disabled = true;
            formControl1.disabled = true;
            formControl2.disabled = true;
        }
        };  
    }
})