import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { Navigate } from 'react-router-dom';
import { AuthContext } from '~/hook/AuthContext';
import { Link, Navigate } from 'react-router-dom';
function SignIn() {
    // const { login, isAuthenticated } = useContext(AppContext);
    const { login } = useContext(AuthContext);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .matches(
                /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/,
                'Invalid email format',
            ),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        validateOnChange: true,
        onSubmit: async (data) => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                const foundUser = response.data.find(
                    (user) => user.email === data.email && user.password === data.password,
                );

                if (foundUser) {
                    const temp = { ...foundUser };
                    delete temp.password;
                    login(temp);
                    window.location.href = '/';
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid Credentials',
                        text: 'Please check your email and password',
                    });
                    throw new Error('Nội dung thông báo lỗi');
                }
            } catch (error) {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'OOps',
                });
            }
        },
    });

    return (
        <>
            <div className="signin-form mx-5">
                <h2>Login Form</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mt-3">
                        <label htmlFor="email" className="fs-4">
                            {' '}
                            Email{' '}
                        </label>
                        <input
                            name="email"
                            type="email"
                            className={
                                'form-control' + (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
                            }
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <div className="invalid-feedback">
                            {formik.errors.email && formik.touched.email ? formik.errors.email : null}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="fs-4">
                            {' '}
                            Password{' '}
                        </label>
                        <input
                            name="password"
                            type="password"
                            className={
                                'form-control' +
                                (formik.errors.password && formik.touched.password ? ' is-invalid' : '')
                            }
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <div className="invalid-feedback">
                            {formik.errors.password && formik.touched.password ? formik.errors.password : null}
                        </div>
                    </div>
                    <h4>
                        No account:<Link to="/register">Register</Link>
                    </h4>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onSubmit={formik.handleSubmit}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignIn;
