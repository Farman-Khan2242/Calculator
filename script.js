let inputDisplay = document.getElementById('input');
let h5 = document.querySelector('h5');
let clearFunction = document.querySelector('.lightOrange')

function display(input){
    inputDisplay.value += input
}

function calculate(){

        if(inputDisplay.value == '7+5-9'){
            inputDisplay.style.fontSize = '20px';
            inputDisplay.style.color = 'red'
            inputDisplay.value = `${h5.innerHTML}❤️`;
                clearFunction.addEventListener('click',function(){
                    inputDisplay.style.color = 'black'
                    inputDisplay.style.fontSize = '45px';
            })
        }

    else {
        try {

            let result = eval(inputDisplay.value)
    
            if (result % 1 === 0) {
                inputDisplay.value = result;
            } else {
    
                inputDisplay.value = result.toFixed(2);
            }
        } catch (error) {
            inputDisplay.value = 'Error'
        }
    }
   


}
function clearDisplay(){
    inputDisplay.value = ''
}

function deleteNum() {
    // Get the current value of the input field
    const inputField = document.getElementById("input");
    
    // Remove the last character if there's any text
    inputField.value = inputField.value.slice(0, -1);
}

