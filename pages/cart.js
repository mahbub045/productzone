import Layout from '@/components/Layout';
import { Store } from '@/utils/Store'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

export default function CartScreen() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { cart: { cartItems } } = state;
    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    }
    return (
        <Layout title="Shopping Cart">
            <h1 className="mb-4 text-xl">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div>
                    Cart is empty. <Link legacyBehavior href='/'><a className='text-black primary-button hover:none'>Go Shopping</a></Link>
                </div>
            ) : (
                <div className='grid md:grid-cols-4 md:gap-5'>
                    <div className='overflow-x-auto md:col-span-3'>
                        <table className='min-w-full border-collapse border border-slate-500 ...'>
                            <thead className='border-b'>
                                <tr>
                                    <th className='px-5 text-center border border-slate-600'>Item</th>
                                    <th className='px-5 text-center border border-slate-600'>Quantity</th>
                                    <th className='px-5 text-center border border-slate-600'>Price</th>
                                    <th className='px-5 text-center border border-slate-600'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.slug} className='border border-b border-slate-600'>
                                        <td>
                                            <Link legacyBehavior href={`/product/${item.slug}`}>
                                                <a className='flex items-center'>
                                                    <Image src={item.image} alt={item.name} width={50} height={50}></Image>
                                                    &nbsp;
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </td>
                                        <td className='p-5 text-center border border-slate-600'>{item.quantity}</td>
                                        <td className='p-5 text-center border border-slate-600'>${item.price}</td>
                                        <td className='p-5 text-center border border-slate-600'>
                                            <button onClick={() => removeItemHandler(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='p-5 card'>
                        <ul>
                            <li>
                                <div className='pb-3 text-xl'>Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) :
                                    ${cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                                </div>
                            </li>
                            <li>
                                <button onClick={() => router.push('/shipping')} className='w-full primary-button'>Check Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </Layout>
    )
}
