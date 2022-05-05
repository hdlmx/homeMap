import axios, {AxiosPromise} from 'axios';

//默认请求超时时间
axios.defaults.timeout = 2000 * 1000;
// axios请求开启cookie，支持跨域请求携带cookie
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default {
    /**
     * get 请求
     * @param url 接口路由
     * @param auth 是否需要带登录信息
     * @returns AxiosPromise<any>
     */
    get(url: string, auth = false): AxiosPromise<any> {
        if (auth) {
            return axios.get(url, {headers: {Authorization: 'Your back-end user authenticates information'}});
        } else {
            return axios.get(url);
        }
    },

    /**
     * post 请求
     *
     * @param url 接口路由
     * @param data 接口参数
     * @param auth 是否需要带登录信息
     * @returns AxiosPromise<any>
     */
    post(url: string, data: object, auth = false): AxiosPromise<any> {
        if (auth) {
            return axios.post(url, data, {headers: {Authorization: 'Your back-end user authenticates information'}});
        } else {
            return axios.post(url, data);
        }
    },

    /**
     * put请求
     * @param url 接口路由
     * @param data 接口参数
     * @param auth 是否需要带登录信息
     * @returns AxiosPromise<any>
     */
    put(url: string, data: object, auth = false): AxiosPromise<any> {
        if (auth) {
            return axios.put(url, data, {headers: {Authorization: 'Your back-end user authenticates information'}});
        } else {
            return axios.put(url, data);
        }
    },

    /**
     * 删除
     * @param url 接口路由
     * @param auth 是否需要带登录信息
     * @returns AxiosPromise<any>
     */
    delete(url: string, auth = false): AxiosPromise<any> {
        if (auth) {
            return axios.delete(url, {headers: {Authorization: 'Your back-end user authenticates information'}});
        } else {
            return axios.delete(url);
        }
    },

    /**
     * 上传文件
     * @param url 接口路由
     * @param file 接口文件
     * @param auth 是否需要带登录信息
     */
    uploader(url: string, file: any, auth = false) {
        let param = new FormData();
        param.append('file', file)
        if (auth) {
            return axios.post(url, param, {headers: {Authorization: 'Your back-end user authenticates information'}})
        } else {
            return axios.post(url, param)
        }
    },
}