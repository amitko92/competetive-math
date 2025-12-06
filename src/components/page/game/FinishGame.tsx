import React from 'react';
import { GameActiveState } from '../../../types/game-active-state.type';
import { useGame } from '../../../stores/app.store';
import StartGameBtn from '../../buttons/StartGameBtn';
import DisplayQuestionSummary from './DisplayQuestionSummary';

const FinishGame = () => {

    const { gameActiveState, currentLevel, score } = useGame();

    if (gameActiveState !== GameActiveState.finshed) {
        return null;
    }

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Game Over!</h2>
            <p className='mb-4 text-xl'>Thank you for playing. Your final score has been recorded.</p>
            <div className='mb-2 text-xl'>Final Score: {score}</div>
            <div className='mb-2 text-xl'>Level Reached: {currentLevel.level}</div>

            <StartGameBtn />
            <DisplayQuestionSummary />
        </div>
    );
}

export default FinishGame;