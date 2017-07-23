import React from 'react'
import { HashRouter, Route,Link} from 'react-router-dom'

import App from '../containers/index'
import Home from '../containers/Home'
import City from '../containers/City'

class RouterMap extends React.Component {
    render() {
        return (
         <HashRouter>
             <div>
                <Route exact path='/' component={App} />
                <Route path='/city' component={City} />
            </div>
             </HashRouter> 
        )
    }
}

export default RouterMap
