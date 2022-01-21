import axios from '../axiosBase'

export const getAllCrypto = async () => {
    try {
        const { data } = await axios.get(`/getmarketsummaries`)
        if (data.success)
            return data.result
        else return []
    }
    catch {
        return []
    }

}

export const getCryptoDetails = async (query) => {
    try {
        const { data } = await axios.get(`/getmarketsummary?market=${query}`)
        if (data.success)
            return data.result[0]
        else return {}
    }
    catch {
        return {}
    }

}