import React from 'react';

const Spinner = ({h}) => {

    console.log(h);
    return (
        <div>
            <div className={`flex justify-center items-center h-[${h}]`}>
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Spinner;