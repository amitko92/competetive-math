import type { GameActiveState } from "../types/game-active-state.type";
import type { MathOperator } from "../types/math-operator.type";

export interface IGame {
    score: number;
    gameActiveState: GameActiveState;
    streak: number;
    currentLevel: IGameLevel;
    timeRemaining: number;
}

export interface IGameLevel {
    level: number;
    currentQuestionIndex: number;
    operators: MathOperator[];
    questions: IQuestion[];
}

export interface IQuestion {
    question: string;
    answer: number;
    userAnswer: string
}

export interface IGameScore {
    date: string;
    score: number;
    level: number;
    totalQuestions: number;
}
