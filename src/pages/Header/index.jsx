import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import LOGO from '~/assets/images/logo1.png';
import LOGOM from '~/assets/images/Programmics-2.png';
import '~/pages/Header/header.css';
import '~/assets/css/base.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '~/hook/AuthContext';
import {
    FaWhatsappSquare,
    FaWhatsapp,
    FaSearch,
    FaFacebook,
    FaAngleDown,
    FaWindowClose,
    FaAngleRight,
    FaBars,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaArrowRight,
    FaPhoneAlt,
    FaArrowUp,
} from 'react-icons/fa';
import Home from '../Home';
import About from '../About';
import CaseStudy from '../CaseStudy';
import Mission from '../Mission/mission';
import Team from '../Team';
import WhyChoose from '../WhyChoose';
import clsx from 'clsx';
import Plan from '../Plan';
import Contact from '../Contact';
import Shop from '../Shop/Shop';
import { Cart } from '../Cart';
function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isCheck1, setIsCheck1] = useState(false);
    const [isCheck2, setIsCheck2] = useState(false);
    const [currentRoute, setCurrentRoute] = useState('/');
    const [showScrollButton, setShowScrollButton] = useState(false);
    const { user, logout, isLoggedIn } = useContext(AuthContext);
    const locations = useLocation();
    useEffect(() => {
        setCurrentRoute(locations.pathname);
        window.scrollTo({ top: 0, behavior: 'auto' }); // Cuộn trang lên đầu khi địa chỉ URL thay đổi
        // locations.reload();
    }, [locations]);
    const handelCheck = () => {
        setIsCheck1(!isCheck1);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setShowMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handelCheck2 = () => {
        setIsCheck2(!isCheck2);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setIsCheck1(false);
        setIsCheck2(false);
    };
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY >= window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const location = useLocation();
    useEffect(() => {
        // Trở về false khi chuyển trang
        setCurrentRoute(location.pathname);
        setShowMenu(false);
    }, [location]);
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY >= window.innerHeight);

            if (window.scrollY >= window.innerHeight) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <React.Fragment>
            <div className={clsx('contain', { sticky: isSticky, default: currentRoute !== '/' })}>
                <div className="header-contact hide-on-lap">
                    <div className="header-contact-left">
                        <div className="header-box">
                            <FaPhoneAlt />
                            <span className="header-box--title"> +99915642222 </span>
                        </div>
                        <div className="header-box">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="header-box--title">
                                {currentRoute === '/' ? 'support@programmics.net' : 'hello@programics.net'}
                            </span>
                        </div>
                        <div className="header-box">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="header-box--title">
                                {currentRoute === '/'
                                    ? 'First Floor ,Jain Software ,Jain Dental Hospital Raipur'
                                    : 'Programmics ,First Floor ,Jain Software , Jaistambh Chowk Raipur Chhattisgarh'}
                            </span>
                        </div>
                    </div>
                    <div className="header-contact-right hide-on-lap">
                        <div className="head-icon">
                            <FaFacebook />
                        </div>
                        <div className="head-icon">
                            <FaInstagram />
                        </div>
                        <div className="head-icon">
                            <FaLinkedinIn />
                        </div>
                        <div className="head-icon">
                            <FaPinterest />
                        </div>
                    </div>
                </div>
                <div className="header-body">
                    <div className="header-body-first">
                        <img src={LOGO} alt="" className="hide-on-lap" />
                        <img src={LOGOM} alt="" className="hide-logo show-on-lap" />
                    </div>
                    <div className="header-body-center hide-on-lap">
                        <ul id="nav">
                            <li>
                                <NavLink to="/" activeClassName="active" className="head-link ">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="head-link">
                                    About
                                    <span className="icon-arrow">
                                        <FaAngleDown />
                                    </span>
                                </NavLink>
                                <ul className="subnav">
                                    <li>
                                        <Link to="/our-team" className="head-link">
                                            Our Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/case-study" className="head-link">
                                            Case Study
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/mission" className="head-link">
                                            Mission
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/why-choose-us" className="head-link">
                                            Why Choose Programic
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/plan" className="head-link">
                                    Price And Plans
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" className="head-link">
                                    Shop
                                    <span className="icon-arrow">
                                        <FaAngleDown />
                                    </span>
                                </NavLink>
                                <ul className="subnav">
                                    <li>
                                        <Link to="/cart" className="head-link">
                                            Cart
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/contacts" className="head-link">
                                    Contact
                                </NavLink>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        <span className="head-link">{user.lastname}</span>
                                    </li>
                                    <li>
                                        <button
                                            className="head-link"
                                            style={{ outline: 'none', border: 'none', background: 'transparent' }}
                                            onClick={() => logout()}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <NavLink to="/login" className="head-link">
                                        Login
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    <li className="d-none">
                        <label htmlFor="show-menu" className="menu-icon" onClick={toggleMenu}>
                            <span className="icon-arrows">
                                <FaBars />
                            </span>
                        </label>
                    </li>
                    <div className="header-body-last">
                        <div className="last-icon hide-on-lap">
                            <FaWhatsapp />
                        </div>
                        <div className="hide-on-lap">
                            <h2 className="title">Have any Question?</h2>
                            <p className="title">+9911207631</p>
                        </div>
                        <label for="modals" className="last-icon-search hide-on-lap">
                            <FaSearch />
                        </label>
                        <label htmlFor="show-menu" className="menu-icon" onClick={toggleMenu}>
                            <span className="icon-arrows">
                                <FaBars />
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            {/* modal*/}
            <div>
                <input type="checkbox" id="modals" />
                <label for="modals" className="modals-background"></label>
                <div className="modals">
                    <div className="modals-header">
                        <h3>Search for anything.</h3>
                        <label for="modals">
                            <div className="icon-close">
                                <FaWindowClose />
                            </div>
                        </label>
                        <div className="menu-form">
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Search ..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <button type="submit">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*menu-mobile*/}
            {showMenu && <div className="overlay" onClick={toggleMenu} />}
            <nav className={`sidebar ${showMenu ? 'show' : ''}`}>
                <div className="sidebar-img">
                    <img src={LOGOM} alt="" />
                </div>
                <div className="menu-content">
                    <ul>
                        <li>
                            <Link to="/" className="head-link-m">
                                Home
                            </Link>
                        </li>
                        <li>
                            <input type="checkbox" id="show-about2" checked={isCheck1} onChange={handelCheck} />
                            <label htmlFor="show-about2" className="head-link-m">
                                About
                                <span className="icon-arrow">
                                    <FaAngleRight />
                                </span>
                            </label>
                            <ul className="sub-nav">
                                <li>
                                    <Link to="/our-team" className="head-link-m">
                                        Our Team
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/case-study" className="head-link-m">
                                        Case Study
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/mission" className="head-link-m">
                                        Mission
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/why-choose-us" className="head-link-m">
                                        Why Choose Programic
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/plan" className="head-link-m">
                                Pricing And Plans
                            </Link>
                        </li>
                        <li>
                            <input type="checkbox" id="show-about1" checked={isCheck2} onChange={handelCheck2} />
                            <label htmlFor="show-about1" className="head-link-m">
                                Shop
                                <span className="icon-arrow">
                                    <FaAngleRight />
                                </span>
                            </label>
                            <ul className="sub-nav">
                                <li>
                                    <Link to="/cart" className="head-link-m">
                                        Cart
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contacts" className="head-link-m">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="menu-form">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter your email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <button type="submit">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/case-study" element={<CaseStudy />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/our-team" element={<Team />} />
                <Route path="/why-choose-us" element={<WhyChoose />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
            </Routes> */}

            {showScrollButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <i class="fa-solid fa-chevron-up"></i>
                </button>
            )}
        </React.Fragment>
    );
}

export default Header;
