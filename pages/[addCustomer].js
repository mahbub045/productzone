import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';


export default function addCustomer() {
    const [formValues, setFormValues] = useState([]);
    const router = useRouter();
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full Name is required'),
        phone: Yup.string().required('Phone Number is required'),
        address: Yup.string().required('Address is required'),
    });
    const initialValues = {
        fullName: '',
        phone: '',
        address: '',
    };
    useEffect(() => {
        const storedValues = localStorage.getItem('formValues');
        if (storedValues) {
            setFormValues(JSON.parse(storedValues));
        }
    }, []);

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const updatedFormValues = [...formValues, values];
        localStorage.setItem('formValues', JSON.stringify(updatedFormValues));
        setFormValues(updatedFormValues);
        resetForm();
        setSubmitting(false);
        router.push('/Customers');
    };

    return (
        <Layout title='Admin(Add new)'>
            {/* <form className="max-w-screen-md mx-auto" onSubmit={handleSubmit}>
                <h1 className="mb-4 text-xl text-orange-500">Add New Customer</h1>
                <div className="mb-4">
                    <label htmlFor="text">Customer Full Name</label>
                    <input
                        name='fullname'
                        type="text"
                        className="w-full"
                        autoFocus>
                    </input>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone">Customer Phone Number</label>
                    <input
                        name='phone'
                        type="tel"
                        className="w-full"
                        autoFocus>
                    </input>
                </div>
                <div className="mb-4">
                    <label htmlFor="address">Customer Address</label>
                    <input
                        name='address'
                        type="text"
                        className="w-full"
                        autoFocus>
                    </input>
                </div>
                <div className="mb-4 ">
                    <button type='submit' className="primary-button">Add New</button>
                </div>
            </form> */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >

                <Form className="max-w-screen-md mx-auto">
                    <div className="mb-4 ">
                        <Link href='/Customers'>
                            <button type='submit' className="primary-button">Back</button>
                        </Link>

                    </div>
                    <h1 className="mb-4 text-xl text-orange-500">Add New Customer</h1>
                    <div className="mb-4">
                        <label htmlFor="fullName">Full Name</label>
                        <Field type="text" className="w-full" id="fullName" name="fullName" />
                        <ErrorMessage name="fullName" component="div" className="error" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone">Phone</label>
                        <Field type="text" className="w-full" id="phone" name="phone" />
                        <ErrorMessage name="phone" component="div" className="error" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address">Address</label>
                        <Field type="text" className="w-full" id="address" name="address" />
                        <ErrorMessage name="address" component="div" className="error" />
                    </div>
                    <div className="mb-4 text-center">
                        <button type='submit' className="primary-button">Add New</button>
                    </div>
                </Form>
            </Formik>
        </Layout>


    )
}
