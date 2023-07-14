import axios from "axios"

const api = axios.create({
    //设置url
    baseURL: 'http://10.236.66.85', // 设置API的基本URL


    timeout: 5000, // 设置请求超时时间
    // 
})

export default api