import React from 'react';
import { useApp } from '../../stores/app.store';
import SidebarBtn from '../buttons/SidebarBtn';
import { CurrentPage } from '../../types/current-page.type';

const SideBar = () => {

    const { sideBarOpen } = useApp();

    //const classes = sideBarOpen ? 'w-50' : 'w-10';

    return (
        <div className={'flex flex-col gap-5 w-15 md:w-50 border-r-2 border-stone-500 p-1 md:p-2'}>
            <SidebarBtn page={CurrentPage.game} />
            <SidebarBtn page={CurrentPage.setting} />
            <SidebarBtn page={CurrentPage.scoreboard} />
            <SidebarBtn page={CurrentPage.about} />
        </div>
    );
}

export default SideBar;