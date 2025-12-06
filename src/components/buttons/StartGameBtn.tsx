import React, { type FC } from 'react';
import PlayArrow from '../icons/PlayArrow.icon';
import { useSetting } from '../../stores/setting.store';
import { useStartNewLevel } from '../../stores/app.store';
import createNewLevel from '../../logic/create-new-level';
import Button from './Button';

type Props = {

}

const StartGameBtn: FC<Props> = ({ }) => {

    const { difficulty, numOfQuestions } = useSetting();
    const startNewLevel = useStartNewLevel();

    return (
        <Button
            onClick={() => {
                const firstLevel = createNewLevel(difficulty, numOfQuestions, 1);
                startNewLevel(firstLevel, 5, 0)
            }}
            icon={<PlayArrow height={'32px'} width={'32px'} />}
        >
            Start Game
        </Button>
    );
}

export default StartGameBtn;