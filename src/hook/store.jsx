import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    // products: [],
    carts: JSON.parse(localStorage.getItem('carts')) || [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // getProducts(state, action) {
        //     state.products = action.payload;
        // },
        addToCart(state, action) {
            const productToAdd = action.payload.product;
            const quantity = action.payload.soluong;

            const existingProduct = state.carts.find((cart) => cart.id === productToAdd.id);

            if (!existingProduct) {
                if (quantity <= productToAdd.quantity) {
                    const newProduct = { ...productToAdd, quantity, inStock: productToAdd.quantity };
                    state.carts.push(newProduct);
                    localStorage.setItem('carts', JSON.stringify([...state.carts, newProduct]));
                } else {
                    throw new Error('Quantity is over');
                }
            } else {
                if (existingProduct.quantity + quantity <= existingProduct.inStock) {
                    existingProduct.quantity += quantity;
                    localStorage.setItem('carts', JSON.stringify(state.carts));
                } else {
                    throw new Error('Quantity is over');
                }
            }
        },
        delToCart(state, action) {
            const indexInCart = action.payload;
            if (indexInCart >= 0) {
                const existingProduct = state.carts[indexInCart];
                if (existingProduct.quantity > 1) {
                    state.carts[indexInCart].quantity--;
                }
                localStorage.setItem('carts', JSON.stringify(state.carts));
            }
        },
        removeToCart(state, action) {
            const indexInCart = action.payload;
            if (indexInCart >= 0) {
                state.carts.splice(indexInCart, 1);
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
    },
});

export const { addToCart, delToCart, removeToCart } = productSlice.actions;

const store = configureStore({
    reducer: productSlice.reducer,
});

export default store;
