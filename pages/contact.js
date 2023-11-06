import Head from 'next/head';
import Navbar from './components/Navbar';
import Image from 'next/image';

const about = () => {
    return (
        <>
        <Head>
            <title>Contact | Belajar Next JS</title>
            <meta name='description' content='Belajar Next JS' />
        </Head>
            <Navbar />
            <Image src='/vercel.svg' alt='Logo Vercel' width={200} height={100} />
            <h1>Ini halaman Contact</h1>
        </>
    );
};

export default about;