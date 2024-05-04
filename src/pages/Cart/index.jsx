import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '~/components/Breakcrumb';
import '~/pages/Cart/cart.css';
import { delToCart, removeToCart, addToCart } from '~/hook/store';
import { useDispatch, useSelector } from 'react-redux';

export const Cart = () => {
    const carts = useSelector((state) => state.carts);
    const dispatch = useDispatch();
    const handelMinus = (index) => {
        dispatch(delToCart(index));
    };
    const handelRemove = (index) => {
        dispatch(removeToCart(index));
    };
    const handelPlus = (product) => {
        dispatch(addToCart({ product: product, soluong: 1 }));
    };
    return (
        <>
            <Breadcrumb item={{ label: 'Cart' }} />
            {carts.length > 0 ? (
                <div className="ct-card">
                    <table className="ct-list">
                        <thead>
                            <tr className="ct-item">
                                <th className="ct-items">Name</th>
                                <th className="ct-items">Image</th>
                                <th className="ct-items">Quantity</th>
                                <th className="ct-items">Total Price</th>
                                <th className="ct-items">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((c, index) => (
                                <tr className="ct-item" key={index}>
                                    <td className="ct-package">{c.name}</td>
                                    <td className="ct-typePackage">
                                        <img src={`./img/${c.img}`} alt="" />
                                    </td>
                                    <td className="ct-price">
                                        <button className="ct-minus" onClick={() => handelMinus(index)}>
                                            -
                                        </button>
                                        <span className="ct-quan">{c.quantity}</span>
                                        <button className="ct-plus" onClick={() => handelPlus(c)}>
                                            +
                                        </button>
                                    </td>
                                    <td className="ct-quantity">${c.quantity * c.price}</td>
                                    <td>
                                        <button className="ct-remove" onClick={() => handelRemove(index)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="ct-card">
                    <div className="ct-cart-b">
                        <i className="fa-solid fa-gear"></i>
                        Your cart is currently empty
                    </div>
                    <Link to="/shop" className="ct-button">
                        Back To Shop
                    </Link>
                </div>
            )}
        </>
    );
};
