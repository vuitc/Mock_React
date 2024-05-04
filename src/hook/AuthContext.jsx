// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
// const jwt = require('jsonwebtoken');
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            return JSON.parse(loggedInUser);
        } else {
            return null;
        }
    });
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const loggedInUser = localStorage.getItem('user');
        return !!loggedInUser;
    });
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         try {
    //             jwt.verify(token, 'baby');
    //             setIsLoggedIn(true);
    //         } catch (error) {
    //             setIsLoggedIn(false);
    //         }
    //     } else {
    //         setIsLoggedIn(false);
    //     }
    // }, []);
    const login = (userData) => {
        setUser(userData);
        // const token = jwt.sign(userData.email, 'your-secure-key', { expiresIn: '1h' });
        // localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/login';
    };

    return <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>{children}</AuthContext.Provider>;
};
