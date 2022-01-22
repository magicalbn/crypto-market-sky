import { useState } from 'react'
//Components
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'
//crypto api calls
import { getAllCrypto, getCryptoDetails } from '../axios/lib/cryptoAPICalls'
import axios from 'axios'
import Cards from '../components/Cards'
const Index = ({ marketData }) => {

    const [pageNumber, setpageNumber] = useState(1)

    const [pageStart, pageEnd] = [(pageNumber - 1) * 20, pageNumber * 20]

    const totalPages = Math.ceil(marketData.length / 20)

    const pagination = (
        <div className='pagination'>
            <p>page {pageNumber} of {totalPages}</p>
            {pageNumber != 1 && <button disabled={pageNumber < 2} onClick={() => setpageNumber(1)}>&lt;&lt;</button>}
            <button disabled={pageNumber < 2} onClick={() => setpageNumber(pageNumber - 1)}>&lt;</button>
            <button disabled={pageNumber > totalPages - 1} onClick={() => setpageNumber(pageNumber + 1)}>&gt;</button>
            <button disabled={pageNumber > totalPages - 1} onClick={() => setpageNumber(totalPages)}>&gt;&gt;</button>
        </div>
    )


    // const  CryptoNames = []
    // marketData.forEach(each=>{
    //     CryptoNames.push(each.MarketName.split('-')[0])
    // })
    // console.log(new Set(CryptoNames))
    return (
        <Layout>
            <div className='container index'>
                <h2>Market Summaries</h2>
                {marketData.length > 0 ? (
                    <div className='crypto-table'>

                        {pagination}

                        <div className='crypto-list'>
                            {marketData.length > 0 ? (
                                <>
                                    {marketData.slice(pageStart, pageEnd).map(each => {

                                        return (
                                            <Cards key={each.MarketName} cryptoDetails={each} />
                                        )
                                    })}
                                </>
                            ) : null}
                        </div>

                        {pagination}
                    </div>

                ) : <p className='error'>Error: Some Error occured while retrieving Mart Summaries. Try again late.</p>}


            </div>
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