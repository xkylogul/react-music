import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover =React.lazy(()=>import('@/views/discover'))
const Mine =React.lazy(()=>import('@/views/mine'))
const Friends =React.lazy(()=>import('@/views/friends'))
const Shop=React.lazy(()=>import('@/views/shop'))
const Recommend  =React.lazy(()=>import('../views/discover/discover-page/recommend'))
const Ranking =React.lazy(()=>import('../views/discover/discover-page/ranking'))
const Songs =React.lazy(()=>import('@/views/discover/discover-page/songs'))
const Djradio =React.lazy(()=>import('../views/discover/discover-page/djradio'))
const Artist=React.lazy(()=>import('../views/discover/discover-page/artist'))
const Album=React.lazy(()=>import('../views/discover/discover-page/artist'))
const Player =React.lazy(()=>import('../views/player/player-app-web/index'))
//import discover from '@/views/discover'
//import mine from '@/views/mine'
//import friends from '@/views/friends'
//import shop from '@/views/shop'
//import recommend from '../views/discover/discover-page/recommend'
//import ranking from '../views/discover/discover-page/ranking'
//import songs from '@/views/discover/discover-page/songs'
//import djradio from '../views/discover/discover-page/djradio'
//import artist from '../views/discover/discover-page/artist'
//import album from '../views/discover/discover-page/album'
//import player from '../views/player/player-app-web/index'

const routes = [
    {
        path:'/',
        exact:true,
        render:()=>(
            <Redirect to="/discover/recommend" />
        )
    },
    {
        path:'/discover',
        component:Discover,
        routes:[
        {
        path:'/discover/recommend',
        component:Recommend
        },
        {
            path:'/discover/ranking',
            component:Ranking
        },
        {
            path:'/discover/songs',
            component:Songs
        },
        {
            path:'/discover/djradio',
            component:Djradio
        },
        {
            path:'/discover/artist',
            component:Artist
        },
        {
            path:'/discover/album',
            component:Album
        },
        {
            parh:'/discover/player',
            component:Player
        }
        ]
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/friends',
        component:Friends
    },
    {
        path:'/shop ',
        component:Shop 
    }
]
export default routes