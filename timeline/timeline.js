let imgScreen = document.querySelector(".imgDisplay");
let preview = document.querySelectorAll(".timeline__blub");

console.log(imgScreen)

let images=["../pics/lizar.png","../pics/thika.jpeg","../pics/rongo.jpeg"]
let count=0;

preview.forEach((e)=>{
    e.addEventListener("click", changePic)
});

function changePic(){
    imgScreen.style.backgroundImage=`url(${images[0]})`
};