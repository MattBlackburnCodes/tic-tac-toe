const gameBoard = [, , , , , , , ,];

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
        const computer1 = getPlayer("Computer 1", "X");
        const computer2 = getPlayer("Computer 2", "O");
        console.log(computer1.getStatus(), computer2.getStatus());

    }
    else if(num === 1){
        console.log("Player vs Computer");
        const player1 = getPlayer("Player 1", "X");
        const computer2 = getPlayer("Computer 2", "O");
        console.log(player1.getStatus(), computer2.getStatus());
    }
    else if(num === 2){
        console.log("Player vs Player");
        const player1 = getPlayer("Player 1", "X");
        const player2 = getPlayer("Player 2", "O");
        console.log(player1.getStatus(), player2.getStatus());
    }
    else{
        console.log("Invalid number of players");
    }
}
