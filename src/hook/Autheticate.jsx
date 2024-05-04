import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Authenticate = ({ element: Component }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const location = useLocation();

    // Danh sách các đường dẫn được cho phép truy cập khi đã đăng nhập
    const allowedPaths = ['/login', '/register'];

    // Kiểm tra nếu đường dẫn hiện tại nằm trong danh sách cho phép
    const isAllowedPath = allowedPaths.includes(location.pathname);

    if (isLoggedIn && isAllowedPath) {
        // Nếu đã đăng nhập và đường dẫn thuộc danh sách cho phép
        // thì điều hướng đến trang chủ
        return <Navigate to="/" replace />;
    }

    if (!isLoggedIn && !isAllowedPath) {
        // Nếu chưa đăng nhập và đường dẫn không nằm trong danh sách cho phép
        // thì điều hướng đến trang đăng nhập
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Nếu không thuộc trường hợp trên, hiển thị component
    return <Component />;
};

export default Authenticate;
