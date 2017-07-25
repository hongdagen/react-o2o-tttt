import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import '../../static/css/common.less'
import './style.less'
import { withRouter } from 'react-router-dom'
import SearchInput from '../SearchInput/index'
class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
             <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
    clickHandle(){
        window.history.back()
    }
     enterHandle(value){
    this.props.history.push('/search/all/'+encodeURIComponent(value))
    }
}
export default withRouter(SearchHeader)