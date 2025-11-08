import React from 'react';
import { useApp } from '../../../stores/app.store';
import { CurrentPage } from '../../../types/current-page.type';

const About = () => {

    const { currentPage } = useApp();

    if (currentPage !== CurrentPage.about) {
        return null;
    }

    return (
        <div>About</div>
    );
}

export default About;