import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListCompoent from '../../../../components/List/index'
import LoadMore from '../../../../components/LoadMore/index'

import { getSearchData } from '../../../../fetch/Search/search.js'

// 初始化一个组件的 state
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
}

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <ListCompoent data={this.state.data} />
                        : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
                        : ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstPageData();
    }
    //获取首屏数据
    loadFirstPageData() {
        const cityName = this.props.cityName
        const result = getSearchData(cityName, 0)
        this.resultHandle(result)
    }
    //加载更多数据
    loadMoreData() {
        //记录状态
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName
        const page = this.state.page
        const result = getSearchData(cityName, page)

        this.resultHandle(result)
        //增加page计数
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }
    //数据处理
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            //存储
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        })

    }
    componentDidUpdate(prevProps, prevState) {

    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)