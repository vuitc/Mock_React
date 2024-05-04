import Devider from '~/components/Devider';
import '~/pages/Plan/plan.css';
import React, { useState } from 'react';
import Breadcrumb from '~/components/Breakcrumb';
import Card from '~/components/Card';
import clsx from 'clsx';
function Plan() {
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
        {
            heading: 'How Can Programmics help me?',
            answer: 'Programmics helps you to provide outstanding and exclusive services related to Software technology. Programmics have an excellent team that assists you in creating roadmaps of your business like business goals, cost analysis, key values, target audience, etc. Programmics has excellent and advanced products and services in Web Development, Digital Marketing, Customized Software Development, App Development, and Augmented Reality.',
        },
        {
            heading: 'How much time will Programmics take for developing an application?',
            answer: 'Programmics have their well-formulated Innovative model that will request you to procure all the necessary details of the project like your business goals, budget, target users, etc. Based on that, the Programmics team will create a result-oriented mechanism that will help you to deliver the services within a specified timeframe.',
        },
        {
            heading: 'Can the software be upgraded in the future by Programmics as new technology becomes available?',
            answer: 'Yes, of course! Programmics always support you and are contented to assist you. More, Importantly, Programmics business strategies help their customers to deliver quality products that are more resilient for the future.',
        },
        {
            heading: 'Do Programmics provide technical support and maintenance?',
            answer: 'Programmics are always happy to help you. Yes, Programmics provides technical support and software maintenance if Programmics receive a request from a client.',
        },
        {
            heading:
                'Do I need to be tech-friendly to cooperate with Programmics and order a Customized Software Application?',
            answer: 'Programmics are always happy to help you. Yes, Programmics provides technical support and software maintenance if Programmics receive a request from a client.',
        },
        {
            heading: 'Why should I choose Programmics and not hire my own software development team?',
            answer: 'Programmics are always happy to help you. Yes, Programmics provides technical support and software maintenance if Programmics receive a request from a client.',
        },
        {
            heading: 'Do Programmics offer any discount?',
            answer: 'Programmics are always happy to help you. Yes, Programmics provides technical support and software maintenance if Programmics receive a request from a client.',
        },
        {
            heading: 'How do we keep ourselves informed about progress',
            answer: 'Programmics are always happy to help you. Yes, Programmics provides technical support and software maintenance if Programmics receive a request from a client.',
        },
    ];
    const breaks = { label: 'Pricing And Plans' };
    const midIndex = Math.ceil(accordions.length / 2);
    const deviderPlan = { background: '#0d6efd' };
    const deviderCards = { background: '#0d6efd', margin: '0' };
    const renderAccordions = (list, startIdx) => {
        return list.map((acc, index) => (
            <li
                className={clsx('p-team-question', { active: isOpen[startIdx + index] })}
                onClick={() => toggleAccordion(startIdx + index)}
                key={startIdx + index}
            >
                <div className="p-show">
                    <i
                        className={clsx('fa-solid', {
                            'fa-plus': !isOpen[startIdx + index],
                            'fa-minus': isOpen[startIdx + index],
                        })}
                    ></i>
                    <span className="p-team-question-heading">{acc.heading}</span>
                </div>
                <div>
                    <p className="p-team-answer">{acc.answer}</p>
                </div>
            </li>
        ));
    };

    return (
        <React.Fragment>
            <Breadcrumb item={breaks} />
            <div className="p-contain">
                <div className="p-head">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <h2 className="p-head-heading">Our Pricing</h2>
                    <Devider styles={deviderPlan} />
                    <p className="p-head-title">
                        Programmics deliver the best services and quality products at affordable prices.
                    </p>
                </div>
                <div className="p-cards">
                    <h2 className="p-cards-heading">Software Development Plans</h2>
                    <Devider styles={deviderCards} />
                    <div className="p-box-cards">
                        <Card
                            heading={{ label: 'Basic' }}
                            body={[
                                'Software Consulting.',
                                'Customized Software re-engineering.',
                                'Software Product Development.',
                            ]}
                            money={{ price: '99', month: '99' }}
                            active={0}
                        />
                        <Card
                            heading={{ label: 'Standard' }}
                            body={[
                                'Software Consulting.',
                                'Customized Software re-engineering.',
                                'Software Product Development.',
                                'End-to-end Software Development.',
                                'System Integration Services.',
                            ]}
                            money={{ price: '199', month: '99' }}
                            active={1}
                        />
                        <Card
                            heading={{ label: 'Pro' }}
                            body={[
                                'Software Consulting.',
                                'Customized Software re-engineering.',
                                'Software Product Development.',
                                'End-to-end Software Development.',
                                'System Integration Services.',
                                'Legacy Software Modernization.',
                            ]}
                            money={{ price: '299', month: '99' }}
                            active={0}
                        />
                    </div>
                </div>
                <div className="p-cards">
                    <h2 className="p-cards-heading">Application Development Plans</h2>
                    <Devider styles={deviderCards} />
                    <div className="p-box-cards">
                        <Card
                            heading={{ label: 'Basic' }}
                            body={[
                                'Mobile Strategy & Roadmap.',
                                'Mobile Application Development and Testing.',
                                'Mobile UX design.',
                            ]}
                            money={{ price: '99', month: '99' }}
                            active={0}
                        />
                        <Card
                            heading={{ label: 'Standard' }}
                            body={[
                                'Mobile Strategy & Roadmap.',
                                'Mobile Application Development and Testing.',
                                'Mobile UX design.',
                                'Cross-Platform Application Development.',
                            ]}
                            money={{ price: '199', month: '99' }}
                            active={1}
                        />
                        <Card
                            heading={{ label: 'Pro' }}
                            body={[
                                'Mobile Strategy & Roadmap.',
                                'Mobile Application Development and Testing.',
                                'Mobile UX design.',
                                'Cross-Platform Application Development.',
                                'iOS Mobile Application Development.',
                            ]}
                            money={{ price: '299', month: '99' }}
                            active={0}
                        />
                    </div>
                </div>
                <div className="p-cards">
                    <h2 className="p-cards-heading">Website Development Plans</h2>
                    <Devider styles={deviderCards} />
                    <div className="p-box-cards">
                        <Card
                            heading={{ label: 'Basic' }}
                            body={[
                                'Custom Web Application Design & Development',
                                'Website Design & Development.',
                                'E-Commerce Portal Development.',
                            ]}
                            money={{ price: '99', month: '99' }}
                            active={0}
                        />
                        <Card
                            heading={{ label: 'Standard' }}
                            body={[
                                'Custom Web Application Design & Development',
                                'Website Design & Development.',
                                'E-Commerce Portal Development.',
                                'Website Reengineering.',
                            ]}
                            money={{ price: '199', month: '99' }}
                            active={1}
                        />
                        <Card
                            heading={{ label: 'Pro' }}
                            body={[
                                'Custom Web Application Design & Development',
                                'Website Design & Development.',
                                'E-Commerce Portal Development.',
                                'Website Reengineering.',
                                'Web Maintenance post-go-Live.',
                            ]}
                            money={{ price: '299', month: '99' }}
                            active={0}
                        />
                    </div>
                </div>
            </div>
            <div className="p-faq">
                <div className="p-faq-head">
                    <h2 className="p-faq-heading">FAQ</h2>
                    <Devider styles={{ background: '#0d6efd' }} />
                    <p className="p-faq-title">
                        This is a list of answers to questions that people frequently ask for Programmics. We are
                        delighted to answer your all questions. Ask us freely.
                    </p>
                </div>
                <div className="p-faq-box">
                    <div className="left-column">
                        <ul className="p-team-questions">{renderAccordions(accordions.slice(0, midIndex), 0)}</ul>
                    </div>
                    <div className="right-column">
                        <ul className="p-team-questions">{renderAccordions(accordions.slice(midIndex), midIndex)}</ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Plan;
