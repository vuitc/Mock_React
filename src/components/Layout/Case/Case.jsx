import React from 'react';
import '~/pages/Home/home.css';
import Car from '~/assets/images/head1.jpg';
import CardItem1 from '~/assets/images/card-item1.png';
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';

const Case = () => {
    return (
        <>
            {/* {section 2:case} */}
            <div className="case">
                <div className="case-box">
                    <FaShoppingBag />
                    <h2 className="case-heading">Case Studies</h2>
                    <div className="case-devider"></div>
                    <p className="case-title containerss">
                        Programmics Case Studies will help to understand our Problem-solving methods and how Programmics
                        help customers by providing them better services.
                    </p>
                </div>
                <div className="grid wide">
                    <div className="case-flex">
                        <div className="case-card">
                            <div className="case-img">
                                <img src={Car} alt="" className="case-card-img" />
                                <img src={CardItem1} alt="" className="case-card-thumbnail" />
                            </div>
                            <div className="case-body">
                                <h2 className="case-body-heading">Agriculture Industry</h2>
                                <div className="case-body-devider"></div>
                                <p className="case-body-title">
                                    Programmics resolved the problems that were faced by Agro-based products ltd by
                                    providing them progressive approach-based application software.
                                </p>
                                <button className="customButton">
                                    <span>
                                        <span>Read More</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="case-card ">
                            <div className="case-img">
                                <img src={Car} alt="" className="case-card-img" />
                                <img src={CardItem1} alt="" className="case-card-thumbnail" />
                            </div>
                            <div className="case-body">
                                <h2 className="case-body-heading">Agriculture Industry</h2>
                                <div className="case-body-devider"></div>
                                <p className="case-body-title">
                                    Programmics resolved the problems that were faced by Agro-based products ltd by
                                    providing them progressive approach-based application software.
                                </p>
                                <button className="customButton">
                                    <span>
                                        <span>Read More</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="case-card ">
                            <div className="case-img">
                                <img src={Car} alt="" className="case-card-img" />
                                <img src={CardItem1} alt="" className="case-card-thumbnail" />
                            </div>
                            <div className="case-body">
                                <h2 className="case-body-heading">Agriculture Industry</h2>
                                <div className="case-body-devider"></div>
                                <p className="case-body-title">
                                    Programmics resolved the problems that were faced by Agro-based products ltd by
                                    providing them progressive approach-based application software.
                                </p>
                                <button className="customButton">
                                    <span>
                                        <span>Read More</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Case;
