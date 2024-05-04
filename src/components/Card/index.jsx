import clsx from 'clsx';
import React from 'react';
import '~/pages/Plan/plan.css';
const Card = ({ heading, body, money, active }) => {
    // item: heading, body, money
    const headings = {
        label: 'Basic',
        ...heading,
    };
    const moneys = {
        price: '13',
        month: '99',
        ...money,
    };
    return (
        <React.Fragment>
            <div className="p-card">
                <div className={clsx('p-card-heading', { active: active === 1 })}>{headings.label}</div>

                <div className="p-padding">
                    <div className="p-card-body">
                        {body.map((b, index) => (
                            <div className="p-items" key={index}>
                                <i className="fa-solid fa-check"></i>
                                <span className="p-card-title">{b}</span>
                            </div>
                        ))}
                    </div>
                    <div className={clsx('p-card-foot', { active: active === 1 })}>
                        <div className="p-card-money">
                            <span className="fa-solid fa-hand-holding-dollar"></span>
                            <span className="p-money">{moneys.price}</span>
                            <div className="p-months">
                                <span className="p-month">{moneys.month}</span>
                                <span className="p-month-title">month</span>
                            </div>
                        </div>
                        <button className={clsx('btnSF', { 'btn-no': active !== 1 })}>
                            <span>Start Free Trial</span>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Card;
