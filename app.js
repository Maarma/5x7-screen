import { GameBoard } from "./src/GameBoard.js";
import { Number } from "./src/Number.js";

const boardSize = 7;

const number = new Number();
const gameBoard = new GameBoard(boardSize);
gameBoard.draw(number.getCoordinates());