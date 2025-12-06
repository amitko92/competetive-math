import type { GameDifficulty } from "../types/game-difficulty.type";

export interface ISetting {
    difficulty: GameDifficulty;
    numOfQuestions: number;
    timeLimitOfQuestion: number;
    startMin: number,
    startMax: number,
    maxStartMax: number,
    additionPercentagePerLevel: number,
    numToRemoveFromTimeRemienQuestion: number,
    bonusBase: number,
    maxHearts: number,
}