import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
    // 對接收的props進行:類型,必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (e) => {
        // 輸入enter後才送出值
        if(e.keyCode !== 13) return
        // 若未輸入值扔enter則跳出警示
        if(e.target.value.trim() === ''){
            window.alert('輸入值不得為空')
            return
        }
        const todoObj = {id:nanoid(), name: e.target.value, done: false}
        this.props.addTodo(todoObj)
        e.target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
