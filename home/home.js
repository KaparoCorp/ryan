let userInput = document.querySelector("#userNameInput");
let outPut = document.getElementById("userName");

userInput.addEventListener("keyup",()=>{
    outPut.innerHTML=userInput.value;
})
