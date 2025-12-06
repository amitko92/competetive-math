import React from 'react';
import { useGame } from '../../../stores/app.store';
import { GameActiveState } from '../../../types/game-active-state.type';
import { useSetting } from '../../../stores/setting.store';
import StartGameBtn from '../../buttons/StartGameBtn';
import { codeToTag } from '../../../types/game-difficulty.type';

const StartingGame = () => {

    const setting = useSetting();
    const { gameActiveState } = useGame();
    const difficultyTag = codeToTag(setting.difficulty);

    if (gameActiveState !== GameActiveState.start) {
        return null;
    }

    return (
        <div className='flex w-full h-full place-items-start justify-center'>
            <div className='flex p-3 justify-center flex-col gap-4'>
                <div className='text-4xl'>Starting New Game</div>
                <div className='text-2xl'>difficulty: {difficultyTag}</div>
                <StartGameBtn />
            </div>
        </div>
    );
}

export default StartingGame;