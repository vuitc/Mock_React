import React from 'react';
import LOGOM from '~/assets/images/Programmics-1.png';
import '~/pages/Footer/footer.css';
import { FaArrowRight } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DCMA from '~/assets/images/dmca.png';
function Footer() {
    return (
        <React.Fragment>
            <div className="grid__full-width b-foot">
                <div className="grid grid-foot">
                    <div className="row">
                        <div className="col l-6 m-12 c-12">
                            <div className="row">
                                <div className="col l-6 header-body-first">
                                    <img src={LOGOM} alt="" />
                                </div>
                                <div className="col l-6">
                                    <div className="row">
                                        <h3 className="col l-6 c-12 mr-2 foot-heading">Programic</h3>
                                        <h3 className="col l-5 c-12 mr-2 foot-heading">Services</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-6 m-12 c-12">
                            <div className="row">
                                <div className="col l-6 c-12">
                                    <h3 className="foot-heading-r">Cloud Services</h3>
                                    <h3 className="foot-heading-r">Shop</h3>
                                    <h3 className="foot-heading-r">Contacts</h3>
                                </div>
                                <div className="col l-6 c-12 subscribe-form">
                                    <label htmlFor="">
                                        <h3 className="foot-heading">Subcribe</h3>
                                    </label>
                                    <div class="input-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter your email"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <button type="submit">
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l-6 c-12 centers">
                            <a href="tel:+912884512">
                                <FaPhoneAlt />
                                <h2 className="inline"> +912884521</h2>
                            </a>
                        </div>
                        <div className="col l-6 c-12 flex-end">
                            <FaFacebook />
                            <FaLinkedinIn />
                            <FaInstagramSquare />
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="center">
                            @2018-2022. Address: Programmics Private Limited, First Floor, New Rajendra Nagar ,Raipur ,
                            Chhattisgarh – 492001
                        </h2>
                    </div>
                </div>
            </div>
            <div className="foot-dcma">
                <img src={DCMA} alt="" />
                <div className="foot-term">
                    <a href="">Terms and Conditions </a>-<a href=""> Privacy Policy</a>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Footer;
