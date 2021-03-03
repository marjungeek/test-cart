
import axios from './axios'

const list = async () => {
    try{
        const result = await axios.get('/public-api/products');
        return result.data;
    }catch(err){
        alert(err)
    }
}
export default list