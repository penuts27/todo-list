import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {mouse: false}
    handleMouse = (flag) => {
        return (e) =>{
            this.setState({mouse: flag})
        }
    }
    handleChecked = (id) => {
        return (e) => {
            console.log(id,e.target.checked)
            this.props.updateTodo(id,e.target.checked)
        }
    }
    handleDeleted = (id) => {
        return () => {
            // 若點確定返回true，反之false
            if(window.confirm('確定刪除嗎')){
                this.props.deleteTodo(id)
            }
        }
    }
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
                <span>{name}</span> 
                </label>
                <button onClick={this.handleDeleted(id)} className="btn btn-danger" style={{display: mouse ? 'block': 'none'}}>删除</button>
            </li>
        )
    }
}
