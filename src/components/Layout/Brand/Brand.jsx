import React from 'react';
import '~/pages/Home/home.css';
import Brand1 from '~/assets/images/brand1.png';
const Brand = () => {
    return (
        <>
            <div className="grid wide">
                <div className="brand">
                    <img src={Brand1} alt="" />
                    <img src={Brand1} alt="" />
                    <img src={Brand1} alt="" />
                    <img src={Brand1} alt="" />
                    <img src={Brand1} alt="" />
                    <img src={Brand1} alt="" />
                </div>
            </div>
        </>
    );
};

export default Brand;
