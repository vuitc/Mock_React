import React, { useState } from 'react';
import '~/pages/About/about.css';
import Breadcrumb from '~/components/Breakcrumb';
import Pro from '~/assets/images/card1.jpg';
import Devider from '~/components/Devider';
import clsx from 'clsx';
import Help from '~/components/Layout/Help/Help';
function About() {
    const [isOpen, setIsOpen] = useState([]);
    const toggleAccordion = (index) => {
        setIsOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            for (let i = 0; i < newState.length; i++) {
                if (i !== index) {
                    newState[i] = false;
                }
            }
            return newState;
        });
    };

    const accordions = [
        {
            heading: 'What does Programic stand for?',
            answer: 'Programmics ensure to deliver diligent customer Software service through a deep-set commitment mechanism to our clients. Programmics have a customer-centric dedication model defines, how we are well-engaged with our clients, offering specializing Software services and solutions that meet the distinct need of our valued clients. Programmics domain expertise in Web development, Digital Marketing, Customized Software development, Augmented reality, App development, Magneto Development, and e-commerce app development helps our clients to get quality Software products and services. Programmics have made significant investments in digital products and application software, Vertical, and horizontal digital products. Programmics help to build and create a responsive and mobile-friendly website that will stand out on search engines organically. Programmics  help you to improve your website visibility and how to optimize SEO strategy. Programmics also provides Software services like App development, Magneto Development, and e-commerce app development.',
        },
        {
            heading: 'How Programmics Work with Clients?',
            answer: 'Programmics ensure to deliver diligent customer Software service through a deep-set commitment mechanism to our clients. Programmics have a customer-centric dedication model defines, how we are well-engaged with our clients, offering specializing Software services and solutions that meet the distinct need of our valued clients. Programmics domain expertise in Web development, Digital Marketing, Customized Software development, Augmented reality, App development, Magneto Development, and e-commerce app development helps our clients to get quality Software products and services. Programmics have made significant investments in digital products and application software, Vertical, and horizontal digital products. Programmics help to build and create a responsive and mobile-friendly website that will stand out on search engines organically. Programmics  help you to improve your website visibility and how to optimize SEO strategy. Programmics also provides Software services like App development, Magneto Development, and e-commerce app development.',
        },
        {
            heading: 'What are Programmics Key Skills?',
            answer: 'Programmics ensure to deliver diligent customer Software service through a deep-set commitment mechanism to our clients. Programmics have a customer-centric dedication model defines, how we are well-engaged with our clients, offering specializing Software services and solutions that meet the distinct need of our valued clients. Programmics domain expertise in Web development, Digital Marketing, Customized Software development, Augmented reality, App development, Magneto Development, and e-commerce app development helps our clients to get quality Software products and services. Programmics have made significant investments in digital products and application software, Vertical, and horizontal digital products. Programmics help to build and create a responsive and mobile-friendly website that will stand out on search engines organically. Programmics  help you to improve your website visibility and how to optimize SEO strategy. Programmics also provides Software services like App development, Magneto Development, and e-commerce app development.',
        },
    ];
    const breakcrumb = { label: 'About' };
    const deviderProgram = { background: '#0d6efd', margin: '0' };
    return (
        <React.Fragment>
            <Breadcrumb item={breakcrumb} />
            <div className="a-cards">
                <div className="a-program">
                    <div className="a-program-thumb">
                        <img src={Pro} alt="" />
                    </div>
                    <div className="a-program-box">
                        <span className="a-subject">Programic</span>
                        <h2 className="a-program-heading">Who we are</h2>
                        <Devider styles={deviderProgram} />
                        <p className="a-program-title">
                            Programmics is an Indian company delivering digital Software Services to users. Programmics,
                            Raipur assist and support people who want to change their path-from traditional to digital
                            transformation. Digital transformation has been showing up advancement in technology. Thus,
                            Programmics deliver the latest services to meet up the upcoming trends. Programmics
                            digitally work on your problems with the help of software applications. Programmics use the
                            latest software technology and provide quality assurance services.{' '}
                            <strong> Programmics software product and services </strong>
                            assure you to deliver a product that will give you the best quality services that will help
                            you to thrive in your business.
                        </p>
                        <button className="btnSF a-bt">
                            <span>Read More</span>
                        </button>
                    </div>
                </div>
                <div className="a-cards-box">
                    <div className="a-card">
                        <i class="fa-solid fa-clock"></i>
                        <div className="a-card-content">
                            <h2 className="a-card-heading">Programmics History</h2>
                            <p className="a-card-title">
                                Programmics, Raipur is Established in 2018 in Raipur and has pioneered in Information
                                solutions from customized software & application development to e-commerce App
                                Development. Programmics is the first Indian company of Raipur who is provided its
                                services at a minimal cost. Our products are the result of accepting the transformation
                                change, from industrial to information changes.
                            </p>
                        </div>
                    </div>
                    <div className="a-card">
                        <i class="fa-solid fa-clock"></i>
                        <div className="a-card-content">
                            <h2 className="a-card-heading">Programmics History</h2>
                            <p className="a-card-title">
                                Programmics, Raipur is Established in 2018 in Raipur and has pioneered in Information
                                solutions from customized software & application development to e-commerce App
                                Development. Programmics is the first Indian company of Raipur who is provided its
                                services at a minimal cost. Our products are the result of accepting the transformation
                                change, from industrial to information changes.
                            </p>
                        </div>
                    </div>
                    <div className="a-card">
                        <i class="fa-solid fa-clock"></i>
                        <div className="a-card-content">
                            <h2 className="a-card-heading">Programmics History</h2>
                            <p className="a-card-title">
                                Programmics, Raipur is Established in 2018 in Raipur and has pioneered in Information
                                solutions from customized software & application development to e-commerce App
                                Development. Programmics is the first Indian company of Raipur who is provided its
                                services at a minimal cost. Our products are the result of accepting the transformation
                                change, from industrial to information changes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="a-team-program">
                <div className="contain-boxs">
                    <h2 className="a-team-program-heading">About Programic</h2>
                    <Devider styles={deviderProgram} />
                    <p className="a-team-program-title">Programmics adore you to understand us more.</p>
                    {accordions.length > 0 ? (
                        <ul className="a-team-questions">
                            {accordions.map((acc, index) => (
                                <li
                                    className={clsx('a-team-question', { active: isOpen[index] })}
                                    onClick={() => toggleAccordion(index)}
                                    key={index}
                                >
                                    <i
                                        className={clsx('fa-solid', {
                                            'fa-plus': !isOpen[index],
                                            'fa-minus': isOpen[index],
                                        })}
                                    ></i>
                                    <span className="a-team-question-heading">{acc.heading}</span>
                                    <p className="a-team-answer">{acc.answer}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No accordions</p>
                    )}

                    <h2 className="a-team-heading-foot">Velief Of Team Programic</h2>
                </div>
            </div>

            <div className="a-customer">
                <div className="a-customer-box">
                    <i class="fa-solid fa-table"></i>
                    <h2 className="a-customer-heading">Customer-centric outlook</h2>
                    <p className="a-customer-title">
                        Programmics always work on customers’ problems by providing them our valuable assistance and
                        support in an imperative way.
                    </p>
                </div>
                <div className="a-customer-box">
                    <i class="fa-solid fa-table"></i>
                    <h2 className="a-customer-heading">Customer-centric outlook</h2>
                    <p className="a-customer-title">
                        Programmics always work on customers’ problems by providing them our valuable assistance and
                        support in an imperative way.
                    </p>
                </div>
                <div className="a-customer-box">
                    <i class="fa-solid fa-table"></i>
                    <h2 className="a-customer-heading">Customer-centric outlook</h2>
                    <p className="a-customer-title">
                        Programmics always work on customers’ problems by providing them our valuable assistance and
                        support in an imperative way.
                    </p>
                </div>
                <div className="a-customer-box">
                    <i class="fa-solid fa-table"></i>
                    <h2 className="a-customer-heading">Customer-centric outlook</h2>
                    <p className="a-customer-title">
                        Programmics always work on customers’ problems by providing them our valuable assistance and
                        support in an imperative way.
                    </p>
                </div>
            </div>
            {/* <div className="a-team-break"></div>
            <Help /> */}
        </React.Fragment>
    );
}

export default About;
