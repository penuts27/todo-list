import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    static propTypes = {
        checkAllTodo: PropTypes.func.isRequired
    }
    handleCheckedAll = (e) => {
        this.props.checkAllTodo(e.target.checked)
    }
    handleClearAll = () => {
        this.props.cleanDone()
    }
    render() {
        const { todos } = this.props
        // 已完成個數
        const doneCount = todos.reduce((pre,cur)=>{
            return pre + (cur.done ? 1 : 0)
        },0)
        const total = todos.length
        return (
            <div className="todo-footer">
                {console.log('@',doneCount)}
                <label>
                    <input type="checkbox" onChange={this.handleCheckedAll} checked={doneCount === total && total!==0 ? true : false}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
            </div>
        )
    }
}
