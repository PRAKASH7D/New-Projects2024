let boxes = document.querySelectorAll("#game button");
let resetBtn = document.querySelector("#reset button");


let winBannerH1 = document.querySelector("#win-banner h1");
let winBanner = document.querySelector("#win-banner");
winBanner.style.visibility = "hidden";

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let flag = 1;
let cnt = 2;

let resetGame = () => {
    winBanner.style.visibility = "hidden";
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    })
    if(cnt%2 == 0){
        flag = 0;
    }
    else{
        flag = 1;
    }
    cnt++;    
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(flag == 1){
            box.innerText = "X";
            flag = 0;
            box.style.color = "hsl(0, 0%, 100%)"
            box.style.textShadow = "0 0 20px #ff00e6"
        }
        else{
            box.innerText = "O";
            flag = 1;
            box.style.color = "hsl(0, 0%, 100%)"
            box.style.textShadow = "0 0 20px #00c8ff"
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    let x = "X";
    let o = "O";

    for (const arr of winPatterns) {

        // console.log(arr[0], arr[1], arr[2]);
        // console.log(boxes[arr[0]].innerText, boxes[arr[1]].innerText, boxes[arr[2]].innerText,)

        if(
            boxes[arr[0]].innerText == x &&
            boxes[arr[1]].innerText == x &&
            boxes[arr[2]].innerText == x 
        ){
            console.log("X WINs");
            winBannerH1.innerText = "X WINs";
            winBanner.style.visibility = "visible";
            winBannerH1.style.textShadow = "0 0 20px rgb(255, 40, 237)"
            winBannerH1.style.color = "rgb(254, 238, 254)"
            boxes.forEach((btn)=>{
                btn.disabled = true;
            })
        }
        else if(
            boxes[arr[0]].innerText == o &&
            boxes[arr[1]].innerText == o &&
            boxes[arr[2]].innerText == o 
        ){
            console.log("O WINs");
            winBannerH1.innerText = "O WINs";
            winBanner.style.visibility = "visible";
            winBannerH1.style.textShadow = " 0 0 20px aqua"
            winBannerH1.style.color = "rgb(167, 255, 255)"
            boxes.forEach((btn)=>{
                btn.disabled = true;
            })
        }
    }
    
}


resetBtn.addEventListener("click", () => {
    resetGame();
})

