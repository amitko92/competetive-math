import React from 'react';
import Game from '../page/game/Game.page';
import Scoreboard from '../page/scoreboard/Scoreboard.page';
import About from '../page/about/About.page';
import Setting from '../page/setting/Setting.page';
import { useApp } from '../../stores/app.store';

const MainContent = () => {



    return (
        <div className='m-h-full grow-1'>
            <Game />
            <Setting />
            <Scoreboard />
            <About />
        </div>
    );
}

export default MainContent;