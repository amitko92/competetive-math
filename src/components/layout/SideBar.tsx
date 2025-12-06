import React from 'react';
import SidebarBtn from '../buttons/SidebarBtn';
import { CurrentPage } from '../../types/current-page.type';

const SideBar = () => {

    return (
        <div className={'flex flex-col gap-2 w-15 md:w-50 border-r-1 bg-slate-100 border-slate-300 p-1'}>
            <SidebarBtn page={CurrentPage.game} />
            <SidebarBtn page={CurrentPage.setting} />
            <SidebarBtn page={CurrentPage.scoreboard} />
            <SidebarBtn page={CurrentPage.about} />
        </div>
    );
}

export default SideBar;