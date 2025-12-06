import React from 'react';


type Props = {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    icon?: React.ReactNode,
}

const Button: React.FC<Props> = ({ children, onClick, icon }) => {



    return (
        <button
            type='button'
            className='flex items-center justify-center bg-gray-100 hover:bg-blue-100 py-1 px-2 text-2xl border-1 border-bg-gray-200 rounded hover:cursor-pointer'
            onClick={onClick}
        >
            <div className='flex items-center justify-center'>
                {children}
            </div>
            {icon && icon}
        </button>
    );
}

export default Button;