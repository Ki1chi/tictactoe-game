


const Gameboard = (function (){
    const boxes = document.querySelectorAll(".item")
    const board = Array.from(boxes)

    return  {
        board
    }
})();


const restartGame = () =>  {
    let box = Gameboard.board
    for(i = 0; i < box.length; i++) {
        box[i].value = i
        box[i].innerText = ""
    }
    gameActive = true;
};


const MakeMove = (() => {
    const boxes = document.querySelectorAll(".item")
    const first = document.querySelector(".player1") 
    const second = document.querySelector(".player2")
    let box = Gameboard.board;
    let counter = 1;
    let start = true;
    let gameActive = true;
    const restart = document.querySelector(".restart")
    restart.addEventListener('click', () => {
        restartGame()
    })

    first.addEventListener('click', () => {
        if (start == true){
            counter = 1;
        }
    })
    second.addEventListener("click", ()=> {
        if (start == true){
            counter = 2;
        }
    })
        for(i = 0; i < box.length; i++) {
            box[i].value = i
    }
    boxes.forEach(button =>{
    button.addEventListener('click', ()=>{
        
        if(button.innerText){
            return 
        } else if (counter % 2 == 0){
            button.innerText = "O"
            button.value = "O"
            counter++
            start = false;
        } else  {
            button.value = "X"
            button.innerText = "X"
            counter++
            start = false;
        }
        for(i = 0; i < 3; i++){
        if(box[0 + 3 * i].value == box[1 + 3 * i].value & box[1 + 3 * i].value == box[2 + 3 * i].value){
            gameActive = false;
            
        }
        }
        for(i = 0; i < 3; i++){
        if(box[0 + i].value == box[3 + i].value & box[3 + i].value == box[6 + i].value){
            gameActive = false;
        } 
        }
        for(i = 0; i < 2; i++){
        if(box[2 * i].value == box[4].value & box[4].value == box[8 - 2 * i].value){
            gameActive = false;
        }
        }

        if (gameActive == false){
            restartGame()
            alert("You win")
            gameActive = true;
            start = true;
        }
    })  
})  

    return {
        counter,
        boxes,
        gameActive
    };
})();


