import React from 'react';
import Heart from '../../icons/Heart.icon';
import { useGame } from '../../../stores/app.store';

const DisplayHearts = () => {

    const { hearts } = useGame();
    const numbers = Array.from({ length: hearts }, (_, i) => i + 1);

    const heartIcons = numbers.map(() => (
        <Heart full width={'32px'} height={'32px'} />
    ));

    return (
        <div className='flex justify-start align-start gap-1 w-auto'>
            {heartIcons}
        </div>
    );
}

export default DisplayHearts;