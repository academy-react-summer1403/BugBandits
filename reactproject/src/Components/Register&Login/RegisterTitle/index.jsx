import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterTitle = ({log}) => {
    return (
        <div>
            <div>
            <span className="w-20 h-16 inline-block">logo</span>
            <span className="inline-block align-middle text-charcoal_gray text-4xl font-bold">آکادمی سپهر</span>
        </div>
        <div>
            <h2 className="text-charcoal_gray text-xl font-bold">ثبت نام</h2>
            <span className="text-charcoal_gray pl-2">حساب کاربری دارید؟</span>
            <NavLink className="text-ocean_blue">{log}</NavLink>
        </div>
        </div>
    );
}

export  {RegisterTitle};
