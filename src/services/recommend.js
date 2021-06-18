import request from './request'

export const getTopBanner=()=>{
    return request({
        url:'/banner'
    })
}