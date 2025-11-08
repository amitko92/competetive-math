import type { GameDifficulty } from "../types/game-difficulty.type";

export interface ISetting {
    difficulty: GameDifficulty;
    numOfQuestions: number;
    timeLimitOfQuestion: number;
}