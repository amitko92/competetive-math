import { GameDifficulty } from "../types/game-difficulty.type";
import { MathOperator } from "../types/math-operator.type";
import { calculateMaxIntOperatorDivide, calculateMaxIntOperatorMultiply, calculateMaxIntOperatorsPlusOrMinus } from "./calculate-max-integer";
import { calculateMinIntOperatorDivide, calculateMinIntOperatorMultiply, calculateMinIntOperatorsPlusOrMinus } from "./calculate-min-integer";


function generateQuestion(
  difficulty: GameDifficulty,
  mathOperators: MathOperator[],
  level: number,
): string {

  const operator = mathOperators[getRandomInteger(0, mathOperators.length - 1)];

  const min = calculateMinInteger(difficulty, level, operator);
  const max = calculateMaxInteger(difficulty, level, operator);
  const a = getRandomInteger(min, max);
  const b = getRandomInteger(min, max);

  const question = `${a} ${operator} ${b}`;
  console.log(question);
  return question;
}

function calculateMaxInteger(difficulty: GameDifficulty, level: number, operator: MathOperator): number {

  if (level <= 3) {

    return calculateMinIntOperatorsPlusOrMinus(difficulty, level);
  }

  if (level == 4) { // operator is multiply

    return calculateMinIntOperatorMultiply(difficulty);
  }

  if (level == 5) { // operator is operator or multiply or minus.

    if (operator === MathOperator.multiply) {
      return calculateMinIntOperatorMultiply(difficulty);
    }

    return calculateMinIntOperatorsPlusOrMinus(difficulty, level);
  }

  if (level == 6) { // operator is divide

    return calculateMinIntOperatorDivide();
  }

  if (operator === MathOperator.minus || operator === MathOperator.plus) {
    return calculateMinIntOperatorsPlusOrMinus(difficulty, level);
  }

  if (operator === MathOperator.divide) {
    return calculateMinIntOperatorDivide();
  }

  // operator === MathOperator.multiply
  return calculateMinIntOperatorMultiply(difficulty);
}

function calculateMinInteger(difficulty: GameDifficulty, level: number, operator: MathOperator): number {

  if (level <= 3) {

    return calculateMaxIntOperatorsPlusOrMinus(difficulty, level);
  }

  if (level == 4) { // operator is multiply

    return calculateMaxIntOperatorMultiply(difficulty);
  }

  if (level == 5) { // operator is operator or multiply or minus.

    if (operator === MathOperator.multiply) {
      return calculateMaxIntOperatorMultiply(difficulty);
    }

    return calculateMaxIntOperatorsPlusOrMinus(difficulty, level);
  }

  if (level == 6) { // operator is divide

    return calculateMaxIntOperatorDivide(difficulty, level);
  }

  if (operator === MathOperator.minus || operator === MathOperator.plus) {
    return calculateMaxIntOperatorsPlusOrMinus(difficulty, level);
  }

  if (operator === MathOperator.divide) {
    return calculateMaxIntOperatorDivide(difficulty, level);
  }

  // operator === MathOperator.multiply
  return calculateMaxIntOperatorMultiply(difficulty);
}

function getRandomInteger(min: number, max: number): number {

  min = Math.ceil(min); // Ensure min is rounded up to the nearest whole number
  max = Math.floor(max); // Ensure max is rounded down to the nearest whole number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default generateQuestion;