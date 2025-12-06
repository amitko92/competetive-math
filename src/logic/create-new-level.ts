import type { IGameLevel, IQuestion } from "../intrfaces/game.interface";
import { GameDifficulty } from "../types/game-difficulty.type";
import { MathOperator } from "../types/math-operator.type";
import generateQuestion from "./generate-question";

function createNewLevel(
    difficulty: GameDifficulty,
    numOfQuestions: number,
    level: number) {

    const operators: MathOperator[] = calculateOperatorList(difficulty, level);

    const newLevel: IGameLevel = {
        levelStreak: 0,
        level: level,
        currentQuestionIndex: 0,
        operators: operators,
        questions: generateQuestions(difficulty, numOfQuestions, operators, level),
        levelScore: 0
    };

    return newLevel;
}

function generateQuestions(difficulty: GameDifficulty,
    numOfQuestions: number,
    operators: MathOperator[],
    level: number) {
    const questions = [] as IQuestion[];

    for (let i = 0; i < numOfQuestions; i++) {
        const questionText = generateQuestion(difficulty, operators, level);
        const answer = evaluateMathExpression(questionText);
        // For simplicity, we will not calculate the actual answer here.
        // In a real application, you would evaluate the questionText to get the answer.
        questions.push({
            question: questionText,
            answer: answer,
            userAnswer: '',
        });
    }

    return questions;
}

function evaluateMathExpression(expression: string): number {
    // Remove whitespace and validate expression
    const sanitizedExpr = expression.replace(/\s+/g, '');

    // Only allow numbers, basic operators, and parentheses
    if (!/^[0-9+\-*/(). ]+$/.test(sanitizedExpr)) {
        throw new Error('Invalid expression');
    }

    try {
        // Use Function constructor for safer evaluation than eval()
        const result = new Function(`return ${sanitizedExpr}`)();
        return Number(result.toFixed(2)); // Round to 2 decimal places
    } catch (error) {
        console.error('Failed to evaluate expression:', expression);
        throw new Error('Invalid mathematical expression');
    }
}

function calculateOperatorList(difficulty: GameDifficulty,
    level: number): MathOperator[] {

    const operators = [] as MathOperator[];

    if (level == 1) {

        operators.push(MathOperator.plus);
    }

    if (level == 2) {

        operators.push(MathOperator.minus);
    }

    if (level == 3) {

        operators.push(MathOperator.minus, MathOperator.plus);

        if (GameDifficulty.hard == difficulty || GameDifficulty.medium == difficulty) {
            operators.push(MathOperator.minus);
        }
    }

    if (level == 4) {

        operators.push(MathOperator.multiply);
    }

    if (level == 5) {

        operators.push(MathOperator.multiply, MathOperator.plus);

        if (GameDifficulty.hard == difficulty || GameDifficulty.medium == difficulty) {
            operators.push(MathOperator.multiply, MathOperator.plus, MathOperator.minus);
        }
    }

    if (level == 6) {

        operators.push(MathOperator.divide);
    }

    if (level == 7) {

        operators.push(MathOperator.multiply, MathOperator.plus, MathOperator.minus, MathOperator.divide);
    }

    return operators;
}

export default createNewLevel;