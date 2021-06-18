import React, { memo } from 'react'
import {Route,Switch,NavLink,HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './router/index.js'


export default memo(function App() {
    return (
        <div>
            <HashRouter>
                {renderRoutes(routes)}
            </HashRouter>
        </div>
    )
})
