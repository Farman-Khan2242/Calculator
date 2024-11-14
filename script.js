let inputDisplay = document.getElementById('input')

function display(input){
    inputDisplay.value += input
}
function calculate(){

        if(inputDisplay.value == '7+5-9'){
            inputDisplay.style.fontSize = '21px'
        inputDisplay.value = 'Your eyes stole all my words away, $' 
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

