import React, { memo } from 'react'
import  HotRecommend from './c-component/hot-component/index'
import Hot from './c-component/hot/index'
import NewAlbum from './c-component/new-album/index'
import TopList from './c-component/top-list/index'

import { 
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
  } from './style';

export default memo(function Recommend() {
    return (
        <RecommendWrapper>
         <HotRecommend></HotRecommend>
         <Content className="wrap-v2">
             <RecommendLeft>
            <Hot></Hot>
           <NewAlbum></NewAlbum>
           <TopList></TopList>
           </RecommendLeft>
           </Content>
        </RecommendWrapper>
    )
})
