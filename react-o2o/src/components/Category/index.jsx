import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import './style.less'
class Category extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            index: 0
        }
    }
    render() {
        var opt = {
            auto: 2000,//两秒钟滚动一次
            callback: (index) => {
                this.setState({
                    index: index
                })
            }  //每次滚动完会怎么样
        }
        return (
           <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <a to="/search/jingdian"><li className="float-left jingdian">景点</li></a>
                            <a to="/search/ktv"><li className="float-left ktv">KTV</li></a>
                            <a to="/search/gouwu"><li className="float-left gouwu">购物</li></a>
                            <a to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">生活服务</li></a>
                            <a to="/search/jianshenyundong"><li className="float-left jianshenyundong">健身运动</li></a>
                            <a to="/search/meifa"><li className="float-left meifa">美发</li></a>
                            <a to="/search/qinzi"><li className="float-left qinzi">亲子</li></a>
                            <a to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">小吃快餐</li></a>
                            <a to="/search/zizhucan"><li className="float-left zizhucan">自助餐</li></a>
                            <a to="/search/jiuba"><li className="float-left jiuba">酒吧</li></a>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <a to="/search/meishi"><li className="float-left meishi">美食</li></a>
                            <a to="/search/dianying"><li className="float-left dianying">电影</li></a>
                            <a to="/search/jiudian"><li className="float-left jiudian">酒店</li></a>
                            <a to="/search/xuixianyule"><li className="float-left xuixianyule">休闲娱乐</li></a>
                            <a to="/search/waimai"><li className="float-left waimai">外卖</li></a>
                            <a to="/search/huoguo"><li className="float-left huoguo">火锅</li></a>
                            <a to="/search/liren"><li className="float-left liren">丽人</li></a>
                            <a to="/search/dujiachuxing"><li className="float-left dujiachuxing">度假出行</li></a>
                            <a to="/search/zuliaoanmo"><li className="float-left zuliaoanmo">足疗按摩</li></a>
                            <a to="/search/zhoubianyou"><li className="float-left zhoubianyou">周边游</li></a>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <a to="/search/ribencai"><li className="float-left ribencai">日本菜</li></a>
                            <a to="/search/spa"><li className="float-left SPA">SPA</li></a>
                            <a to="/search/jiehun"><li className="float-left jiehun">结婚</li></a>
                            <a to="/search/xuexipeixun"><li className="float-left xuexipeixun">学习培训</li></a>
                            <a to="/search/xican"><li className="float-left xican">西餐</li></a>
                            <a to="/search/huochejipiao"><li className="float-left huochejipiao">火车机票</li></a>
                            <a to="/search/shaokao"><li className="float-left shaokao">烧烤</li></a>
                            <a to="/search/jiazhuang"><li className="float-left jiazhuang">家装</li></a>
                            <a to="/search/chongwu"><li className="float-left chongwu">宠物</li></a>
                            <a to="/search/all"><li className="float-left quanbufenlei">全部分类</li></a>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Category