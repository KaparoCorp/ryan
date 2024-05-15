let userInput = document.querySelector("#userNameInput");
let outPut = document.getElementById("userName");

userInput.addEventListener("keyup",()=>{
    outPut.innerHTML=userInput.value;
})

let imgScreen = document.querySelector(".imgDisplay");
let preview = document.querySelectorAll(".timeline__blub");


let images=["pics/lizar.png","pics/thika.jpeg","pics/rongo.jpeg"]
let count=0;

preview.forEach((e)=>{
    e.addEventListener("mouseover", ()=>{
        if(e == preview[0]){
            imgScreen.style.backgroundImage=`url(pics/lizar.png)`
        }else if(e == preview[1]){
            imgScreen.style.backgroundImage=`url(pics/thika.jpeg)`
        }else if(e == preview[2]){
            imgScreen.style.backgroundImage=`url(pics/lizar.png)`
        }else{
            imgScreen.style.backgroundImage=`url(pics/rongo.jpeg)`
        }
    })
});
preview.forEach((e)=>{
    e.addEventListener("mouseout", ()=>{
        if(e == preview[0]){
            imgScreen.style.backgroundImage=``
        }else if(e == preview[1]){
            imgScreen.style.backgroundImage=``
        }else if(e == preview[2]){
            imgScreen.style.backgroundImage=``
        }else{
            imgScreen.style.backgroundImage=``
        }
    })
});

