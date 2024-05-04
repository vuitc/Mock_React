import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '~/pages/Home/home.css';
import Car from '~/assets/images/head.jpg';
import Car1 from '~/assets/images/head3.jpg';
import Car2 from '~/assets/images/head4.jpg';
import Per1 from '~/assets/images/m8-100x100.jpg';
import Car3 from '~/assets/images/menwork.png';
import CardItem1 from '~/assets/images/card-item1.png';
import CardItem2 from '~/assets/images/card-item2.png';
import CardItem3 from '~/assets/images/card-img3.png';
import CardB from '~/assets/images/card1.jpg';
import Avatar from '~/assets/images/avatar.png';
import { AiFillAccountBook } from 'react-icons/ai';
import Brand1 from '~/assets/images/brand1.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaEllo } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight, FaAtom, FaLightbulb, FaShoppingBag, FaArrowRight } from 'react-icons/fa';
import Help from '~/components/Layout/Help/Help';
import { Carousel } from 'react-bootstrap';
function Home() {
    return (
        <React.Fragment>
            <div className="slider-container">
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img src={Car} alt="" className="d-block w-100" />
                        <Carousel.Caption>
                            <div className="banner-box">
                                <h2 className="banner-head">TREND 2024.</h2>
                                <p className="banner-title">
                                    2020 forced the world to re-examine how it lives, works and plays. Discover the
                                    seven trends mapping out the new territory ahead.
                                </p>
                                <button className="banner-button">Read more</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Car1} alt="" className="d-block w-100" />
                        <Carousel.Caption>
                            <div className="banner-box">
                                <h2 className="banner-head">TREND 2024.</h2>
                                <p className="banner-title">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eveniet odio
                                    molestiae.
                                </p>
                                <button className="banner-button">Read more</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Car2} alt="" className="d-block w-100" />
                        <Carousel.Caption>
                            <div className="banner-box">
                                <h2 className="banner-head">TREND 2024.</h2>
                                <p className="banner-title">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eveniet odio
                                    molestiae.
                                </p>
                                <button className="banner-button">Read more</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="banner-card">
                    <div className="banner-item">
                        <div className="card-svg">
                            <i class="fa-solid fa-bullseye"></i>
                        </div>
                        <div className="card-right">
                            <h2 className="card-head">
                                524<sup>+</sup>
                            </h2>
                            <p className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="banner-item">
                        <div className="card-svg">
                            <i class="fa-solid fa-bullseye"></i>
                        </div>
                        <div className="card-right">
                            <h2 className="card-head">
                                524<sup>+</sup>
                            </h2>
                            <p className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className=" banner-item">
                        <div className="card-svg">
                            <i class="fa-solid fa-bullseye"></i>
                        </div>
                        <div className="card-right">
                            <h2 className="card-head">
                                524<sup>+</sup>
                            </h2>
                            <p className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="banner-item">
                        <div className="card-svg">
                            <i class="fa-solid fa-bullseye"></i>
                        </div>
                        <div className="card-right">
                            <h2 className="card-head">
                                524<sup>+</sup>
                            </h2>
                            <p className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {hinh2} */}
            <div className="section">
                <div className="section-content">
                    <div className="n">
                        <div className="row">
                            <div className="col l-6 m-6 c-12">
                                <div className="content-box">
                                    <i class="fa-solid fa-lightbulb"></i>
                                    <span className="content-des-left">
                                        Software innovation, like almost every other kind of innovation, requires the
                                        ability to collaborate and share ideas with other people, and to sit down and
                                        talk with customers and get their feedback and understand their needs.
                                        <figcaption className="content-cap">-- Bill Gates</figcaption>
                                    </span>
                                </div>
                            </div>
                            <div className="col l-6 m-6 c-12 content-des-right">
                                <b>Programmics </b>
                                have designed a unique problem-solving mechanism that helps to understand the problem of
                                our customers and resolve them at progressive speed in the field of Web Development,
                                Digital Marketing, Customized Software Development, App Development, Augmented Reality,
                                Magneto Development, and e-commerce app development.
                                <b> Programmics </b>
                                have created an innovative ecosystem to resolve end-user problems.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                <img src={Car1} alt="" className="case-card-img" />
                                <img src={CardItem2} alt="" className="case-card-thumbnail" />
                            </div>
                            <div className="case-body">
                                <h2 className="case-body-heading">Health Industry</h2>
                                <div className="case-body-devider"></div>
                                <p className="case-body-title">
                                    Programmics helped Public primary care wellness hospital to organized and managed
                                    the patient's clinical records digitally.
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
                                <img src={Car2} alt="" className="case-card-img" />
                                <img src={CardItem3} alt="" className="case-card-thumbnail" />
                            </div>
                            <div className="case-body">
                                <h2 className="case-body-heading">Education Industry</h2>
                                <div className="case-body-devider"></div>
                                <p className="case-body-title">
                                    Programmics helped Woman’s Technical and Science Engineering college to maintain
                                    their employee's attendance record accurately and Precisely.
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
            {/* {section 3: brand} */}
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
            {/* {about our process} */}
            <div className="about-process">
                <div className="grid wide">
                    <div className="row no-gutters">
                        <div className="col l-3 m-6 c-12 process">
                            <div className="process-svg">
                                <div className="process-box">
                                    <AiFillAccountBook />
                                    <span className="process-number">1</span>
                                </div>
                                <span className="process-devider--dashed">
                                    <span class="fa-solid fa-arrow-right process-fa"></span>
                                </span>
                            </div>
                            <h2 className="process-heading">Analysis</h2>
                            <p className="process-title">
                                The Programmics team collect reliable data from primary and authentic sources.
                                Programmics data analyze by a 3-step module system so that Programmics can justify their
                                Software products and services.
                            </p>
                        </div>
                        <div className="col l-3 m-6 c-12 process">
                            <div className="process-svg">
                                <div className="process-box">
                                    <AiFillAccountBook />
                                    <span className="process-number">1</span>
                                </div>
                                <span className="process-devider--dashed">
                                    <span class="fa-solid fa-arrow-right process-fa"></span>
                                </span>
                            </div>
                            <h2 className="process-heading">Design</h2>
                            <p className="process-title">
                                Programmics, Raipur approach pattern is designed to forge our software development
                                products entirely incisive. Programmics designs are outrightly innovative that is
                                affluent for our end users.
                            </p>
                        </div>
                        <div className="col l-3 m-6 c-12 process">
                            <div className="process-svg">
                                <div className="process-box">
                                    <AiFillAccountBook />
                                    <span className="process-number">1</span>
                                </div>
                                <span className="process-devider--dashed">
                                    <span class="fa-solid fa-arrow-right process-fa"></span>
                                </span>
                            </div>
                            <h2 className="process-heading">Development</h2>
                            <p className="process-title">
                                Software implementation and development are thoroughly examined by the Programmics team
                                can accord an outstanding experience to our customers.
                            </p>
                        </div>
                        <div className="col l-3 m-6 c-12 process">
                            <div className="process-svg">
                                <div className="process-box">
                                    <AiFillAccountBook />
                                    <span className="process-number">
                                        <i class="fa-solid fa-check"></i>
                                    </span>
                                </div>
                            </div>
                            <h2 className="process-heading">Testing and Maintenance</h2>
                            <p className="process-title">
                                Testing is a stepping stone that can make Programmics entire efforts viable. Programmics
                                recursive and outsmart maintenance services help Programmics to content our clients
                                conclusively.
                            </p>
                        </div>
                    </div>
                    <div className="process-devider"></div>
                    <div className="process-foot">
                        <button className="process-btn">
                            <i class="fa-solid fa-clock-rotate-left" style={{ paddingRight: '4px' }}></i>
                            About our Process
                        </button>
                    </div>
                </div>
            </div>
            {/* {program system} */}
            <div className="program">
                <div className="program-left">
                    <i class="fa-brands fa-react"></i>
                    <div className="program-content">
                        <h2 className="program-heading">Programmics Value System</h2>
                        <div className="program-devider"></div>
                        <p className="program-title1">Programmics value system is based on three parameters</p>
                        <p className="program-title2">
                            1. Committed to customers: Programmics are always committed to our customers so that we can
                            provide them assured and best services followed by the latest and versatile tech systems.
                        </p>
                        <p className="program-title2">
                            2. Integrity: This is the most affluent and core principle of Programmics. The Programmics
                            team is fully dedicated to it.
                        </p>
                        <p className="program-title2">
                            3. Respect for customers: Respect is what we believe is the right of every customer.
                            Programmics fully owe it.
                        </p>
                    </div>
                </div>
            </div>
            {/* Testimonials */}
            <div className="box-testimonial">
                <div className="position-testimonial"></div>
                <div className="testimonial">
                    <span class="fa-solid fa-quote-left"></span>
                    <h2 className="testimonial-heading">Programmics Testimonials</h2>
                    <div className="testimonial-divider"></div>
                    <p className="testimonial-title">
                        <b>Programmics </b>
                        Clients’ Reviews is a compelling factor to know about the Programmics company’s credentials.
                        <br />
                        First, it provides a clear and vivid scenario of the Programmics. And secondly, it tells
                        customers about our
                        <b> Software products and services.</b>
                    </p>
                </div>

                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <div className="testimonial-card-left">
                            <img src={Per1} alt="" />
                        </div>
                        <div className="testimonial-card-right">
                            <p className="testimonial-card-title">
                                Programmics, Raipur helped me to create a responsive and mobile-friendly website. Now I
                                have experienced upstanding dynamics in my website operations. The time is changing at
                                breakneck speed. I was worried because I wanted to take my business online. And I was
                                looking for a well-known and innovative company. I came to know about Programmics
                                services and their expertise in the field of Web Development. I approached Programmics
                                and quite satisfied with the Software products and services. They have a creative and
                                qualitative team in the web development field. I highly recommend Programmics for web
                                development.
                            </p>
                            <p className="testimonial-name">Kartik Dubey</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-card-left">
                            <img src={Per1} alt="" />
                        </div>
                        <div className="testimonial-card-right">
                            <p className="testimonial-card-title">
                                Programmics, Raipur helped me to create a responsive and mobile-friendly website. Now I
                                have experienced upstanding dynamics in my website operations. The time is changing at
                                breakneck speed. I was worried because I wanted to take my business online. And I was
                                looking for a well-known and innovative company. I came to know about Programmics
                                services and their expertise in the field of Web Development. I approached Programmics
                                and quite satisfied with the Software products and services. They have a creative and
                                qualitative team in the web development field. I highly recommend Programmics for web
                                development.
                            </p>
                            <p className="testimonial-name">Kartik Dubey</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-card-left">
                            <img src={Per1} alt="" />
                        </div>
                        <div className="testimonial-card-right">
                            <p className="testimonial-card-title">
                                Programmics, Raipur helped me to create a responsive and mobile-friendly website. Now I
                                have experienced upstanding dynamics in my website operations. The time is changing at
                                breakneck speed. I was worried because I wanted to take my business online. And I was
                                looking for a well-known and innovative company. I came to know about Programmics
                                services and their expertise in the field of Web Development. I approached Programmics
                                and quite satisfied with the Software products and services. They have a creative and
                                qualitative team in the web development field. I highly recommend Programmics for web
                                development.
                            </p>
                            <p className="testimonial-name">Kartik Dubey</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-card-left">
                            <img src={Per1} alt="" />
                        </div>
                        <div className="testimonial-card-right">
                            <p className="testimonial-card-title">
                                Programmics, Raipur helped me to create a responsive and mobile-friendly website. Now I
                                have experienced upstanding dynamics in my website operations. The time is changing at
                                breakneck speed. I was worried because I wanted to take my business online. And I was
                                looking for a well-known and innovative company. I came to know about Programmics
                                services and their expertise in the field of Web Development. I approached Programmics
                                and quite satisfied with the Software products and services. They have a creative and
                                qualitative team in the web development field. I highly recommend Programmics for web
                                development.
                            </p>
                            <p className="testimonial-name">Kartik Dubey</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <div className="testimonial-card-left">
                            <span class="fa-solid fa-quote-left"></span>
                        </div>
                        <div className="testimonial-card-right">
                            <p className="testimonial-card-title">
                                Programmics, Raipur helped me to create a responsive and mobile-friendly website. Now I
                                have experienced upstanding dynamics in my website operations. The time is changing at
                                breakneck speed. I was worried because I wanted to take my business online. And I was
                                looking for a well-known and innovative company. I came to know about Programmics
                                services and their expertise in the field of Web Development. I approached Programmics
                                and quite satisfied with the Software products and services. They have a creative and
                                qualitative team in the web development field. I highly recommend Programmics for web
                                development.
                            </p>
                            <p className="testimonial-name">Kartik Dubey</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-card-left">
                            <span class="fa-solid fa-quote-left"></span>
                        </div>
                        <div className="testimonial-card-right">
                            <p className="testimonial-card-title">
                                Programmics, Raipur helped me to create a responsive and mobile-friendly website. Now I
                                have experienced upstanding dynamics in my website operations. The time is changing at
                                breakneck speed. I was worried because I wanted to take my business online. And I was
                                looking for a well-known and innovative company. I came to know about Programmics
                                services and their expertise in the field of Web Development. I approached Programmics
                                and quite satisfied with the Software products and services. They have a creative and
                                qualitative team in the web development field. I highly recommend Programmics for web
                                development.
                            </p>
                            <p className="testimonial-name">Kartik Dubey</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-card-left">
                            <span class="fa-solid fa-quote-left"></span>
                        </div>
                        <div className="testimonial-card-right">
                            <p className="testimonial-card-title">
                                Programmics, Raipur helped me to create a responsive and mobile-friendly website. Now I
                                have experienced upstanding dynamics in my website operations. The time is changing at
                                breakneck speed. I was worried because I wanted to take my business online. And I was
                                looking for a well-known and innovative company. I came to know about Programmics
                                services and their expertise in the field of Web Development. I approached Programmics
                                and quite satisfied with the Software products and services. They have a creative and
                                qualitative team in the web development field. I highly recommend Programmics for web
                                development.
                            </p>
                            <p className="testimonial-name">Kartik Dubey</p>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-card-left">
                            <span class="fa-solid fa-quote-left"></span>
                        </div>
                        <div className="testimonial-card-right">
                            <p className="testimonial-card-title">
                                Programmics, Raipur helped me to create a responsive and mobile-friendly website. Now I
                                have experienced upstanding dynamics in my website operations. The time is changing at
                                breakneck speed. I was worried because I wanted to take my business online. And I was
                                looking for a well-known and innovative company. I came to know about Programmics
                                services and their expertise in the field of Web Development. I approached Programmics
                                and quite satisfied with the Software products and services. They have a creative and
                                qualitative team in the web development field. I highly recommend Programmics for web
                                development.
                            </p>
                            <p className="testimonial-name">Kartik Dubey</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {section programic program} */}
            <div className="section-program">
                <div className="section-program-thumbnail">
                    <img src={Car} alt="" />
                </div>
                <div className="section-program-box">
                    <i class="fa-solid fa-medal"></i>
                    <h2 className="section-program-heading">Programmics Software Products and Services</h2>
                    <p className="section-program-title">
                        Programmics offer products that are highly efficient and compatible with industry standards. The{' '}
                        <strong>Software products</strong>
                        offered are examined and tested by professionally certified technicians. Programmics excels in
                        Services like Web Development, Digital Marketing, Customized Software Development, App
                        Development, Augmented Reality, Magneto Development, and e-commerce app development. Also, the{' '}
                        <strong> Software Services</strong> provided are about 10% cost-effective than the prevailing
                        market prices. Hence, Programmics delivers cost-effective and highly analyzed qualitatively
                        Software products.
                    </p>

                    <button className="btnSF">
                        <span>Read More</span>
                    </button>
                </div>
                <div className="section-program-thumbnail">
                    <img src={Car} alt="" />
                </div>
                <div className="section-program-box section-img-box">
                    <i class="fa-solid fa-piggy-bank"></i>
                    <h2 className="section-program-heading">
                        Programmics Customer Problem-Solving Process and Services
                    </h2>
                    <p className="section-program-title">
                        Programmics offer products that are highly efficient and compatible with industry standards. The{' '}
                        Software products offered are examined and tested by professionally certified technicians.
                        Programmics excels in Services like Web Development, Digital Marketing, Customized Software
                        Development, App Development, Augmented Reality, Magneto Development, and e-commerce app
                        development. Also, the Software Service provided are about 10% cost-effective than the
                        prevailing market prices. Hence, Programmics delivers cost-effective and highly analyzed
                        qualitatively Software products.
                    </p>
                </div>
            </div>
            {/* {section card blog} */}
            <div className="card-blog">
                <div className="blog">
                    <i class="fa-solid fa-file"></i>
                    <h2 className="blog-heading">Programmics Blog</h2>
                    <p className="blog-title">Programmics help you to understand the world better.</p>
                </div>
                <div className="blog-cards">
                    <div className="blog-card">
                        <div className="blog-thumb">
                            <img src={CardB} alt="" srcset="" />
                            <div className="blog-thumb-left">
                                <i class="fa-regular fa-calendar"></i>
                                <span className="blog-thumb-left-p">September 9, 2019</span>
                            </div>
                            <a href={'/'} className="blog-thumb-right">
                                <i class="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                        <div className="blog-body">
                            <Link to="/" className="blog-heading">
                                10 Imperative Reasons why your site must be mobile-friendly
                            </Link>
                            <div className="blog-body-title">
                                1. Create a direct merchandising medium for your business Having a Mob. Lorem ipsum
                                dolor sit amet.
                            </div>
                            <div className="card-body-foot">
                                <div className="card-foot-left">
                                    <img src={Avatar} alt="" />
                                    <a href="" className="card-foot-title">
                                        programmics
                                    </a>
                                </div>
                                <div className="card-foot-right">
                                    <span className="fa-brands fa-facebook-messenger"></span>
                                    <span className="card-foot-number">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-thumb">
                            <img src={CardB} alt="" srcset="" />
                            <div className="blog-thumb-left">
                                <i class="fa-regular fa-calendar"></i>
                                <span className="blog-thumb-left-p">September 9, 2019</span>
                            </div>
                            <a href={'/'} className="blog-thumb-right">
                                <i class="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                        <div className="blog-body">
                            <Link to="/" className="blog-heading">
                                10 Imperative Reasons why your site must be mobile-friendly
                            </Link>
                            <div className="blog-body-title">
                                1. Create a direct merchandising medium for your business Having a Mob. Lorem ipsum
                                dolor sit amet.
                            </div>
                            <div className="card-body-foot">
                                <div className="card-foot-left">
                                    <img src={Avatar} alt="" />
                                    <a href="" className="card-foot-title">
                                        programmics
                                    </a>
                                </div>
                                <div className="card-foot-right">
                                    <span className="fa-brands fa-facebook-messenger"></span>
                                    <span className="card-foot-number">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-thumb">
                            <img src={CardB} alt="" srcset="" />
                            <div className="blog-thumb-left">
                                <i class="fa-regular fa-calendar"></i>
                                <span className="blog-thumb-left-p">September 9, 2019</span>
                            </div>
                            <a href={'/'} className="blog-thumb-right">
                                <i class="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                        <div className="blog-body">
                            <Link to="/" className="blog-heading">
                                10 Imperative Reasons why your site must be mobile-friendly
                            </Link>
                            <div className="blog-body-title">
                                1. Create a direct merchandising medium for your business Having a Mob. Lorem ipsum
                                dolor sit amet.
                            </div>
                            <div className="card-body-foot">
                                <div className="card-foot-left">
                                    <img src={Avatar} alt="" />
                                    <a href="" className="card-foot-title">
                                        programmics
                                    </a>
                                </div>
                                <div className="card-foot-right">
                                    <span className="fa-brands fa-facebook-messenger"></span>
                                    <span className="card-foot-number">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="blog-footer">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis quo mollitia animi.{' '}
                    <span className="c-primary">Lorem ipsum dolor sit.</span>
                </p>
            </div>
            {/* help-you */}
            <Help />
        </React.Fragment>
    );
}
export default Home;
