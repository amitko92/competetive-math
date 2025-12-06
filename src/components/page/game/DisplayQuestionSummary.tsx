import React from 'react';
import { useGame } from '../../../stores/app.store';
import type { IQuestion } from '../../../intrfaces/game.interface';

const DisplayQuestionSummary = () => {

    const { currentLevel } = useGame();

    return (
        <div className='flex flex-col gap-1 p-1 w-55'>
            {currentLevel.questions.map((question: IQuestion, index: number) => {

                const isCorrect = question.userAnswer === question.answer.toLocaleString();

                const tailwindC = isCorrect ? 'bg-green-600 text-green-100' : 'line-through bg-rose-600 text-rose-100';

                return <div className={"text-xl p-1 rounded-xs " + tailwindC}>{`${index + 1}. ${question.question} = ${question.userAnswer}`}</div>
            })}
        </div>
    );
}

export default DisplayQuestionSummary;