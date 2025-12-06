import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col min-h-[20dvh] bg-blue-200 flex items-center justify-center text-3xl font-bold'>
            <div>
                <img src={logo} alt="logo" className='inline-block h-22 ml-4'/>
            </div>
            <div>
                competetive-math
            </div>
        </div>
    );
}

export default Header;