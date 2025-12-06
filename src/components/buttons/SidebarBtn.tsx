import React, { type FC } from 'react';
import { CurrentPage } from '../../types/current-page.type';
import { useApp, useSetCurrentPage } from '../../stores/app.store';
import SettingsRounded from '../icons/SettingsRounded.icon';
import StadiaController from '../icons/StadiaController.icon';
import QuickReference from '../icons/QuickReference.icon';
import RewardedAds from '../icons/RewardedAds.icon';


type Props = {
    page: CurrentPage;
}

const SidebarBtn: FC<Props> = ({ page }) => {

    const { currentPage } = useApp();
    const setCurrentPage = useSetCurrentPage();

    const text = getText(page);
    const icon = getIcon(page);

    const classesFles = 'flex items-center justify-center md:justify-start gap-2 p-2 h-12 rounded-md hover:cursor-pointer transition-colors duration-200';
    const classesText = 'text-xl';
    const classesActive = currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white';

    return (
        <button
            type='button'
            className={classesFles + ' ' + classesActive + ' ' + classesText}
            onClick={() => setCurrentPage(page)}
           
        >
            <div>
                {icon}
            </div>
            <div className='hidden md:block'>
                {text}
            </div>

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

        switch (currentPage) {
            case CurrentPage.game:
                return <StadiaController />;
            case CurrentPage.setting:
                return <SettingsRounded />;
            case CurrentPage.scoreboard:
                return <RewardedAds />;
            case CurrentPage.about:
                return <QuickReference />;
            default:
                return <StadiaController />;
        }
        // SettingsRounded
    }
}

export default SidebarBtn;