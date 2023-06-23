import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title ? title + ' - ProductZone' : 'ProductZone'}</title>
                <meta name="descripition" content="e-Commerse Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col justify-between min-h-screen">
                <header>
                    <nav className='flex flex-wrap items-center justify-between p-4 mx-auto shadow-md'>
                        <Link legacyBehavior href="/">
                            <a className='text-lg italic font-bold'>ProductZone</a>
                        </Link>
                        <div className='w-full md:block md:w-auto'>
                            <Link legacyBehavior href="/cart">
                                <a className='p-2'>Cart</a>
                            </Link>
                            <Link legacyBehavior href="/login">
                                <a>Login</a>
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

export default Layout;