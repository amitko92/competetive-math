import React from 'react';

type Props = {
    children: React.ReactNode,
} 

const Typography: React.FC<Props> = ({ children }) => {



    return (
        <div>{children}</div>
    );
}

export default Typography;