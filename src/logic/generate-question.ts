import type { GameDifficulty } from "../types/game-difficulty.type";
import type { MathOperator } from "../types/math-operator.type";


function generateQuestion(
    difficulty: GameDifficulty, 
    mathOperators: MathOperator[],
    level: number,
): string {

    const min = 1 * level * difficulty;
    const max = 10 * level * difficulty;
    const a = getRandomInteger(min, max);
    const b = getRandomInteger(min, max);
    const operator = mathOperators[getRandomInteger(0, mathOperators.length - 1)];

    const question = `${a} ${operator} ${b}`;
    console.log(question);
    return question;
}

function getRandomInteger(min: number, max: number): number {

  min = Math.ceil(min); // Ensure min is rounded up to the nearest whole number
  max = Math.floor(max); // Ensure max is rounded down to the nearest whole number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default generateQuestion;