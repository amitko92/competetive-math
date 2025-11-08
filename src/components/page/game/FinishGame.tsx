import React from 'react';
import { GameActiveState } from '../../../types/game-active-state.type';
import { useGame } from '../../../stores/app.store';

const FinishGame = () => {

    const { gameActiveState } = useGame();

    if (gameActiveState !== GameActiveState.finsh) {
        return null;
    }

    return (
        <div>FinishGame</div>
    );
}

export default FinishGame;