import React from 'react';
import { useApp, useGame, useSetUserInput } from '../../../stores/app.store';
import { CurrentPage } from '../../../types/current-page.type';
import StartingGame from './StartingGame';
import LevelGame from './LevelGame';
import FinishGame from './FinishGame';
import BetweenLevels from './BetweenLevels';

const Game = () => {

    const { currentPage } = useApp();
    //const { currentQuestion, currentLevel, score, gameActiveState } = useGame();
    const setUserInput = useSetUserInput();
    //const { question, timeRemaining, userAnswer } = currentQuestion;
    //const { currentQuestionIndex, level } = currentLevel;

    if (currentPage !== CurrentPage.game) {
        return null;
    }

    return (
        <div className='w-full h-full p-5'>
            <StartingGame />
            <LevelGame />
            <FinishGame />
            <BetweenLevels />

        </div>
    );

}

export default Game;