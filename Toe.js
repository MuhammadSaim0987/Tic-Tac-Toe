let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let reset = document.querySelector(".reset");

turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];

const resetBtn = () => {
    turnO = true;
    winner.classList.add("hide");
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "" ;
    }
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true ;

        winnerchecker();
    });
});

const winnerchecker = () => {
    for(let pattern of winPatterns){
        let valPos1 = boxes[pattern[0]].innerText;
        let valPos2 = boxes[pattern[1]].innerText;
        let valPos3 = boxes[pattern[2]].innerText;
    
    if(valPos1 != "" && valPos2 != "" && valPos3 != ""){
        if(valPos1 === valPos2 && valPos2 === valPos3){
           winner.classList.remove("hide");
           winner.innerText = `Player ${valPos1} is Winner, Congratulations!!!`;
           disableBoxes();
         }
      }
   }
};

reset.addEventListener("click", () => {
    resetBtn();
}); 