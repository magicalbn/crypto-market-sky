//api calls
import { getCryptoDetails } from '../../axios/lib/cryptoAPICalls'
//component
import Layout from '../../components/Layout'
const Crypto = ({ cryptoData }) => {
    console.log(cryptoData)
    return (
        <Layout>
            <div className='container'>
                {JSON.stringify(cryptoData)}
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const cryptoQuery = context.params.crypto //Get crypto name from url
    const data = await getCryptoDetails(cryptoQuery)

    return {
        props: {
            cryptoData: data
        }
    }
}


export default Crypto

