import React, { type FC } from 'react';

type Props = {
    children: React.ReactNode;
}

const Card: FC<Props> = ({ children }) => {
    return (
        <div className='bg-indigo-50 border-1 border-bg-indigo-200 rounded-md p-2 shadow-md'>
            {children}
        </div>
    );
}

export default Card;