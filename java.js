let gameBoard = new Array(9).fill(null);

let player1 = "";
let player2 = "";

let playerTurn = "";
let gameOver = false;

let playerOneNameText = document.querySelector(".playerOneName");
let playerOneMarkText = document.querySelector(".playerOneMarker");
let playerOneScoreText = document.querySelector(".playerOneScore");

let playerTwoNameText = document.querySelector(".playerTwoName");
let playerTwoMarkText = document.querySelector(".playerTwoMarker");
let playerTwoScoreText = document.querySelector(".playerTwoScore");

let displayTurn = document.querySelector(".displayTurn");

let domGameBoard = [];

let lastWinner = "";

for (let i = 0; i < 9; i++){
    domGameBoard[i] = document.querySelector(`.space${i}`);
    console.log(domGameBoard[i]);
}
const newGameButton = document.querySelector(".newGameButton");
const resetButton = document.querySelector(".resetButton");
playerOneMarkText.style.color = "lightblue";
playerTwoMarkText.style.color = "red";

playerOneMark = "blue";
playerTwoMark = "red";




//factory function to create the player
const getPlayer = (pName, marker) => {
    const name = pName;
    const validMarker = ['X', 'O'];
    let mark = marker.toUpperCase();
    let turn = false;
    let winner = false;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    

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
    const getWinner = () =>{
        return winner;
    }
    const setWinner = (isTrue) => {
        winner = isTrue;
    }
    const getWins = () => {
        return wins;
    }
    const getLosses = () => {
        return losses;
    }
    const getDraws = () => {
        return draws;
    }
    const setWins = () => {
        wins++;
    }
    const setLosses = () => {
        losses++;
    }
    const setDraws = () => {
        draws++;
    }


    return {getName, getMark, getStatus, getTurn, setTurn, getWinner, setWinner, setWins, setLosses, setDraws, getWins, getLosses, getDraws};
};

//function to create the players
const numPlayers = (num) => {
    gameOver = false;
    displayTurn.textContent = "";
    gameBoard.fill(null);

    for(let i = 0; i < 9; i++){
        domGameBoard[i].textContent = "";
        domGameBoard[i].style.backgroundColor = "";
    }
    //Computer vs Computer
    if(num === 0){
        player1 = getPlayer("Computer 1", "X");
        player2 = getPlayer("Computer 2", "O");
        playerTurn = Math.random() < .5 ? player1 : player2;
        playerTurn.setTurn(true);
        playerOneNameText.textContent = player1.getName();
        playerOneMarkText.textContent = player1.getMark();
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoNameText.textContent = player2.getName();
        playerTwoMarkText.textContent = player2.getMark();
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;

        displayTurn.textContent = `It is ${playerTurn.getName()}'s turn.`;
        if (!gameOver) {
            if (playerTurn === player1 && player1.getName() === "Computer 1") {
                computerMove(player1);
            } else if (playerTurn === player2 && player2.getName() === "Computer 2") {
                computerMove(player2);
            }
        }


    }
    else if(num === 1){
        //To create the player and assign the name and mark
        const playerOneName = prompt("Enter your name: ");
        const playerOneMark = prompt("Enter your marker (X/O): ");
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
        playerOneNameText.textContent = player1.getName();
        playerOneMarkText.textContent = player1.getMark();
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoNameText.textContent = player2.getName();
        playerTwoMarkText.textContent = player2.getMark();
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        playerTurn.setTurn(true);
        displayTurn.textContent = `It is ${playerTurn.getName()}'s turn.`;
        if (!gameOver) {
            if (playerTurn === player1 && player1.getName() === "Computer 1") {
                computerMove(player1);
            } else if (playerTurn === player2 && player2.getName() === "Computer 2") {
                computerMove(player2);
            }
        }
    }
    else if(num === 2){
        const playerOneName = prompt("Enter your name: ");
        const playerOneMark = prompt("Enter your marker (X/O): ");
        player1 = getPlayer(playerOneName, playerOneMark);

        //To create the second player and assign the name and mark
        const playerTwoName = prompt("Enter your name: ");

        let playerTwoMark = '';

        if (player1.getMark() === "X"){
            playerTwoMark= "O";
        }
        else{
            playerTwoMark = "X";
        }
        player2 = getPlayer(playerTwoName, playerTwoMark);
        playerOneNameText.textContent = player1.getName();
        playerOneMarkText.textContent = player1.getMark();
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoNameText.textContent = player2.getName();
        playerTwoMarkText.textContent = player2.getMark();
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;

        playerTurn = Math.random() < .5 ? player1 : player2;
        playerTurn.setTurn(true);
        displayTurn.textContent = `It is ${playerTurn.getName()}'s turn.`;
    
    }
    else{
        console.log("Invalid number of players")
    }
}

newGameButton.addEventListener('click', () => {
    domGameBoard.forEach((cell) => {
        cell.textContent = "";
        cell.style.backgroundColor = "";
    });
    let num = +prompt("How many players? (0, 1, or 2)");
    numPlayers(num);

    if (!gameOver) {
        if (playerTurn === player1 && player1.getName() === "Computer 1") {
            computerMove(player1);
        } else if (playerTurn === player2 && player2.getName() === "Computer 2") {
            computerMove(player2);
        }
    }
});

const checkWinner = (player) => {
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== null){
        domGameBoard[0].style.backgroundColor = "green";
        domGameBoard[1].style.backgroundColor = "green";
        domGameBoard[2].style.backgroundColor = "green";
        player.setWinner(true);
        player.setWins();
        if(player === player1){
            player2.setLosses();
        }
        else{
            player1.setLosses();
        }
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        displayTurn.textContent = `${player.getName()} is the winner`;
        lastWinner = player;
        gameOver = true;
        
    }
    else if(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== null){
        domGameBoard[3].style.backgroundColor = "green";
        domGameBoard[4].style.backgroundColor = "green";
        domGameBoard[5].style.backgroundColor = "green";
        player.setWinner(true);
        player.setWins();
        if(player === player1){
            player2.setLosses();
        }
        else{
            player1.setLosses();
        }
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        displayTurn.textContent = `${player.getName()} is the winner`;
        lastWinner = player;
        gameOver = true;
    }
    else if(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== null){
        domGameBoard[6].style.backgroundColor = "green";
        domGameBoard[7].style.backgroundColor = "green";
        domGameBoard[8].style.backgroundColor = "green";
        console.log(`${player.getName()} is the winner`);
        player.setWinner(true);
        player.setWins();
        if(player === player1){
            player2.setLosses();
        }
        else{
            player1.setLosses();
        }
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        displayTurn.textContent = `${player.getName()} is the winner`;
        lastWinner = player;
        gameOver = true;
    }
    else if(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== null){
        domGameBoard[0].style.backgroundColor = "green";
        domGameBoard[3].style.backgroundColor = "green";
        domGameBoard[6].style.backgroundColor = "green";
        player.setWinner(true);
        player.setWins();

        if(player === player1){
            player2.setLosses();
        }
        else{
            player1.setLosses();
        }
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        displayTurn.textContent = `${player.getName()} is the winner`;
        lastWinner = player;
        gameOver = true;
    }
    else if(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== null){
        domGameBoard[1].style.backgroundColor = "green";
        domGameBoard[4].style.backgroundColor = "green";
        domGameBoard[7].style.backgroundColor = "green";
        player.setWinner(true);
        player.setWins();
        if(player === player1){
            player2.setLosses();
        }
        else{
            player1.setLosses();
        }
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        displayTurn.textContent = `${player.getName()} is the winner`;
        lastWinner = player;
        gameOver = true;
    }
    else if(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== null){
        domGameBoard[2].style.backgroundColor = "green";
        domGameBoard[5].style.backgroundColor = "green";
        domGameBoard[8].style.backgroundColor = "green";
        player.setWinner(true);
        player.setWins();
        
        if(player === player1){
            player2.setLosses();
        }
        else{
            player1.setLosses();
        }
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        displayTurn.textContent = `${player.getName()} is the winner`;
        lastWinner = player;
        gameOver = true;
    }
    else if(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== null){
        domGameBoard[0].style.backgroundColor = "green";
        domGameBoard[4].style.backgroundColor = "green";
        domGameBoard[8].style.backgroundColor = "green";
        player.setWinner(true);
        player.setWins();
        
        if(player === player1){
            player2.setLosses();
        }
        else{
            player1.setLosses();
        }
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        displayTurn.textContent = `${player.getName()} is the winner`;
        lastWinner = player;
        gameOver = true;
    }
    else if(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== null){
        domGameBoard[2].style.backgroundColor = "green";
        domGameBoard[4].style.backgroundColor = "green";
        domGameBoard[6].style.backgroundColor = "green";
        player.setWinner(true);
        player.setWins();
        if(player === player1){
            player2.setLosses();
        }
        else{
            player1.setLosses();
        }
        playerOneScoreText.textContent = `Score: ${player1.getWins()}`;
        playerTwoScoreText.textContent = `Score: ${player2.getWins()}`;
        displayTurn.textContent = `${player.getName()} is the winner`;
        lastWinner = player;
        gameOver = true;
    } 
}

const checkDraw = () => {
    if(gameOver === true){
        return;
    }

    if(gameBoard.includes(null)){
        //console.log("Game in progress");
    }
    else{
        console.log("Draw");
        player1.setDraws();
        player2.setDraws();
        displayTurn.textContent = `Draw`;
        gameOver = true;
        lastWinner = "";
    }
}
const resetGame = () => {
    gameBoard.fill(null);
    for(let i = 0; i < 9; i++){
        domGameBoard[i].textContent = "";
        domGameBoard[i].style.backgroundColor = "";
    }
    gameOver = false;
    player1.setWinner(false);
    player2.setWinner(false);
    player1.setTurn(false);
    player2.setTurn(false);
    if (lastWinner === player1){
        playerTurn = player2;
    }
    else if (lastWinner === player2){
        playerTurn = player1;
    }
    else{
        playerTurn = Math.random() < .5 ? player1 : player2;
    }
    displayTurn.textContent = `It is ${playerTurn.getName()}'s turn.`;
    //playerTurn = "";
    //displayTurn.textContent = "";
    //playerTurn = Math.random() < .5 ? player1 : player2;
    displayTurn.textContent = `It is ${playerTurn.getName()}'s turn.`;
    
    if (!gameOver) {
        if (playerTurn === player1 && player1.getName() === "Computer 1") {
            computerMove(player1);
        } else if (playerTurn === player2 && player2.getName() === "Computer 2") {
            computerMove(player2);
        }
    }
}
resetButton.addEventListener('click', resetGame);

const checkTurn = (player1, player2) => {
    if(gameOver === true){
        return;
    }
    if(playerTurn === player1){
        playerTurn = player2;
        player2.setTurn(true);
        player1.setTurn(false);
        displayTurn.textContent = `It is ${playerTurn.getName()}'s turn.`;

    }
    else{
        playerTurn = player1;
        player1.setTurn(true);
        player2.setTurn(false);
        displayTurn.textContent = `It is ${playerTurn.getName()}'s turn.`;
    }
}

const computerMove = (player) => {
    
    if(gameOver === true){
        return;
    }
    let position = Math.floor(Math.random() * 9);

    while(gameBoard[position] !== null){
        position = Math.floor(Math.random() * 9);
    }
    //Putting the move on the gameboard
    if(playerTurn === player1 && player1.getName() === "Computer 1"){
        domGameBoard[position].style.color = "lightblue";
    }
    else{
        domGameBoard[position].style.color = "red";
    }
    gameBoard[position] = player.getMark();
    domGameBoard[position].textContent = player.getMark();
    checkWinner(player);
    checkDraw();
    playerTurn = player;
    checkTurn(player1, player2);
    
    if(playerTurn.getName() === "Computer 1" && playerTurn.getTurn() === true){
        computerMove(player1);
    }
    else if(playerTurn.getName() === "Computer 2" && playerTurn.getTurn() === true){
        computerMove(player2);
    }
}
// After defining domGameBoard and resetButton
domGameBoard.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

function handleCellClick(position) {
    if (gameBoard[position] !== null || gameOver) {
        return;
    }

    makeMove(position); // Make the current player's move

    // Check if the next turn is for the computer and if the game is still ongoing
    if (!gameOver) {
        if (playerTurn === player1 && player1.getName() === "Computer 1") {
            computerMove(player1);
        } else if (playerTurn === player2 && player2.getName() === "Computer 2") {
            computerMove(player2);
        }
    }
}

function makeMove(position) {
    gameBoard[position] = playerTurn.getMark();
    domGameBoard[position].textContent = playerTurn.getMark();

    if(playerTurn === player1){
        domGameBoard[position].style.color = "lightblue";
    }
    else{
        domGameBoard[position].style.color = "red";
    }

    checkWinner(playerTurn);
    checkDraw();
    if (!gameOver) {
        switchTurn(); // Switch turn only if the game is not over
    }
}

function switchTurn() {
    playerTurn = (playerTurn === player1) ? player2 : player1;
    displayTurn.textContent = `It is ${playerTurn.getName()}'s turn.`;
}