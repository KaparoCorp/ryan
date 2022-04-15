let userInput = document.querySelector("#userNameInput");
let outPut = document.getElementById("userName");

userInput.addEventListener("keyup",()=>{
    outPut.innerHTML=userInput.value;
})

let imgScreen = document.querySelector(".imgDisplay");
let preview = document.querySelectorAll(".timeline__blub");

console.log(imgScreen)

let images=["../pics/lizar.png","../pics/thika.jpeg","../pics/rongo.jpeg"]
let count=0;

preview.forEach((e)=>{
    e.addEventListener("mouseover", ()=>{
        if(e == preview[0]){
            console.log("workes")
            imgScreen.style.backgroundImage=`url(../pics/lizar.png)`
        }else if(e == preview[1]){
            console.log("2 also works")
            imgScreen.style.backgroundImage=`url(../pics/thika.jpeg)`
        }else if(e == preview[2]){
            console.log("3 also works")
            imgScreen.style.backgroundImage=`url(../pics/lizar.png)`
        }else{
            console.log("obviously!")
            imgScreen.style.backgroundImage=`url(../pics/rongo.jpeg)`
        }
    })
});
preview.forEach((e)=>{
    e.addEventListener("mouseout", ()=>{
        if(e == preview[0]){
            console.log("workes")
            imgScreen.style.backgroundImage=``
        }else if(e == preview[1]){
            console.log("2 also works")
            imgScreen.style.backgroundImage=``
        }else if(e == preview[2]){
            console.log("3 also works")
            imgScreen.style.backgroundImage=``
        }else{
            console.log("obviously!")
            imgScreen.style.backgroundImage=``
        }
    })
});

