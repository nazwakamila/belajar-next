import Head from 'next/head';
import Navbar from './components/Navbar';
import Image from 'next/image';

const about = () => {
    return (
        <>
        <Head>
            <title>Portofolio | Belajar Next JS</title>
            <meta name='description' content='Belajar Next JS' />
        </Head>
            <Navbar />
            <Image src='/vercel.svg' alt='Logo Vercel' width={200} height={100} />
            <h1>Ini halaman Portofolio</h1>
        </>
    );
};

export default about;