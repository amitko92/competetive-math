import React, { type FC } from 'react';
import { CurrentPage } from '../../types/current-page.type';
import { useApp, useSetCurrentPage } from '../../stores/app.store';


type Props = {
    page: CurrentPage;
}

const SidebarBtn: FC<Props> = ({ page }) => {

    const { currentPage } = useApp();
    const setCurrentPage = useSetCurrentPage();

    const text = getText(page);
    const icon = getIcon(page);

    const classesFles = 'flex items-center gap-2 p-2';
    const classesActive = currentPage === page ? 'bg-stone-700 font-bold' : 'hover:bg-stone-600';

    return (
        <button
        type='button'
        className={classesFles + ' ' + classesActive}
        onClick={() => setCurrentPage(page)}
        >
            {text} {icon}
        </button>
    );

    function getText(currentPage: CurrentPage): string {

        switch (currentPage) {
            case CurrentPage.game:
                return 'Game';
            case CurrentPage.setting:
                return 'Settings';
            case CurrentPage.scoreboard:
                return 'Scoreboard';
            case CurrentPage.about:
                return 'About';
            default:
                return '';
        }

    }

    function getIcon(currentPage: CurrentPage): React.ReactNode {

        return null;
    }
}

export default SidebarBtn;