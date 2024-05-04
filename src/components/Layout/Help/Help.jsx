import React from 'react';
import '~/pages/Home/home.css';
const Help = () => {
    return (
        <div className="help-you">
            <div className="help-box">
                <div className="help-left">
                    <i class="fa-solid fa-comment-dots"></i>
                    <div className="help-content">
                        <h3 className="help-heading">Programmics, Raipur is Here to help you</h3>
                        <p className="help-title">
                            Programmics, Raipur has helped a lot of businesses to find their perfect Software Solutions.
                            Programmics, Raipur Provides their software services in Web Development, Digital Marketing,
                            Customized Software development, Augmented reality, App development, Magneto Development,
                            and e-commerce app development. If you need our help, Programmics is one call away from you.
                        </p>
                        <p className="help-title">
                            You can also reach Programmics at the below address. First Floor, Jain Software, Jain Dental
                            Hospital, Raipur.
                        </p>
                    </div>
                </div>
                <div className="help-right">
                    <button className="btnSF" style={{ width: '220px' }}>
                        <span>Get Help Here</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Help;
