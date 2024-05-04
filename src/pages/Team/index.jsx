import React from 'react';
import Breadcrumb from '~/components/Breakcrumb';
import '~/pages/Team/team.css';
import CD from '~/assets/images/m1.jpg';
import Button from '~/components/Button';
function Team() {
    const breakcrumb = { label: 'Our Team' };
    const buttonA = { label: 'Get Help here', width: '180px' };
    return (
        <React.Fragment>
            <Breadcrumb item={breakcrumb} />
            <div className="t-teams">
                <div className="t-cards">
                    <div className="t-thumb">
                        <img src={CD} alt="" className="t-img" />
                        <div className="t-thumb-icons">
                            <a href="" class="fa-brands fa-facebook"></a>
                            <a href="" class="fa-brands fa-linkedin-in"></a>
                            <a href="" class="fa-brands fa-vimeo-v"></a>
                            <a href="" class="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                    <h2 className="t-heading">Katie Hilton</h2>
                    <p className="t-title">Designer</p>
                </div>
                <div className="t-cards">
                    <div className="t-thumb">
                        <img src={CD} alt="" className="t-img" />
                        <div className="t-thumb-icons">
                            <a href="" class="fa-brands fa-facebook"></a>
                            <a href="" class="fa-brands fa-linkedin-in"></a>
                            <a href="" class="fa-brands fa-vimeo-v"></a>
                            <a href="" class="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                    <h2 className="t-heading">Katie Hilton</h2>
                    <p className="t-title">Designer</p>
                </div>
                <div className="t-cards">
                    <div className="t-thumb">
                        <img src={CD} alt="" className="t-img" />
                        <div className="t-thumb-icons">
                            <a href="" class="fa-brands fa-facebook"></a>
                            <a href="" class="fa-brands fa-linkedin-in"></a>
                            <a href="" class="fa-brands fa-vimeo-v"></a>
                            <a href="" class="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                    <h2 className="t-heading">Katie Hilton</h2>
                    <p className="t-title">Designer</p>
                </div>
                <div className="t-cards">
                    <div className="t-thumb">
                        <img src={CD} alt="" className="t-img" />
                        <div className="t-thumb-icons">
                            <a href="" class="fa-brands fa-facebook"></a>
                            <a href="" class="fa-brands fa-linkedin-in"></a>
                            <a href="" class="fa-brands fa-vimeo-v"></a>
                            <a href="" class="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                    <h2 className="t-heading">Katie Hilton</h2>
                    <p className="t-title">Designer</p>
                </div>
                <div className="t-cards">
                    <div className="t-thumb">
                        <img src={CD} alt="" className="t-img" />
                        <div className="t-thumb-icons">
                            <a href="" class="fa-brands fa-facebook"></a>
                            <a href="" class="fa-brands fa-linkedin-in"></a>
                            <a href="" class="fa-brands fa-vimeo-v"></a>
                            <a href="" class="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                    <h2 className="t-heading">Katie Hilton</h2>
                    <p className="t-title">Designer</p>
                </div>
                <div className="t-cards">
                    <div className="t-thumb">
                        <img src={CD} alt="" className="t-img" />
                        <div className="t-thumb-icons">
                            <a href="" class="fa-brands fa-facebook"></a>
                            <a href="" class="fa-brands fa-linkedin-in"></a>
                            <a href="" class="fa-brands fa-vimeo-v"></a>
                            <a href="" class="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                    <h2 className="t-heading">Katie Hilton</h2>
                    <p className="t-title">Designer</p>
                </div>
                <div className="t-cards">
                    <div className="t-thumb">
                        <img src={CD} alt="" className="t-img" />
                        <div className="t-thumb-icons">
                            <a href="" class="fa-brands fa-facebook"></a>
                            <a href="" class="fa-brands fa-linkedin-in"></a>
                            <a href="" class="fa-brands fa-vimeo-v"></a>
                            <a href="" class="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                    <h2 className="t-heading">Katie Hilton</h2>
                    <p className="t-title">Designer</p>
                </div>
                <div className="t-cards">
                    <div className="t-thumb">
                        <img src={CD} alt="" className="t-img" />
                        <div className="t-thumb-icons">
                            <a href="" class="fa-brands fa-facebook"></a>
                            <a href="" class="fa-brands fa-linkedin-in"></a>
                            <a href="" class="fa-brands fa-vimeo-v"></a>
                            <a href="" class="fa-brands fa-twitter"></a>
                        </div>
                    </div>
                    <h2 className="t-heading">Katie Hilton</h2>
                    <p className="t-title">Designer</p>
                </div>
            </div>
            <div className="t-foots">
                <div className="t-foot">
                    <div className="t-foot-item">
                        <i class="fa-regular fa-comments"></i>
                        <div className="t-foot-box">
                            <h2 className="t-foot-heading">We're Here To Help</h2>
                            <p className="t-foot-title">Businesses today cross borders and regions, so you need</p>
                        </div>
                    </div>
                    <div className="t-foot-item">
                        <div className="btnSF">
                            <span>Read More</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Team;
