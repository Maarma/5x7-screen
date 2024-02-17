import { GameBoard } from "./src/GameBoard.js";
import { Number } from "./src/Number.js";

const boardSize = 7;

const number = new Number();
const gameBoard = new GameBoard(boardSize);
gameBoard.draw(number.getCoordinates());

const homeMinus1 = document.getElementById("homeMinus1");
const homePlus1 = document.getElementById("homePlus1");
const homeScore = document.getElementById("homeScore");

var score = 0;
homeScore.innerHTML = score;

const handleHomeScorePlus = () => {
    score++;
    if (score > 99){
        score = 0;
    }
    homeScore.innerHTML = score;
  };

  const handleHomeScoreMinus = () => {
    score--;
    if (score < 0){
        score = 99;
    }
    homeScore.innerHTML = score;
  };

  homePlus1.addEventListener("click", handleHomeScorePlus);
  homeMinus1.addEventListener("click", handleHomeScoreMinus);