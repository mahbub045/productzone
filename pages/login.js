/* eslint-disable @next/next/no-img-element */
import Layout from '@/components/Layout';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import data from '@/utils/data';
import { useRouter } from 'next/router';
import { useState } from 'react';


function LoginScreen({ user }) {
    const [error, setError] = useState('');
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { handleSubmit, register, formState: { errors } } = useForm();
    const submitHandler = ({ phone, password }) => {
        console.log('Phone:', phone);
        console.log('Password:', password);

        const user = data.users.find((user) => user.phone === phone && user.password === password);

        if (user) {
            router.push('/admin');
            console.log('Login successful!');
        } else {
            setError('Invalid username or password');
        }
    };
    return (
        <Layout title="Login">
            <form className="max-w-screen-md mx-auto" onSubmit={handleSubmit(submitHandler)}>
                <h1 className="mb-4 text-xl text-orange-500">Login</h1>
                <div className="mb-4">
                    <label htmlFor="phone">Phone</label>
                    <input
                        name='phone'
                        type="tel"
                        {...register('phone', {
                            required: 'Please enter your phone number!',
                        })}
                        className="w-full"
                        maxLength='11'
                        autoFocus>
                    </input>
                    {errors.phone && <div className="text-red-500">{errors.phone.message}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                        name='password'
                        type="password"
                        {...register('password', {
                            required: 'Please enter password',
                            minLength: { value: 6, message: 'password is more than 5 chars' },
                        })}
                        className="w-full"
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
                    <Link legacyBehavior href="register">
                        <a className='text-blue-600'>Register</a>
                    </Link>
                </div>
            </form>
        </Layout>
    )
};
export default dynamic(() => Promise.resolve(LoginScreen), { ssr: false });
