import type { IGameLevel, IQuestion } from "../intrfaces/game.interface";
import type { GameDifficulty } from "../types/game-difficulty.type";
import type { MathOperator } from "../types/math-operator.type";
import generateQuestion from "./generate-question";

function createNewLevel(
    difficulty: GameDifficulty,
    numOfQuestions: number,
    operators: MathOperator[],
    level: number) {

    const mewLevel: IGameLevel = {
        level: level,
        currentQuestionIndex: 0,
        operators: operators,
        questions: generateQuestions(difficulty, numOfQuestions, operators, level),
    };

    return mewLevel;
}

export function generateQuestions(difficulty: GameDifficulty,
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

export function getAnswerForQuestion(question: string): number {
    return evaluateMathExpression(question);
}

export function evaluateMathExpression(expression: string): number {
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

export default createNewLevel;