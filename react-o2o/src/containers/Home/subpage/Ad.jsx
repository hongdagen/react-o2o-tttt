import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/Home/home.js'
class Ad extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
               
            </div>
        )
    }
    componentDidMount() {
        const result = getAdData()
        result.then((res) => {
            return res.json
        }).then((json) => {
            const data = json
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        })
    }
}
export default Ad