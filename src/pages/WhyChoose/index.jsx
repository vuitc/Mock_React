import React from 'react';
import Breadcrumb from '~/components/Breakcrumb';
import '~/pages/WhyChoose/whychoose.css';
import Button from '~/components/Button';
import Img2 from '~/assets/images/head.jpg';
import Devider from '~/components/Devider';
import Case from '~/components/Layout/Case/Case.jsx';
import { Link } from 'react-router-dom';
import Progress from '~/components/Layout/Progress/Progress';
function WhyChoose() {
    const breakcrumb = { label: 'Why Choose Programic' };
    const btnB = { background: '#eefaf9', color: '#000' };
    const styleD = { margin: '20px 0', background: '#3b7eff' };
    return (
        <React.Fragment>
            <Breadcrumb item={breakcrumb} />

            <div className="w-box">
                <div className="w-box-contain">
                    <div className="w-svg">
                        <i class="fa-solid fa-arrows-to-eye"></i>
                        <h2 className="w-svg-heading">Customer Based Solution</h2>
                        <p className="w-svg-title">
                            Provides integrated and comprehensive IT software custom based solution.
                        </p>
                    </div>
                    <div className="w-svg">
                        <i class="fa-solid fa-arrows-to-eye"></i>
                        <h2 className="w-svg-heading">Customer Based Solution</h2>
                        <p className="w-svg-title">
                            Provides integrated and comprehensive IT software custom based solution.
                        </p>
                    </div>
                    <div className="w-svg">
                        <i class="fa-solid fa-arrows-to-eye"></i>
                        <h2 className="w-svg-heading">Customer Based Solution</h2>
                        <p className="w-svg-title">
                            Provides integrated and comprehensive IT software custom based solution.
                        </p>
                    </div>
                    <div className="w-svg">
                        <i class="fa-solid fa-arrows-to-eye"></i>
                        <h2 className="w-svg-heading">Customer Based Solution</h2>
                        <p className="w-svg-title">
                            Provides integrated and comprehensive IT software custom based solution.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-why">
                <div className="w-why-choose-left">
                    <h1 className="w-why-heading">Programic</h1>
                    <h2 className="w-why-question">Why do Customers Choose Programmics Services and Products?</h2>
                    <ul class="w-why-answer">
                        <li>Competitive and fair rates for software technology Services.</li>
                        <li>Programmics have a proven track of great Success Stories.</li>
                        <li>
                            Programmics have a great pool of excellent and talented technical team that ensures to
                            provide effluent services.
                        </li>
                        <li>Rigorous testing of the projects before “Go-Live.”</li>
                        <li>
                            Programmics Provides Cost-effective Information Technology Solutions to the clients based on
                            their requirements and needs.
                        </li>
                    </ul>

                    <button className="btnSF w-b">
                        <span>Read More</span>
                    </button>
                </div>
                <div className="w-why-choose-right">
                    <img src={Img2} alt="" />
                </div>
            </div>
            <div className="w-contain">
                <div className="w-contain-progress">
                    <h2 className="w-contain-heading">Projects completed before time</h2>
                    <Progress item={{ width: '80%' }} active={1} />
                    <h2 className="w-contain-heading">Investment in Research and Technology</h2>
                    <Progress item={{ width: '40%' }} />
                    <h2 className="w-contain-heading">Speculation cost on Quality Assurance</h2>
                    <Progress item={{ width: '30%' }} />
                </div>
                <div className="w-contain-box">
                    <h2 className="w-contain-head">Why Programmics is best as your technology partner</h2>
                    <p className="w-contain-des">
                        Programmics is your best technology partner due to the fact, Programmics has excellent Research
                        and Services. The progress bar can tell you the competency and precision of the Programmics
                        efforts. Programmics are well-known for their timely provided services. Programmics have
                        delivered most of their products before the timeline. Programmics have extensively invested in
                        technology and research. Hence, Programmics products are exceptional and phenomenal.
                    </p>
                    <button className="btnSF w-color">
                        <span>Read More</span>
                    </button>
                </div>
            </div>
            <div className="w-transformation">
                <div className="w-transformation-thumb">
                    <img src={Img2} alt="" />
                </div>
                <div className="w-transformation-box">
                    <h2 className="w-transformation-heading">
                        Do you have an upstanding Business Model that helps you to evolve in this Information
                        transformation?
                    </h2>
                    <Devider styles={styleD} />
                    <p className="w-transformation-title">
                        The Programmics team will help to make a roadmap for your business software strategies.
                        Programmics will guide you, how can you maintain an equilibrium of your financial stability with
                        the assistance of the Programmics financial managing software module. Programmics has the best
                        and modern technologies that support you to withstand Digital transformation. Programmics,
                        Raipur always stands out in its mission, vision, and value system. Programmics assure you to
                        provide the best services at an affordable price.
                    </p>
                </div>
            </div>
            <div className="w-number">
                <div className="w-number-box">
                    <h2 className="w-number-heading">
                        524<sup>+</sup>
                    </h2>
                    <p className="w-number-title">
                        524+ Information technology Software Projects efficiently delivered to the clients
                    </p>
                </div>
                <div className="w-number-box">
                    <h2 className="w-number-heading">
                        524<sup>+</sup>
                    </h2>
                    <p className="w-number-title">
                        524+ Information technology Software Projects efficiently delivered to the clients
                    </p>
                </div>
                <div className="w-number-box">
                    <h2 className="w-number-heading">
                        524<sup>+</sup>
                    </h2>
                    <p className="w-number-title">
                        524+ Information technology Software Projects efficiently delivered to the clients
                    </p>
                </div>
                <div className="w-number-box">
                    <h2 className="w-number-heading">
                        524<sup>+</sup>
                    </h2>
                    <p className="w-number-title">
                        524+ Information technology Software Projects efficiently delivered to the clients
                    </p>
                </div>
            </div>
            <Case />
            <div className="w-des-box">
                <p className="w-des-text">
                    Our Managed IT services will help you succeed.
                    <Link to="/"> Let’s get started</Link>
                </p>
                <p className="w-text-foot">What Makes Programmics different from Other Companies?</p>
            </div>
        </React.Fragment>
    );
}

export default WhyChoose;
