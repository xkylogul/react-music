import React, { memo ,useEffect} from 'react'
import XKYheaderREM from '@/components/header-rcm/index'
import {useDispatch,useSelector} from 'react-redux'
import {getHotRecommendAction} from '../../store/actionCreators'
import { get } from 'immutable'
import {HotRecommendWrapper} from './style'

import XKYSongsCover from '@/components/song-cover'

export default memo(function Hot() {
    const { HotRecommend} =useSelector(state=>({
     
        HotRecommend:state.getIn(["recommends","HotRecommend"])
    }))

   //console.log( JSON.stringify(HotRecommend)+'ss')
    const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getHotRecommendAction(4))
      
  }, [dispatch])
    return (
        <HotRecommendWrapper>
            
           <XKYheaderREM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></XKYheaderREM>
           <div className="recommend-list">
           {HotRecommend.map((item,index)=>{
               return(
                <XKYSongsCover key={item.id} info={item}></XKYSongsCover>
               )
           })}
           </div>
         
        </HotRecommendWrapper>
    )
})
