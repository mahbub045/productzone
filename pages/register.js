/* eslint-disable @next/next/no-img-element */
import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';


function loginScreen() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { handleSubmit, register, formState: { errors } } = useForm();
    const submitHandler = ({ phone, password }) => {

    }
    return (
        <Layout title="Login">
            <form className="max-w-screen-md mx-auto" onSubmit={handleSubmit(submitHandler)}>
                <h1 className="mb-4 text-xl">Register</h1>
                <div className="mb-4">
                    <label htmlFor="text">Your Full Name</label>
                    <input
                        type="text"
                        {...register('fullname', {
                            required: 'Please enter your Full Name!',
                        })}
                        className="w-full"
                        id="fullname"
                        autoFocus>
                    </input>
                    {errors.fullname && <div className="text-red-500">{errors.fullname.message}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        {...register('phone', {
                            required: 'Please enter your phone number!',
                        })}
                        className="w-full"
                        id="phone"
                        maxLength='11'
                        autoFocus>
                    </input>
                    {errors.phone && <div className="text-red-500">{errors.phone.message}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="text">Your Address</label>
                    <input
                        type="text"
                        {...register('address', {
                            required: 'Please enter your Address!',
                        })}
                        className="w-full"
                        id="address"
                        autoFocus>
                    </input>
                    {errors.address && <div className="text-red-500">{errors.address.message}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Please enter password',
                            minLength: { value: 6, message: 'password is more than 5 chars' },
                        })}
                        className="w-full"
                        id="password"
                        autoFocus
                    ></input>
                    {errors.password && (
                        <div className="text-red-500 ">{errors.password.message}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="cPassword">Confirm Password</label>
                    <input
                        type="password"
                        {...register('cPassword', {
                            required: 'Please Confirm your password',
                            minLength: { value: 6, message: 'password is more than 5 chars' },
                        })}
                        className="w-full"
                        id="cPassword"
                        autoFocus
                    ></input>
                    {errors.cPassword && (
                        <div className="text-red-500 ">{errors.cPassword.message}</div>
                    )}
                </div>
                <div className="mb-4 ">
                    <button className="primary-button">Register</button>
                </div>
                <div className="mb-4 ">
                    Don&apos;t have an account? &nbsp;
                    <Link legacyBehavior href="login">
                        <a className='text-blue-600'>Login</a>
                    </Link>
                </div>
            </form>
        </Layout>
    )
};
export default dynamic(() => Promise.resolve(loginScreen), { ssr: false });
