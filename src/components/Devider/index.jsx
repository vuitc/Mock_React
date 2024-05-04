import React from 'react';
const Devider = ({ styles }) => {
    const devider = {
        width: '30px',
        height: '2px',
        background: '#4c4c4d',
        margin: '20px auto',
        ...styles,
    };
    return (
        <React.Fragment>
            <div style={devider}></div>
        </React.Fragment>
    );
};

export default Devider;
