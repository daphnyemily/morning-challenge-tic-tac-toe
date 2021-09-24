// Help from team Gardner//

let boxes = Array.from(document.querySelectorAll('.box'))

const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const game = {
    turn: 1,
    currentPlayer: 'X',
    nextTurn: function(){
        if(this.turn % 2 == 0){
            this.currentPlayer = 'O'
        }else{
            this.currentPlayer = 'X'
        }
    },
    checkCurrentPlayer: function(){
        document.getElementById('currentPlayer').innerHTML = 'Current Player: ' + this.currentPlayer;
    },
    checkWin: function(){
        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
           
            if (
                boxes[a].textContent !== "" &&
                boxes[a].textContent === boxes[b].textContent && 
                boxes[a].textContent === boxes[c].textContent
            ) {
                document.getElementById('message').innerHTML = 'WINNER IS ' + boxes[a].textContent;
                
                boxes.forEach(element => {
                    element.classList.add('unclickable');
                });
                boxes[a].classList.add('winningTiles');
                boxes[b].classList.add('winningTiles');
                boxes[c].classList.add('winningTiles');
                document.getElementById('currentPlayer').style.display = 'none';
                console.log('WINNER IS ' + boxes[a].textContent)
            }
        } 
    },
    checkDraw: function(){
        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
           
            if (
                this.turn == 10 &&
                boxes[a].textContent !== "" &&
                boxes[a].textContent !== boxes[b].textContent && 
                boxes[a].textContent !== boxes[c].textContent
            ) 
            {
                document.getElementById('message').innerHTML = 'DRAW';
                document.getElementById('currentPlayer').style.display = 'none';
                console.log('DRAW')
            }
        }
    },
}

game.checkCurrentPlayer();

boxes.forEach(element => {
    element.onclick = function(event){
        const tileTarget = event.target;
        tileTarget.innerHTML = game.currentPlayer;
        tileTarget.classList.add('unclickable');
        game.turn++;
        game.nextTurn();
        game.checkDraw();
        game.checkWin();
        game.checkCurrentPlayer();
    };
});

//reset page//
const reset = document.getElementById('reset'); 
reset.addEventListener('click', () => location.reload());









