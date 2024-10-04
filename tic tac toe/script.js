let boxes=document.querySelectorAll(".box")

let resetBtn=document.querySelector(".reset-btn")

let turnO=true

let newGameBtn=document.querySelector(".new-btn")

let msgContainer=document.querySelector(".msg-cont")

let msg=document.querySelector(".msg")

let i=0

const resetGame=()=>{
    turnO=true
    enableBoxes()
    msgContainer.classList.add("hide")
    i=0

}
const disableBoxes=()=>{
    for (box of boxes){
        box.disabled=true
    }
}


const enableBoxes=()=>{
    for (box of boxes){
        box.disabled=false
        box.innerText=""
    }

}


const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const showDraw = (draw) =>{
    msg.innerText="It is a draw"
    msgContainer.classList.remove("hide")
    disableBoxes()
}
const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText

        if (pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1)
            }
        }
    }
}




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        i++

        if (i==9){
            showDraw()
        }

        if (turnO){
            box.style.color="red"
            box.innerText="O"
            turnO=false
        }
        else{
            box.style.color="yellow"
            box.innerText="X"
            turnO=true
        }
        box.disabled=true



        checkWinner();
    })
}
)




newGameBtn.addEventListener("click",resetGame)

resetBtn.addEventListener("click",resetGame)