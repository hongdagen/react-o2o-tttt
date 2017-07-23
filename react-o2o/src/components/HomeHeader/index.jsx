import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import '../../static/css/common.less'
import '../../static/css/font.css'
import './style.less'
import { Link } from 'react-router-dom'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字" />
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeHeader