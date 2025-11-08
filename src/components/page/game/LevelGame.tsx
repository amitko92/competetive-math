import React from 'react';
import { useGame, useSetUserInput } from '../../../stores/app.store';
import { GameActiveState } from '../../../types/game-active-state.type';

const LevelGame = () => {

    const { currentLevel, score, gameActiveState, timeRemaining } = useGame();
    const setUserInput = useSetUserInput();
    const { questions } = currentLevel;
    const numbersOfQuestions = questions.length;

    if( questions.length === 0 || currentLevel.currentQuestionIndex === -1 ) {
        return null;
    }
    
    if (gameActiveState !== GameActiveState.active) {
        return null;
    }
    
    const { question, userAnswer } = questions[currentLevel.currentQuestionIndex];
    const { currentQuestionIndex, level } = currentLevel;

    return (
        <>
            <div className='flex justify-between p-2 text-center align-center mb-5 '>
                <div className='w-1/3'>
                    <div>
                        Level: {level}
                    </div>
                    <div>
                        Score: {score}
                    </div>
                    <div>
                        Question: {currentQuestionIndex + 1}/{numbersOfQuestions}
                    </div>
                </div>

                <div className='flex flex-col text-center align-center w-1/3'>
                    <span>
                        What is {question} = ?
                    </span>
                    <span className='text-2xl font-bold'>
                        Time Left: {timeRemaining}s
                    </span>
                </div>

                <div className='w-1/3'></div>
            </div>

            <div className='flex justify-center items-center p-2 flex-start mt-10'>
                <div className='flex gap-2 h-10'>
                    <input
                        className='bg-gray-100 py-1 px-2 text-xl border-1 focus:bg-blue-50 border-bg-gray-200 rounded'
                        type='string'
                        value={userAnswer}
                        onChange={setUserInput}
                    />
                    <button
                        type='button'
                        className='bg-gray-100 hover:bg-blue-50 py-1 px-2 text-xl border-1 border-bg-gray-200 rounded hover:cursor-pointer'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );


    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        confirm(userAnswer);
    }

    function createNewLevel() {

    }
}

export default LevelGame;