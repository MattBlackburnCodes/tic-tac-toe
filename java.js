const gameBoard = new Array(9).fill(null);

const playerOne = {
    name: "",
    mark: "",
};
const playerTwo = {
    name: "",
    mark: "",

};

let player1 = "";
let player2 = "";

let computer1 = "";
let computer2 = "";

//factory function to create the player
const getPlayer = (pName, marker) => {
    const name = pName;
    const validMarker = ['X', 'O'];
    let mark = marker.toUpperCase();

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
        return `${name} is ${mark}`;
    }
    return {getName, getMark, getStatus};
};

const numPlayers = (num) => {
    
    if(num === 0){
        console.log("Computer vs Computer");
        computer1 = getPlayer("Computer 1", "X");
        computer2 = getPlayer("Computer 2", "O");
        console.log(computer1.getStatus(), computer2.getStatus());

    }
    else if(num === 1){
        //To create the player and assign the name and mark
        console.log("Player vs Computer");
        const playerOneName = prompt("Enter your name: ");
        playerOne.name = playerOneName;
        console.log(playerOneName);
        const playerOneMark = prompt("Enter your marker (X/O): ");
        playerOne.mark = playerOneMark;
        console.log(playerOneMark);
        const player1 = getPlayer(playerOne.name, playerOne.mark);

        //To create the computer and assign the name and mark
        computer2 = getPlayer("Computer 2", "O");
        console.log(player1.getStatus(), computer2.getStatus());
    }
    else if(num === 2){
        //To create the first player and assign the name and mark
        console.log("Player vs Player");
        const playerOneName = prompt("Enter your name: ");
        playerOne.name = playerOneName;
        console.log(playerOne.name);
        const playerOneMark = prompt("Enter your marker (X/O): ");
        playerOne.mark = playerOneMark;
        console.log(playerOne.mark);

        player1 = getPlayer(playerOne.name, playerOne.mark);

        //To create the second player and assign the name and mark
        const playerTwoName = prompt("Enter your name: ");
        playerTwo.name = playerTwoName;
        console.log(playerTwo.name);

        if (player1.getMark() === "X"){
            playerTwo.mark = "O";
        }
        else{
            playerTwo.mark = "X";
        }
        console.log(playerTwo.mark);
        player2 = getPlayer(playerTwo.name, playerTwo.mark);
        console.log(player1.getStatus(), player2.getStatus());
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
    }
    else{
        console.log("Invalid move");
    }
}
// To call this command type makeMove(playerOne, 3) in the console.


