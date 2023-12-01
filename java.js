const previousOperationText = document.querySelector("#previous-operation")

const currentOperationText = document.querySelector("#current-operation")

const buttons = document.querySelector("#buttons-container button")

class calculator{

}

buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        const value = e.target.value.innerText;

        
        if(+value >= 0 || valeu === "."){
        console.log(value);}
        else{
            console.log("Op")
        }
    });
});