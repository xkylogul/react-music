import React, { memo,useEffect,useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getNewAlbumAction} from '../../store/actionCreators'
import AlbumCover from '../../../../../../components/album-cover'
import XKYheaderREM from '@/components/header-rcm/index'
import {Carousel} from 'antd'
import {AlbumWrapper} from './style'

export default memo(function NewAlbum() {
  // const {NewAlbum} = useSelector(state=>state.NewAlbum)
  const {NewAlbum} = useSelector(state=>({
    
      NewAlbum:state.getIn(["recommends","NewAlbum"])
    }))
 const pageRef= useRef()
 //console.log(NewAlbum+'shize')
 const dispatch = useDispatch()
    useEffect(()=>{
   dispatch(getNewAlbumAction(45))
    },[dispatch])
    return (
        <AlbumWrapper>
           <XKYheaderREM title="新碟上架"></XKYheaderREM>
           <div className="content">
             <button className="arrow arrow-left sprite_02"
             onClick={e=>pageRef.current.prev()}></button>
             <div className="album">
             <Carousel dots={false} ref={pageRef}>
             {
             [0,1,2,3,4,5,6,7,8].map(item=>{
               return (
                 <div className="page" key="item">
                   {
                    NewAlbum.slice(item*5,(item+1)*5).map((iten,index)=>{
                      return <AlbumCover
                       key={iten.id}
                       info={iten}
                       size={100}
                       width={118}
                       bgp="-570px" />
                    })
                   }
                   </div>
               )
             })
             }
           </Carousel>
             </div>
             <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
           </div>
        </AlbumWrapper>
    )
})
