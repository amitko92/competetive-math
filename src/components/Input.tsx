import React, { type FC } from 'react';

type Props = {
    value: string | number;
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const Input: FC<Props> = ({ value, label, onChange, disabled = false }) => {


    return (
        <div>
            {label && <label className='text-xl mr-2'>{label}</label>}
            <input
                className='bg-gray-100 py-1 px-2 text-xl border-1 focus:bg-blue-50 border-bg-gray-200 rounded'
                type='string'
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
}

export default Input;