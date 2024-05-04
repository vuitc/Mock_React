import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '~/components/Breakcrumb';
import '~/pages/Shop/shop.css';
import { addToCart } from '~/hook/store';
import Swal from 'sweetalert2';
const Shop = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    const handelAddToCart = (product) => {
        const soluong = 1;
        try {
            dispatch(addToCart({ product: product, soluong: soluong }));
            Swal.fire({
                icon: 'success',
                title: 'Add to Cart',
                text: 'Success',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Add to Cart',
                text: 'Error',
            });
        }
    };
    return (
        <div>
            <Breadcrumb item={{ label: 'Shop' }} />

            <div className="p-contains">
                {Array.isArray(products) && products.length > 0 ? (
                    <>
                        {products.map((product) => (
                            <div className="p-contain-card" key={product.id}>
                                <img src={`./img/${product.img}`} alt="" />
                                <div className="p-contain-box">
                                    <h2 className="p-contain-heading">{product.name}</h2>
                                    <p className="p-contain-price">${product.price}</p>
                                    <div className="p-handel">
                                        <Link to={`/shop/${product.id}`} className="p-contain-detail">
                                            Detail
                                        </Link>
                                        <button className="p-contain-detail" onClick={() => handelAddToCart(product)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Shop;
