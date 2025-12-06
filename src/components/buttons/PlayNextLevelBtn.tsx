import React from 'react';
import Button from './Button';
import { useGame, useStartNewLevel } from '../../stores/app.store';
import { useSetting } from '../../stores/setting.store';
import createNewLevel from '../../logic/create-new-level';
import PlayArrow from '../icons/PlayArrow.icon';

const PlayNextLevelBtn = () => {

    const startNewLevel = useStartNewLevel();
    const { difficulty, numOfQuestions, maxHearts } = useSetting();
    const { currentLevel, hearts, gameScore } = useGame();

    return (
        <Button
            onClick={() => {
                const { levelStreak, levelScore} = currentLevel;
                const newHearts = hearts + 1 + (levelStreak >= 3 ? 1 : 0);
                const level = createNewLevel(difficulty, numOfQuestions, currentLevel.level + 1);

                startNewLevel(level, Math.min(newHearts, maxHearts), levelScore);
            }}
            icon={<PlayArrow height={'32px'} width={'32px'} />}
        >
            Start Next Level
        </Button>
    );
}

export default PlayNextLevelBtn;