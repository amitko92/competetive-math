import React from 'react';
import { useApp } from '../../../stores/app.store';
import { CurrentPage } from '../../../types/current-page.type';

const Setting = () => {

    const { currentPage } = useApp();

    if (currentPage !== CurrentPage.setting) {
        return null;
    }

    return (
        <div>Setting</div>
    );
}

export default Setting;