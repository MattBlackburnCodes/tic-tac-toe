const gameBoard = new Array(9).fill(null);

let player1 = "";
let player2 = "";

let playerTurn = "";

//factory function to create the player
const getPlayer = (pName, marker) => {
    const name = pName;
    const validMarker = ['X', 'O'];
    let mark = marker.toUpperCase();
    let turn = false;
    

    if(!validMarker.includes(mark)){
        console.log('invalid marker. Defaulting to X');
        mark = 'X';
    }
    
    const getName = () =>{
        return name;
    };
    const getMark = () =>{
        return mark;
    }
    const getStatus = () => {
        return `${name} is ${mark}, turn: ${turn}`;
    }
    const getTurn = () => {
        return turn;
    }
    const setTurn = (isTrue) => {
        turn = isTrue;
    }
    return {getName, getMark, getStatus, getTurn, setTurn};
};

const numPlayers = (num) => {
    
    if(num === 0){
        console.log("Computer vs Computer");
        player1 = getPlayer("Computer 1", "X");
        player2 = getPlayer("Computer 2", "O");
        console.log(player1.getStatus(), player2.getStatus());
        playerTurn = Math.random() < .5 ? player1 : player2;
        console.log(`${playerTurn.getName()} goes first`);
        playerTurn.setTurn(true);

    }
    else if(num === 1){
        //To create the player and assign the name and mark
        console.log("Player vs Computer");
        const playerOneName = prompt("Enter your name: ");
        console.log(playerOneName);
        const playerOneMark = prompt("Enter your marker (X/O): ");
        console.log(playerOneMark);
        player1 = getPlayer(playerOneName, playerOneMark);
        let playerTwoMark = '';
        let playerTwoName = `Computer 2`;
        if (player1.getMark() === "X"){
            playerTwoMark = "O";
        }
        else{
            playerTwoMark = "X";
        }

        player2 = getPlayer(playerTwoName, playerTwoMark);
        console.log(player1.getStatus(), player2.getStatus());

        playerTurn = Math.random() < .5 ? player1 : player2;
        console.log(`${playerTurn.getName()} goes first`);
        playerTurn.setTurn(true);
    }
    else if(num === 2){
        console.log("Player vs Player");
        const playerOneName = prompt("Enter your name: ");
        console.log(playerOneName);
        const playerOneMark = prompt("Enter your marker (X/O): ");
        console.log(playerOneMark);
        player1 = getPlayer(playerOneName, playerOneMark);

        //To create the second player and assign the name and mark
        const playerTwoName = prompt("Enter your name: ");
        console.log(playerTwoName);

        let playerTwoMark = '';

        if (player1.getMark() === "X"){
            playerTwoMark= "O";
        }
        else{
            playerTwoMark = "X";
        }
        console.log(playerTwo.mark);
        player2 = getPlayer(playerTwoName, playerTwoMark);
        console.log(player1.getStatus(), player2.getStatus());

        playerTurn = Math.random() < .5 ? player1 : player2;
        console.log(`${playerTurn.getName()} goes first`);
        playerTurn.setTurn(true);
    
    }
    else{
        console.log("Invalid number of players")
    }
}

//To have the user input their position on the gameboard
const makeMove = (player, position) => {
    if(gameBoard[position] === null && position >= 0 && position <= 8){
        gameBoard[position] = player.getMark();
        console.log(gameBoard);
        checkWinner(player);
        checkDraw();
        playerTurn = player;
        checkTurn(player1, player2);

    }
    else{
        console.log("Invalid move");
    }
}
// To call this command type makeMove(playerOne, 3) in the console.

const checkWinner = (player) => {
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== null){
        console.log(`${player.getName()} is the winner`);
    }
    else if(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== null){
        console.log(`${player.getName()} is the winner`);
    }
    else if(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== null){
        console.log(`${player.getName()} is the winner`);
    }
    else if(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== null){
        console.log(`${player.getName()} is the winner`);
    }
    else if(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== null){
        console.log(`${player.getName()} is the winner`);
    }
    else if(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== null){
        console.log(`${player.getName()} is the winner`);
    }
    else if(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== null){
        console.log(`${player.getName()} is the winner`);
    }
    else if(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== null){
        console.log(`${player.getName()} is the winner`);
    }
    else{
        console.log("Game in progress")
    }
}

const checkDraw = () => {
    if(gameBoard.includes(null)){
        console.log("Game in progress");
    }
    else{
        console.log("Draw");
    }
}
const resetGame = () => {
    gameBoard.fill(null);
}

const checkTurn = (player1, player2) => {
    if(playerTurn === player1){
        playerTurn = player2;
        player2.setTurn(true);
        player1.setTurn(false);
        return (`It is ${playerTurn.getName()}'s turn.`)
    }
    else{
        playerTurn = player1;
        player1.setTurn(true);
        player2.setTurn(false);
        return (`It is ${playerTurn.getName()}'s turn.`)
    }
}
