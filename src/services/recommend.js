import request from './request'

export const getTopBanner=()=>{
    return request({
        url:'/banner'
    })
}
export const getHotRecommend = (limit)=>{
    return request({
        url: "/personalized",
        params: {
          limit
        }
    })
}
export const getNewAlbum = (limit)=>{
    return request({
        url:'/top/album',
        limit
    })
}
export const getTopList = (idx)=>{
    return request({
    url: "/top/list",
    params:{
        idx
    }
    })
}