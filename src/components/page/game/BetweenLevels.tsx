import React from 'react';
import { useGame } from '../../../stores/app.store';
import { GameActiveState } from '../../../types/game-active-state.type';
import type { IQuestion } from '../../../intrfaces/game.interface';
import PlayNextLevelBtn from '../../buttons/PlayNextLevelBtn';
import Typography from '../../Typography';
import DisplayQuestionSummary from './DisplayQuestionSummary';
import DisplayHearts from './DisplayHearts';

const BetweenLevels = () => {

    const { gameActiveState, currentLevel, gameScore } = useGame();

    const levelScore = currentLevel.levelScore;

    if (gameActiveState !== GameActiveState.betweenLevels) {
        return null;
    }

    return (
        <div>
            <Typography>
                complete
            </Typography>
            <Typography>
                Level {currentLevel.level}
            </Typography>
            
            <DisplayHearts />
            <div className='mb-2'>Level Score: {levelScore}</div>
            <div className='mb-2'>Totle Score: {gameScore}</div>
            
            <PlayNextLevelBtn />
            <DisplayQuestionSummary /> 

        </div>
    );
}

export default BetweenLevels;