import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Home from './Home/index'
import LocalStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo.js'
import Perf from 'react-addons-perf'//性能检测工具
/**
 * 性能检测
 */
if (__DEV__) {
    window.Perf = Perf
}
class App extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            init: false
        }
    }
    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
    componentDidMount() {
        //从LocalStore里面获取城市 
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = '上海'
        }
        //将城市信息存储到Redux中
        this.props.userInfoActions.update({
            cityName:cityName
        })

    }
}
function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)