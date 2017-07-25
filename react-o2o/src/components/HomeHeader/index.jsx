import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import '../../static/css/common.less'
import '../../static/css/font.css'
import { withRouter } from 'react-router-dom'
import './style.less'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput/index'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            kwd: ''
        }
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
                       <SearchInput value="" enterHandle={this.enterHandle.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }
    enterHandle(value){
    this.props.history.push('/search/all/'+encodeURIComponent(value))
    }
  
}
export default withRouter(HomeHeader)