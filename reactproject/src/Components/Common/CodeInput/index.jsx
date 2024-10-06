import React from 'react';

const CodeInput = () => {
    return (
        <div className="flex gap-8 mt-4">
            <input type="text" maxlength="1" className="w-12 h-12 rounded-lg bg-soft_grey outline-none text-2xl text-center align-middle"/>
            <input type="text" maxlength="1" className="w-12 h-12 rounded-lg bg-soft_grey outline-none text-2xl text-center align-middle"/>
            <input type="text" maxlength="1" className="w-12 h-12 rounded-lg bg-soft_grey outline-none text-2xl text-center align-middle"/>
            <input type="text" maxlength="1" className="w-12 h-12 rounded-lg bg-soft_grey outline-none text-2xl text-center align-middle"/>
        </div>
    );
}

export default CodeInput;
