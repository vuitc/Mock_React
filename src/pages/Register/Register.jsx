// import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Register() {
    const validationSchema = Yup.object().shape({
        firstname: Yup.string()
            .required('First Name is required')
            .min(2, 'Must be at least 2 characters')
            .max(12, 'Must not exceed 12 characters')
            .matches(/^[a-zA-Z ]*$/, 'Must not contain numbers or special characters'),
        lastname: Yup.string()
            .required('Last Name is required')
            .min(2, 'Must be at least 2 characters')
            .max(12, 'Must not exceed 12 characters')
            .matches(/^[a-zA-Z ]*$/, 'Must not contain numbers or special characters'),
        email: Yup.string()
            .required('Email is required')
            .matches(
                /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/,
                'Invalid email format',
            ),
        phone: Yup.string()
            .required('Phone is required')
            .matches(/(0[3|5|7|8|9])+([0-9]{8})\b$/, 'Invalid phone number in Vietnam'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters')
            .matches(
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                'Password must contain at least one digit, one lowercase and one uppercase letter',
            ),

        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    });

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        validateOnChange: true,
        onSubmit: async (data) => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                const existingEmails = response.data.map((user) => user.email);

                if (existingEmails.includes(data.email)) {
                    throw new Error('Email already exists');
                } else {
                    // Redirect to login page
                    await axios.post('http://localhost:3000/users', data);
                    window.location.href = '/login';
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
            <div className="register-form mx-5">
                <h2>Registration Form</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <label className="fs-4">First Name</label>
                                <input
                                    name="firstname"
                                    type="text"
                                    className={
                                        'form-control' +
                                        (formik.errors.firstname && formik.touched.firstname ? ' is-invalid' : '')
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                />
                                <div className="invalid-feedback">
                                    {formik.errors.firstname && formik.touched.firstname
                                        ? formik.errors.firstname
                                        : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mt-3">
                                <label htmlFor="lastname" className="fs-4">
                                    Last Name
                                </label>
                                <input
                                    name="lastname"
                                    type="text"
                                    className={
                                        'form-control' +
                                        (formik.errors.lastname && formik.touched.lastname ? ' is-invalid' : '')
                                    }
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                />
                                <div className="invalid-feedback">
                                    {formik.errors.lastname && formik.touched.lastname ? formik.errors.lastname : null}
                                </div>
                            </div>
                        </div>
                    </div>

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
                    <div className="form-group mt-3">
                        <label htmlFor="phone" className="fs-4">
                            {' '}
                            Phone{' '}
                        </label>
                        <input
                            name="phone"
                            type="text"
                            className={
                                'form-control' + (formik.errors.phone && formik.touched.phone ? ' is-invalid' : '')
                            }
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        <div className="invalid-feedback">
                            {formik.errors.phone && formik.touched.phone ? formik.errors.phone : null}
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

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="fs-4">
                            {' '}
                            Confirm Password{' '}
                        </label>
                        <input
                            name="confirmPassword"
                            type="password"
                            className={
                                'form-control' +
                                (formik.errors.confirmPassword && formik.touched.confirmPassword ? ' is-invalid' : '')
                            }
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                        <div className="invalid-feedback">
                            {formik.errors.confirmPassword && formik.touched.confirmPassword
                                ? formik.errors.confirmPassword
                                : null}
                        </div>
                    </div>
                    <h4>
                        Have account: <Link to="/login">Login</Link>
                    </h4>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
