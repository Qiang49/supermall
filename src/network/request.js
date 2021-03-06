import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 请求拦截
    instance.interceptors.request.use(config => {
            // console.log(config);
            return config

        })
        //响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    })

    //发送真正的网络请求
    return instance(config)
}