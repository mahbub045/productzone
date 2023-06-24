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
                <h1 className="mb-4 text-xl">Login</h1>
                <div className="mb-4">
                    <label htmlFor="tel">Phone</label>
                    <input
                        type="tel"
                        {...register('tel', {
                            required: 'Please enter your phone number!',
                        })}
                        className="w-full"
                        id="tel"
                        maxLength='11'
                        autoFocus>
                    </input>
                    {errors.tel && <div className="text-red-500">{errors.tel.message}</div>}
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
                <div className="mb-4 ">
                    <button className="primary-button">Login</button>
                </div>
                <div className="mb-4 ">
                    Don&apos;t have an account? &nbsp;
                    <Link href="register">Register</Link>
                </div>
            </form>
        </Layout>
    )
};
export default dynamic(() => Promise.resolve(loginScreen), { ssr: false });