import React, { memo ,Suspense } from 'react'
import {Route,Switch,NavLink,HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './router/index.js'
import XKYplayerBar from '@/views/player/player-app-web'


export default memo(function App() {
    return (
        <div>
            <HashRouter>
                <Suspense fallback={<div>页面加载中，请等待</div>}>
                {renderRoutes(routes)}
                </Suspense>
                <XKYplayerBar /> 
            </HashRouter>
        </div>
    )
})
