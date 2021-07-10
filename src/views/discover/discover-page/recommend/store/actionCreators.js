import {GET_RECOMMEND,
    GET_HOT_RECOMMEND,
     GET_NEW_ALBUM,
     GET_TOP_LIST_FLY,
     GET_TOP_LIST_NEW,
     GET_TOP_LIST_ORIGINAL} from './constants'
import {getTopBanner,getHotRecommend,getNewAlbum,getTopList} from '@/services/recommend.js'


export const recommendAction = res=>({
    type:GET_RECOMMEND,
    recommend:res.banners
})
export const HotRecommendAction = res=>({
    type:GET_HOT_RECOMMEND,
    HotRecommend:res.result
})

export const getRecommendAction=()=>{
   return dispatch=>{
    getTopBanner().then(
        res=>{
           dispatch(recommendAction(res))
        }
    )
   }


}
export const getHotRecommendAction =(limit)=>{
    return dispatch=>{
        getHotRecommend(limit).then(
            res=>{
               // console.log(res)
                dispatch(HotRecommendAction(res))
            }
        )
    }
}
  

export const NewAlbum = res =>({  
    type:GET_NEW_ALBUM,
    NewAlbum:res.albums
})
   

export const getNewAlbumAction = (limit)=>{
    return dispatch=>{
       getNewAlbum(limit).then(
        res=>{
           // console.log(res)
            dispatch(NewAlbum(res))
        }
       )
        
    }
}
 export const TopListFlyAction = res=>({
    type: GET_TOP_LIST_FLY,
    TopListFly:res.playlist

}) 
export const TopListNewAction = res=>({
    type: GET_TOP_LIST_NEW,
    TopListNew:res.playlist

}) 
export const TopListOriginalAction = res=>({
    type: GET_TOP_LIST_ORIGINAL,
    TopListOriginal:res.playlist

}) 

export const getTopListAction=(idx)=>{
    return dispatch=>{
        getTopList(idx).then(res=>{
            console.log(res)
           switch(idx){
              case 0:
                  dispatch(TopListFlyAction(res))
              break;
              case 2:
                  dispatch(TopListNewAction(res))
              break
              case 3:
                  dispatch(TopListOriginalAction(res))
              break
              default:
           }
        })
    
    }
      
} 