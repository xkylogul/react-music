import React, { memo } from 'react'

import {HeaderWrapper,HeaderLeft,HeaderRight} from './style.js'
import {headerLinks} from '@/common/local-data.js'
import {Input} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

export default memo(function XKYappHeader() {

    const showItem=(item,index)=>{
        if(index<3){
            return(
                <NavLink to={item.link}>
                    {item.title}
                   <i className="sprite_01 icon"></i>
                </NavLink>
                
            )
        }else{
            return(
                <a href={item.link}>{item.title}</a>
            )
        }
    }
    return (
        <div>
            <HeaderWrapper>
                <div className="content wrap-v1">
                    <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                   <div className="select-list">
                       {
                          headerLinks.map((item,index)=>{
                              return(<div className="select-item" key={item.title}>
                                {showItem(item,index)}
                              </div>)
                          }) 
                       }
                   </div>
                   </HeaderLeft>
                   <HeaderRight>
                       <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
                       <div className="center">创作者中心</div>
                       <div>登录</div>
                       <div className="divider"></div>
                   </HeaderRight>
                   </div>
            </HeaderWrapper>
        </div>
    )
})
