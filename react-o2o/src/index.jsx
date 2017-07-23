import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import RouterMap from './router/routeMap'
// import createHashHistory from 'history/createHashHistory'
import { Router, Route, IndexRoute,hashHistory } from 'react-router'

// const history =createHashHistory()
const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <RouterMap />
    </Provider>, document.getElementById('root'))