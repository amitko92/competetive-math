import type { IGame, IGameLevel, IQuestion } from "../../intrfaces/game.interface";
import { GameActiveState } from "../../types/game-active-state.type";
import type { MathOperator } from "../../types/math-operator.type";

const gameQuestionData: IQuestion = {
    answer: 0,
    question: '',
    userAnswer: '',
}

const gameLevelData: IGameLevel = {
    currentQuestionIndex: -1,
    level: 1,
    operators: [] as MathOperator[],
    questions: [] as IQuestion[],
}

const gameData: IGame = {
    score: 0,
    gameActiveState: GameActiveState.start,
    streak: 0,
    currentLevel: gameLevelData,
    timeRemaining: 0,
};


export { gameQuestionData, gameLevelData };

export default gameData;