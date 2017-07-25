import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader/index'
import { Match } from 'react-router-dom'
import SearchList from '../Search/subpage/SearchList'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
               <SearchHeader/>
               <SearchList />
            </div>
        )
    }
}
export default Search