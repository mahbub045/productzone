/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Productitem({ product }) {
    return (
        <div className='card'>
            <Link href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className='object-cover w-full h-64 rounded shadow' />
            </Link>
            <div className='flex flex-col items-center justify-center p-5'>
                <Link href={`/product/${product.slug}`}>
                    <h2 className='text-lg'>{product.name}</h2>
                </Link>
                <p className='mb-2'>{product.brand}</p>
                <p>${product.price}</p>
                <button className='primary-button' type='button'>Add to cart</button>
            </div>
        </div>
    )
}