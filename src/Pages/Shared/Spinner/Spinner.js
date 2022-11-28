import React from 'react';

const Spinner = () => {
    return (

        <div className='h-full w-full relative'>
            <div style={{ borderTopColor: "transparent" }}
                className="w-16 h-16 border-4 right-1/2	 fixed top-1/2 border-blue-400 border-dotted rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;