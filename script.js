const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(
    button => {
        button.addEventListener('click',() => {
            const value = button.textContent;

            const operators = ['+', '-', '*', '/'];
            const lastChar = display.value.slice (-1);



            if(value==="AC"){
            display.value = ''; /* if the button is AC, clear the display */
        }

       else if(value==="Del"){
            display.value = display.value.slice(0,-1); return; /* if the button is DEL, remove the last character from the display */
        }

        else if(value === '=') {
                display.value = eval(display.value); /* if the button is the equal sign, evaluate the expression in the display and show the result */
            }

           else if (operators.includes(value) && operators.includes(lastChar)){
                return; 
           }
           /* prevent adding two operators in a row */


            else {
                display.value += value; 
            }/* for all other buttons, add their value to the display */
        
        
         
            })

        })

