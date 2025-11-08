import React from 'react';
import { useApp } from '../../../stores/app.store';
import { CurrentPage } from '../../../types/current-page.type';

const Scoreboard = () => {

    const { currentPage } = useApp();

    if (currentPage !== CurrentPage.scoreboard) {
        return null;
    }

    return (
        <div>Scoreboard</div>
    );
}

export default Scoreboard;