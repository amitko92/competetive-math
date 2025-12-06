import type { GameDifficulty } from "../types/game-difficulty.type";


/**
 * Calculate maximum integer based on difficulty, level for plus and minus operators.
 * @param difficulty - difficulty level
 * @param level - current level
 * @returns 
 */
export function calculateMaxIntOperatorsPlusOrMinus(difficulty: GameDifficulty, level: number): number {

    if (level == 1) {

        return 10 + difficulty - 1; // numbers between 10 to 13.
    }

    if (level == 2) {

        return 20 + (difficulty - 1) * 2; // numbers between 20 to 26.
    }

    return 30 + (difficulty - 1) * 2; // numbers between 20 to 26.

}

/**
 * Calculate maximum integer based on difficulty, multiply operators.
 * @param difficulty - difficulty level
 * @returns 
 */
export function calculateMaxIntOperatorMultiply(difficulty: GameDifficulty): number {
    return 5 + difficulty + 1 // numbers between 5 to 8.
}

/**
 * Calculate maximum integer based on difficulty, divide operator.
 * @param difficulty - difficulty level
 * @param level - current level
 * @returns 
 */
export function calculateMaxIntOperatorDivide(difficulty: GameDifficulty, level: number): number {

    if (level < 6) {
        return 16;
    }

    return 10 + (difficulty - 1) * 2 // numbers between 10 to 16.
}
