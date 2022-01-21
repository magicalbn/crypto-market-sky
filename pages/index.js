import {useState} from 'react'
//Components
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'
//crypto api calls
import { getAllCrypto,getCryptoDetails } from '../axios/lib/cryptoAPICalls'
import axios from 'axios'
const Index = ({marketData}) => {


    return (
        <Layout>
            <div className='container index'>crypto market</div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const data = await getAllCrypto()
    return {
        props: { marketData: data },
    }
}

export default Index