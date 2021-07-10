import React, { memo ,useEffect} from 'react'
import {useDispatch,useSelector,shallowEqual } from 'react-redux'
import {getTopListAction} from '../../store/actionCreators'
import { RankingWrapper} from './style'
import XKYheaderREM from '@/components/header-rcm/index'
import TopRanking from '@/components/top-ranking/index'


export default memo(function TopList() {
    const {
         TopListFly,//飙升榜
        TopListNew,//新歌榜
        TopListOriginal//原创榜
    } = useSelector(state => ({
        TopListFly:state.getIn(["recommends","TopListFly"]),
        TopListNew:state.getIn(["recommends","TopListNew"]),
        TopListOriginal:state.getIn(["recommends","TopListOriginal"])
    }),shallowEqual )
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getTopListAction(0))
      dispatch(getTopListAction(2))
      dispatch(getTopListAction(3))
  },[dispatch])
 // console.log(TopListOriginal+TopListFly+'ceshi'+JSON.stringify(TopListNew))
    return (
        <RankingWrapper>
         <XKYheaderREM title="榜单"></XKYheaderREM>
         <div className="tops">
          <TopRanking info={ TopListFly}/> 
       <TopRanking info={TopListNew}/> 
         <TopRanking info={TopListOriginal}/>  
         </div>
        </RankingWrapper>
    )
})
