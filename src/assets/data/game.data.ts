import React from "react";
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
    levelStreak: 0,
    levelScore: 0,
}

const gameData: IGame = {
    gameScore: 0,
    gameActiveState: GameActiveState.start,
    currentLevel: gameLevelData,
    highestStreak: 0,
    hearts: 5,
    inputRef: React.createRef<HTMLInputElement>(),
};


export { gameQuestionData, gameLevelData };

export default gameData;