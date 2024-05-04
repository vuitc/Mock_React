import Home from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout/Layout';
import About from './pages/About';
import CaseStudy from './pages/CaseStudy';
import Mission from './pages/Mission/mission';
import Team from './pages/Team';
import WhyChoose from './pages/WhyChoose';
import Plan from './pages/Plan';
import Contact from './pages/Contact';
import { Cart } from './pages/Cart';
import { AuthProvider } from './hook/AuthContext';
import PrivateRoute from './hook/PrivateRoute';
import Shop from './pages/Shop/Shop';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Authenticate from './hook/Autheticate';

function App() {
    return (
        <div className="App" style={{ position: 'relative' }}>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="case-study" element={<CaseStudy />} />
                            <Route path="mission" element={<Mission />} />
                            <Route path="our-team" element={<Team />} />
                            <Route path="why-choose-us" element={<WhyChoose />} />
                            <Route path="plan" element={<Plan />} />
                            <Route path="contacts" element={<Contact />} />
                            <Route path="shop" element={<PrivateRoute element={<Shop />} />} />
                            <Route path="/shop/:id" element={<PrivateRoute element={<ProductDetail />} />} />
                            <Route path="cart" element={<PrivateRoute element={<Cart />} />} />
                            {/* <Route path="/login" element={<SignIn />} /> */}
                            {/* <Route path="/register" element={<Register />} /> */}
                            <Route path="login" element={<Authenticate element={SignIn} />} />
                            <Route path="register" element={<Authenticate element={Register} />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
