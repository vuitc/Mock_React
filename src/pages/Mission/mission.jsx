import React, { useEffect, useState } from 'react';
import Breadcrumb from '~/components/Breakcrumb';
import '~/pages/Mission/mission.css';
import Img1 from '~/assets/images/head.jpg';
import Img2 from '~/assets/images/head3.jpg';
import Button from '~/components/Button';
import Brand from '~/components/Layout/Brand/Brand';
import clsx from 'clsx';
function Mission() {
    const breakcrumb = { label: 'Mission' };
    const [tab, setTab] = useState(0);
    const [sizeX, setSizeX] = useState(window.innerWidth > 768 ? 0 : 1);
    useEffect(() => {
        const handleResize = () => {
            setSizeX(window.innerWidth > 768 ? 0 : 1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleTabClick = (index) => {
        setTab(index);
    };
    const tabPanes = [
        {
            label: 'Industry',
            heading: '1. Businesses today cross borders and regions, so you need a service provider that goes where',
            title: 'Our team of talented, experienced and motivated industry specialists will be recognised as the best in their field. Our continued success will be driven by our people who will share in it.',
        },
        {
            label: 'Mission',
            heading: '2. Businesses today cross borders and regions, so you need a service provider that goes where',
            title: 'Our team of talented, experienced and motivated industry specialists will be recognised as the best in their field. Our continued success will be driven by our people who will share in it.',
        },
        {
            label: 'Careers',
            heading: '3. Businesses today cross borders and regions, so you need a service provider that goes where',
            title: 'Our team of talented, experienced and motivated industry specialists will be recognised as the best in their field. Our continued success will be driven by our people who will share in it.',
        },
    ];

    return (
        <React.Fragment>
            <Breadcrumb item={breakcrumb} />
            <div className="m-commitment">
                <div className="m-commitment-box">
                    <div className="m-commitment-left">
                        <h2 className="m-commitment-heading">Our Commitment</h2>
                        <p className="m-commitment-title">
                            Suspendisse potenti. Quisque risus sem, volutpat a sapien et, mattis
                        </p>
                        <ul className="m-commitment-list">
                            <li className="m-commitment-item">
                                <i class="fa-solid fa-check"></i>
                                <span className="m-commitment-des">Far far away, behind the word mountains</span>
                            </li>
                            <li className="m-commitment-item">
                                <i class="fa-solid fa-check"></i>
                                <span className="m-commitment-des">A small river named Duden flows</span>
                            </li>
                            <li className="m-commitment-item">
                                <i class="fa-solid fa-check"></i>
                                <span className="m-commitment-des">Facing challenges in the work process</span>
                            </li>
                        </ul>
                    </div>
                    <div className="m-commitment-right">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="m-commitment-right">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="m-commitment-left">
                        <h2 className="m-commitment-heading">Our Commitment</h2>
                        <p className="m-commitment-title">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large
                        </p>
                        <button className="btnSF btn-m">
                            <span>Read more</span>
                        </button>
                    </div>
                </div>
                <div className="m-commitment-shape">
                    <div className="m-shape">
                        <i class="fa-solid fa-arrows-to-eye"></i>
                        <div className="m-shape-box">
                            <h2 className="m-shape-heading">Mission and vision</h2>
                            <p className="m-shape-title">
                                Our team of talented, experienced and motivated industry specialists will be recognised
                                as the best in
                            </p>
                        </div>
                    </div>
                    <div className="m-shape">
                        <i class="fa-solid fa-arrows-to-eye"></i>
                        <div className="m-shape-box">
                            <h2 className="m-shape-heading">Mission and vision</h2>
                            <p className="m-shape-title">
                                Our team of talented, experienced and motivated industry specialists will be recognised
                                as the best in
                            </p>
                        </div>
                    </div>
                    <div className="m-shape">
                        <i class="fa-solid fa-arrows-to-eye"></i>
                        <div className="m-shape-box">
                            <h2 className="m-shape-heading">Mission and vision</h2>
                            <p className="m-shape-title">
                                Our team of talented, experienced and motivated industry specialists will be recognised
                                as the best in
                            </p>
                        </div>
                    </div>
                    <div className="m-shape">
                        <i class="fa-solid fa-arrows-to-eye"></i>
                        <div className="m-shape-box">
                            <h2 className="m-shape-heading">Mission and vision</h2>
                            <p className="m-shape-title">
                                Our team of talented, experienced and motivated industry specialists will be recognised
                                as the best in
                            </p>
                        </div>
                    </div>
                </div>
                <div className="m-commitment-thumbs">
                    <div className="m-thumb">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="m-thumb">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="m-thumb">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="m-thumb">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="m-thumb">
                        <img src={Img1} alt="" />
                    </div>
                    <div className="m-thumb">
                        <img src={Img1} alt="" />
                    </div>
                </div>
                <Brand />
            </div>
            <div className="m-commitment-tabs">
                <div className="m-tabs">
                    <div className="m-box-tabs">
                        {tabPanes.map((t, index) => (
                            <React.Fragment key={index}>
                                <button
                                    className={clsx('m-tab', { active: index === tab })}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {t.label}
                                </button>
                                {/*  hiển thị  dưới 768*/}
                                {sizeX === 1 && index === tab && (
                                    <div className="m-box">
                                        <div className="m-box-icon">
                                            <i className="fa-solid fa-quote-right"></i>
                                            <h2 className="m-box-heading">{t.heading}</h2>
                                        </div>
                                        <p className="m-box-title">{t.title}</p>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    {/* hiện thị >768px */}
                    {sizeX == 0 && (
                        <div className="m-box">
                            <div className="m-box-icon">
                                <i className="fa-solid fa-quote-right"></i>
                                <h2 className="m-box-heading">{tabPanes[tab].heading}</h2>
                            </div>
                            <p className="m-box-title">{tabPanes[tab].title}</p>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Mission;
