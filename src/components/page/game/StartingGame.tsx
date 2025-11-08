import React from 'react';
import { useGame, useStartNewGame } from '../../../stores/app.store';
import { GameActiveState } from '../../../types/game-active-state.type';
import { useSetting } from '../../../stores/setting.store';
import createNewLevel from '../../../logic/create-new-level';
import { MathOperator } from '../../../types/math-operator.type';

const StartingGame = () => {

    const { difficulty, numOfQuestions, timeLimitOfQuestion } = useSetting();
    const { gameActiveState } = useGame();
    const startNewGame = useStartNewGame();

    const operators: MathOperator[] = [MathOperator.plus];
    const firstLevel = createNewLevel(difficulty, numOfQuestions, operators, 1);

    if (gameActiveState !== GameActiveState.start) {
        return null;
    }

    return (
        <div>
            <button
                type='button'
                className='bg-gray-100 hover:bg-blue-50 py-1 px-2 text-xl border-1 border-bg-gray-200 rounded hover:cursor-pointer'
                onClick={() => startNewGame(firstLevel, timeLimitOfQuestion)}
            >
                Start Game
            </button>
            {JSON.stringify(firstLevel)}
        </div>
    );
}

export default StartingGame;