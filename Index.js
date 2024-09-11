let btn1=document.querySelectorAll(".btn");
let boxes=document.querySelector("#box");
let boxes1=document.querySelector("#box1");
let newbtn=document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame=()=>{
    turnO=true;
    enableBtn1();
    msgContainer.classList.add("hide");


}

btn1.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("box was clicked");
        // btn.innerText="A";
        if(turnO===true){
            btn.innerText="O";
            turnO=false;
        }

        else{
            btn.innerText="X";
            turnO=true;
        }
        boxes.Disabled=true;


        checkWinner();
    });

});

const disableBtn1=()=>{
    for(let btn of btn1){
        btn.disabled=true;
    }
}

const enableBtn1=()=>{
    for(let btn of btn1){
        btn.disabled=false;
        btn.innerText="";
    }
}

const showWinner=(winner)=>{
      msg.innerText=`Congratulations..! Player ${winner} is Winner !!!`;
      msgContainer.classList.remove("hide");
      disableBtn1();
}


const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(btn1[pattern[0]].innerText,
        //     btn1[pattern[1]].innerText,
        //     btn1[pattern[2]].innerText);

        let pos1=btn1[pattern[0]].innerText;
        let pos2=btn1[pattern[1]].innerText;
        let pos3=btn1[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3)
            {
                console.log("Winner",pos1);
                showWinner(pos1);

            }
        }

    }
};

newbtn.addEventListener("click",resetGame());
boxes.addEventListener("click",resetGame());
boxes1.addEventListener("click",resetGame());

