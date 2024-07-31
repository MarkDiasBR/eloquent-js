function chessboard(size) {
    let isBlack = true;

    for (let row = 1; row <= size; row++) {
        isBlack = !isBlack;
        let myRowString = "";

        for (let element = 1; element <= size; element++) {
            myRowString += (isBlack ? "#" : " ");
            isBlack = !isBlack;
        }

       console.log(myRowString);
    } 
}

chessboard(8);