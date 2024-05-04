import React from 'react';
import '~/pages/Home/home.css';
const Button = ({ name }) => {
    const item = {
        label: 'Read More',
        width: '160px',
        color: '#fff',
        background: '#3b7eff',
        ...name,
    };
    return (
        <React.Fragment>
            {/* <button className="customButton">
                <span>
                    <span>Get Help Here</span>
                </span>
            </button> */}
            <button
                className="section-program-button"
                style={{ width: item.width, background: item.background, color: item.color }}
            >
                {item.label} <i class="fa-solid fa-arrow-right" style={{ color: item.color }}></i>
            </button>
        </React.Fragment>
    );
};

export default Button;
