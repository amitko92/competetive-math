import React from 'react';
import { useGame } from '../../../stores/app.store';
import { GameActiveState } from '../../../types/game-active-state.type';

const BetweenLevels = () => {


    const { gameActiveState } = useGame();

    if (gameActiveState !== GameActiveState.betweenLevels) {
        return null;
    }

    return (
        <div>BetweenLevels</div>
    );
}

export default BetweenLevels;