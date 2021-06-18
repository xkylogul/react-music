import React, {useEffect ,memo } from 'react'
import XKYappHeader from '@/components/app-header'
import {TopMenu,Discover} from './style'
import {dicoverMenu} from '@/common/local-data.js'
import { NavLink } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { getRecommendAction} from '@/store/actionCreators.js'
import {connect} from 'react-redux'


function DiscoverMusic(props) {
    const {route} = props
    
  
   useEffect(()=>{
       console.log(props)
 props.getRecommendActions()
   })
   // console.log(JSON.stringify(props)+'你好')//要获取到子路由配置routes
    return (
        <div>
       <XKYappHeader/>
       <Discover>
           <div className="top">
       <TopMenu className="wrap-v1">
           {dicoverMenu.map((item,index)=>(
              <div className="item" key={item.title}>
                   <NavLink to={item.link} >{item.title}</NavLink>
              </div>
           ))}
       </TopMenu>
       </div>
       </Discover>
       {renderRoutes(route.routes)} 
        </div>
    )
}
const mapStateToProps = state=>{
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
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(DiscoverMusic))