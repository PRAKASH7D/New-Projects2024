function comp(){
    return Math.floor(Math.random()*3)
}
var win = [
    [0, 2],
    [1, 0],
    [2, 1]
]

var pcScore = 0;
var userScore = 0;

var buttons = document.querySelectorAll(".circles");
var winAns;

buttons.forEach((btn, idx) => {
    btn.addEventListener("click",()=>{
        // console.log(idx, comp())
        var arr = [idx,comp()];
        console.log(arr);
        if(arr[0] != arr[1]){
            if(idx == 0){
                if(arr[0] == win[0][0] && arr[1] == win[0][1]){
                    console.log("you win");
                    userScore++;
                    userWin();
                }
                else{
                    console.log("computer win");
                    pcScore++;
                    compWin();
                }
            }
            else if(idx == 1){
                if(arr[0] == win[1][0] && arr[1] == win[1][1]){
                    console.log("you win");
                    userScore++;
                    userWin();
                }
                else{
                    console.log("computer win");
                    pcScore++;
                    compWin();
                }
            }
            else{
                if(arr[0] == win[2][0] && arr[1] == win[2][1]){
                    console.log("you win");
                    userScore++;
                    userWin();
                }
                else{
                    console.log("computer win");
                    pcScore++;
                    compWin();
                }
            }
        }
        else{
            console.log("Draw");
            draw();
        }

        document.querySelector("#you h1").innerHTML = userScore;
        document.querySelector("#comp h1").innerHTML = pcScore;
    })
})

var lable = document.querySelector("#win-label h2");

function userWin(){
    lable.innerHTML = "You Win"
    lable.style.backgroundColor = "green"
}

function compWin(){
    lable.innerHTML = "Computer Win"
    lable.style.backgroundColor = "red"
}

function draw(){
    lable.innerHTML = "Draw. Play again"
    lable.style.backgroundColor = "rgb(81, 169, 196)"
}