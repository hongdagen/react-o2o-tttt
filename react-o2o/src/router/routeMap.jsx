import React from 'react'
import { HashRouter, Route,Link,Match} from 'react-router-dom'

import App from '../containers/index'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'

class RouterMap extends React.Component {
    render() {
        return (
         <HashRouter>
             <div>
                <Route exact path='/' component={App} />
                <Route path='/city' component={City} />
                <Route path='/search/:category' component={Search} />
            </div>
             </HashRouter> 
        )
    }
}

export default RouterMap
