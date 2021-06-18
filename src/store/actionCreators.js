import {GET_RECOMMEND} from './constants'
import {getTopBanner} from '@/services/recommend.js'


export const recommendAction = recommend=>({
    type:GET_RECOMMEND,
    recommend
})

export const getRecommendAction=(dispatch,getState)=>{

getTopBanner().then(
    res=>{
        console.log(res)
    }
)
}