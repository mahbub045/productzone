import Layout from '@/components/Layout';
import { Store } from '@/utils/Store';
import data from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

export default function ProductScreen() {
    const { state, dispatch } = useContext(Store);
    const router = useRouter();
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find((x) => x.slug === slug);
    if (!product) {
        return <div>Product Not found!</div>;
    }
    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        if (product.countInStock < quantity) {
            alert("Sorry, Product is out of stock");
            return;
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
        router.push('/cart');
    }
    return (
        <Layout title={product.name} >
            <div className='py-2'>
                <Link href="/"><button className="text-black primary-button">Back to products</button></Link>
            </div>
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className='md:col-span-2'>
                    <Image src={product.image} alt={product.name} width={640} height={640} layout="responsive"></Image>
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className='text-lg'>{product.name}</h1>
                        </li>
                        <li>Category: {product.category}</li>
                        <li>Brand: {product.brand}</li>
                        <li>
                            {product.rating} of {product.numReviews} reviews
                        </li>
                        <li>Description: {product.description}</li>
                    </ul>
                </div>
                <div>
                    <div className="p-5 card">
                        <div className="flex justify-between mb-2">
                            <div>Price</div>
                            <div>${product.price}</div>
                        </div>
                        <div className="flex justify-between mb-2">
                            <div>Status</div>
                            <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
                        </div>
                        <button className="w-full primary-button" onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
