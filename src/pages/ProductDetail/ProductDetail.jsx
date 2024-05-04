import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '~/pages/Shop/shop.css';
import { addToCart } from '~/hook/store';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const ProductDetail = () => {
    const carts = useSelector((state) => state.carts);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        const qty = product.quantity;
        if (qty > quantity) {
            setQuantity(quantity + 1);
        } else {
            alert('Quantity is over');
        }
    };
    const handelAdd = (product, quantity) => {
        try {
            dispatch(addToCart({ product: product, soluong: quantity }));
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
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div className="p-contain-d">
            <div className="p-contain-card-d">
                {product ? (
                    <>
                        <img src={`../img/${product.img}`} alt="" />
                        <h3 className="p-center-d">{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Quantity: {product.title}</p>
                        <div className="p-quantity-box">
                            <button className="p-button" onClick={handleDecrement}>
                                -
                            </button>
                            <input
                                type="text"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="p-number"
                                readOnly
                            />
                            <button className="p-button" onClick={handleIncrement}>
                                +
                            </button>
                        </div>
                        <div className="p-flex">
                            <button className="p-contain-detail" onClick={() => handelAdd(product, quantity)}>
                                Add to Cart
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};
export default ProductDetail;
