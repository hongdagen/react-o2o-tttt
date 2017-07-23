import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
class City extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
              <h1>city</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo:state.userinfo

    }
}
function mapDispatchToProps(dispatch) {
    return {
        }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)