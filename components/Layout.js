import { Store } from '@/utils/Store';
import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import dynamic from 'next/dynamic';

const Layout = ({ title, children }) => {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    return (
        <>
            <Head>
                <title>{title ? title + ' - ProductZone' : 'ProductZone'}</title>
                <meta name="descripition" content="e-Commerse Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col justify-between min-h-screen">
                <header>
                    <nav className='flex items-center justify-between p-4 mx-auto shadow-md'>
                        <Link legacyBehavior href="/">
                            <a className='text-xl italic font-bold text-orange-500'>ProductZone</a>
                        </Link>
                        <div className='z-10 flex items-center'>
                            <Link legacyBehavior href="/cart">
                                <a className='p-2 text-orange-400 hover:text-orange-500'>
                                    Cart
                                    {cart.cartItems.length > 0 && (
                                        <span className='px-2 py-1 ml-1 text-xs font-bold text-white bg-red-600 rounded-full'>
                                            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                        </span>
                                    )}
                                </a>
                            </Link>
                            <Link legacyBehavior href="/login">
                                <a className='text-orange-400 hover:text-orange-500'>Login</a>
                            </Link>
                        </div>
                    </nav>
                </header>
                <main className='container px-4 m-auto mt-4'>
                    {children}
                </main>
                <footer className='flex items-center justify-center h-10 shadow-inner'>
                    <p>Copyright © 2023 ProductZone.</p>
                </footer>
            </div>
        </>
    )
}

// export default Layout;
export default dynamic(() => Promise.resolve(Layout), { ssr: false });