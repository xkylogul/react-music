import React from 'react'
import discover from '@/views/discover'
import mine from '@/views/mine'
import friends from '@/views/friends'
import shop from '@/views/shop'
import { Redirect } from 'react-router-dom'
import recommend from '../views/discover/discover-page/recommend'
import ranking from '../views/discover/discover-page/ranking'
import songs from '@/views/discover/discover-page/songs'
import djradio from '../views/discover/discover-page/djradio'
import artist from '../views/discover/discover-page/artist'
import album from '../views/discover/discover-page/album'

const routes = [
    {
        path:'/',
        exact:true,
        render:()=>(
            <Redirect to="/discover" />
        )
    },
    {
        path:'/discover',
        component:discover,
        routes:[
        {
        path:'/discover/recommend',
        component:recommend
        },
        {
            path:'/discover/ranking',
            component:ranking
        },
        {
            path:'/discover/songs',
            component:songs
        },
        {
            path:'/discover/djradio',
            component:djradio
        },
        {
            path:'/discover/artist',
            component:artist
        },
        {
            path:'/discover/album',
            component:album
        },
        ]
    },
    {
        path:'/mine',
        component:mine
    },
    {
        path:'/friends',
        component:friends
    },
    {
        path:'/shop ',
        component:shop 
    }
]
export default routes