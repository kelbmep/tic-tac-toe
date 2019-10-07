class TicTacToe {
    constructor() {
        this.array = new Array(3);

        for (var i = 0; i < this.array.length; i++) {
            this.array[i] = new Array(3);
        }
        for (var i = 0; i < this.array.length; i++){
            for (var j = 0; j < this.array.length; j++){
                this.array[i][j] = null;
            }
        }
        this.moves = 0;
    }

    getCurrentPlayerSymbol() {
        if(this.moves % 2 == 0)
            return 'x';
        else 
            return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.array[rowIndex][columnIndex] == null)
        {
            this.array[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.moves++;
        }
    }

    isFinished() {
        if(this.noMoreTurns() || this.getWinner() != null)
            return true;
        else 
            return false;
    }

    getWinner() {
        if((this.array[0][0] == this.array[0][1] && this.array[0][0] == this.array[0][2] && this.array[0][0] != null) ||
        (this.array[0][0] == this.array[1][0] && this.array[0][0] == this.array[2][0] && this.array[0][0] != null))
            return this.array[0][0];
        else if((this.array[2][0] == this.array[2][1] && this.array[2][0] == this.array[2][2] && this.array[2][0] != null) ||
        (this.array[0][2] == this.array[1][2] && this.array[0][2] == this.array[2][2] && this.array[0][2] != null))
            return this.array[2][2];
        else if((this.array[0][0] == this.array[1][1] && this.array[0][0] == this.array[2][2] && this.array[0][0] != null) ||
        (this.array[1][0] == this.array[1][1] && this.array[1][0] == this.array[1][2] && this.array[1][0] != null) ||        
        (this.array[2][0] == this.array[1][1] && this.array[2][0] == this.array[0][2] && this.array[2][0] != null) ||
        (this.array[0][1] == this.array[1][1] && this.array[0][1] == this.array[2][1] && this.array[0][1] != null))
            return this.array[1][1];
        else 
            return null;
    }

    noMoreTurns() {
        if(this.moves == 9)
            return true;
        else
            return false;
    }

    isDraw() {
        if(this.moves == 9 && this.getWinner() == null)
            return true;
        else
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
