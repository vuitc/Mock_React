import React from 'react';
import { Link } from 'react-router-dom';
import '~/pages/About/about.css';
import Devider from '../Devider';
const Breadcrumb = ({ item }) => {
    return (
        <div className="a-breakcrumb-container">
            <div className="a-breakcrumb-box">
                <h2 className="a-breakcrumb-heading">{item.label}</h2>
                <Devider />
                <div className="a-breakcrumb-breakcrumb">
                    <Link to="/" className="a-breakcrumb-item">
                        Home
                    </Link>
                    <span className="a-breakcrumb-item"> &gt;</span>
                    <span className="a-breakcrumb-item"> {item.label}</span>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
