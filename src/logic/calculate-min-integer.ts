import { GameDifficulty } from "../types/game-difficulty.type";

export function calculateMinInteger(difficulty: GameDifficulty, level: number): number {
  return 10 * level * difficulty;
}

/**
 * Calculate minimum integer based on difficulty, level for plus and minus operators.
 * @param difficulty - difficulty level
 * @param level - current level
 * @param operator - math operator
 * @returns 
 */
export function calculateMinIntOperatorsPlusOrMinus(difficulty: GameDifficulty, level: number): number {

  if (level == 1) {

    return 1;
  }

  if (level == 2) {

    return GameDifficulty.medium <= difficulty ? 5 : 1; // numbers 5 or 1.
  }

  return GameDifficulty.medium <= difficulty ? 10 : 1; // numbers 10 or 1.
}

/**
 * Calculate minimum integer based on difficulty, multiply operators.
 * @param difficulty - difficulty level
 * @returns number
 */
export function calculateMinIntOperatorMultiply(difficulty: GameDifficulty): number {
  return difficulty === GameDifficulty.veryEasy ? 1 : 2;
}

export function calculateMinIntOperatorDivide(): number {
  return 1;
}