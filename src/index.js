import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import '~/assets/css/base.css';
import '~/assets/css/grid.css';
import '~/assets/css/style.css';
import { Provider } from 'react-redux';
import store from './hook/store';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
