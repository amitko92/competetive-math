import React from 'react';
import { useApp } from '../../../stores/app.store';
import { CurrentPage } from '../../../types/current-page.type';
import { useSetGameDifficulty, useSetting } from '../../../stores/setting.store';
import { GameDifficulty } from '../../../types/game-difficulty.type';
import Input from '../../Input';

const Setting = () => {

    const { difficulty, additionPercentagePerLevel,
        bonusBase, timeLimitOfQuestion
    } = useSetting();
    const setGameDifficulty = useSetGameDifficulty();
    const { currentPage } = useApp();

    if (currentPage !== CurrentPage.setting) {
        return null;
    }

    return (
        <div className='flex flex-col p-4 mt-10'>
            <div className='mb-4'>
                <select
                    className='p-2 border border-gray-300 rounded'
                    value={difficulty}
                    onChange={(e) => {

                        const val = Number(e.target.value) as GameDifficulty;
                        setGameDifficulty(val)
                    }}
                >
                    <option value={GameDifficulty.veryEasy}>Very Easy</option>
                    <option value={GameDifficulty.easy}>Easy</option>
                    <option value={GameDifficulty.medium}>Medium</option>
                    <option value={GameDifficulty.hard}>Hard</option>
                </select>
            </div>

            <div className='flex flex-col gap-4'>

                <Input disabled value={additionPercentagePerLevel} label='Addition Percentage Per Level' />
                <Input disabled value={bonusBase} label='bonus Base' />
                <Input disabled value={timeLimitOfQuestion} label='time Limit Of Question' />
            </div>
        </div>
    );
}

export default Setting;