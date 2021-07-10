import React, { memo ,useEffect,useState,useRef,useCallback} from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
import { getRecommendAction} from '../../store/actionCreators.js'
import {  Carousel  } from 'antd'
import { BannerStyle ,
         BannerRight,
        BannerControl,
    BannerLeft  } from './style'
//import {connect} from 'react-redux'

export default memo(function HotRecommend(props) {
    const [currentIndex,setCurrentIndex] = useState(0)
    const bannerRef = useRef()
   const {recommend} = useSelector(state=>({
    recommend:state.getIn(["recommends","recommend"]),
    }),shallowEqual)
 const dispatch = useDispatch()
    useEffect(()=>{
   dispatch(getRecommendAction())
 // props.getRecommendActions()
    },[dispatch])
    const bannerChange = useCallback((from ,to)=>{
       setTimeout(()=>{
   setCurrentIndex(to)
       },0)
    },[])
    //console.log(JSON.stringify(recommend))
    const bgImage = recommend[currentIndex]&&(recommend[currentIndex].imageUrl+"?imageView&blur=40x20")
    //console.log(recommend[0])
    return (
        
      <BannerStyle  bgImage={ bgImage}>
           <div className="banner wrap-v2">
               <BannerLeft>
 <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
              {
               recommend.map((item,index)=>{
                   return(
                       <div className="banner-item" key={item.imageUrl}>
                           <img className="image" src={item.imageUrl} alt={item.typeTitle}></img>
                       </div>
                   )
               })
              }
    
  </Carousel>
  </BannerLeft>
  <BannerRight></BannerRight>
  <BannerControl>
          <button className="btn left" onClick={e=>bannerRef.current.prev()} ></button>
          <button className="btn right" onClick={e=>bannerRef.current.next()}></button>
        </BannerControl>
  </div>
      </BannerStyle>
            
    
               

    )
})
/* const mapStateToProps = state=>{
    return{
        recommend:state.recommend
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        getRecommendActions(){
            dispatch(getRecommendAction)
        }
    }
} */

// export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))