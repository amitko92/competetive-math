import React from 'react';
import { useApp } from '../../../stores/app.store';
import { CurrentPage } from '../../../types/current-page.type';

const Game = () => {

    const { currentPage } = useApp();

    if (currentPage !== CurrentPage.game) {
        return null;
    }

    return (
        <div className='w-full h-full p-5'>
            <div className='flex justify-between p-2 text-center align-center mb-5'>
                <div>
                    <div>
                        Level: 1
                    </div>
                    <div>
                        Score: 0
                    </div>
                    <div>
                        Question: 2/5
                    </div>
                </div>

                <div className='flex flex-col text-center align-center'>
                    <span>
                        What is 2 + 2 = ?
                    </span>
                    <span className='text-2xl font-bold'>
                        Time Left: 25s
                    </span>
                </div>
                <div></div>
            </div>

            <div className='flex justify-center p-2 flex-start h-full'> 
                <input />
                <button type='button'>Submit</button>
            </div>
        </div>
    )
}

export default Game;