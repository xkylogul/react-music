import axios from 'axios';

import { TIMEOUT,baseURL } from './config';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const instance = axios.create({
    timeout:TIMEOUT,
    baseURL:baseURL
})
axios.interceptors.request.use(config=>{
      // 1.发送网络请求时，在页面中添加一个loading组件作为动画；
      return config
},err=>{
    return err
})
instance.interceptors.response.use(res=>{
    return res.data
},err=>{
    if (err && err.response) {
        switch (err.response.status) {
          case 400:
            console.log("请求错误");
            break;
          case 401:
            console.log("未授权访问");
            break;
          default:
            console.log("其他错误信息");
        }
      }
      return err;
})
export default instance