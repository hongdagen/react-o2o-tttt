import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
import App from './containers/index'
import configureStore from './store/configureStore.js'
import {Provider} from 'react-redux'

const store = configureStore()
ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'))