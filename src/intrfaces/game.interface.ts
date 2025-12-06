import React from "react";
import type { GameActiveState } from "../types/game-active-state.type";
import type { MathOperator } from "../types/math-operator.type";

export interface IGame {
    gameScore: number;
    hearts: number;
    highestStreak: number;
    gameActiveState: GameActiveState;
    currentLevel: IGameLevel;
    inputRef: React.RefObject<HTMLInputElement | null>;
}

export interface IGameLevel {
    level: number;
    levelScore: number;
    currentQuestionIndex: number;
    operators: MathOperator[];
    levelStreak: number;
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
