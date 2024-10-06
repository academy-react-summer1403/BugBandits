import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginTitle = ({log,text}) => {
    return (
        <div>
            <div>
            <span className="w-20 h-16 inline-block">logo</span>
            <span className="inline-block align-middle text-charcoal_gray text-4xl font-bold">آکادمی سپهر</span>
        </div>
        <div className="mt-5">
            <h2 className="text-charcoal_gray text-xl font-bold pb-2"> ورود با موبایل</h2>
            <span className="text-charcoal_gray pl-2 text-sm">{text}</span>
            <NavLink to="/register" className="text-ocean_blue text-sm">{log}</NavLink>
        </div>
        </div>
    );
}

export  {LoginTitle};
