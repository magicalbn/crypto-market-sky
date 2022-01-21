import Head from 'next/head'
//Components
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ title, description, children }) => {

    return <>
        <Head>
            {title && <title>{title}</title>}
            {description && <meta name='description' content={description} />}
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Navbar />
        {children}
        <Footer />
    </>

}

export default Layout