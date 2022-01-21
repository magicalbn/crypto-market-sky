//Components
import Layout from '../components/Layout'
//crypto api calls
import { getAllCrypto } from '../axios/lib/cryptoAPICalls'

const Index = ({marketData}) => {
    console.log(marketData)
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