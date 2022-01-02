import logo from './logo.svg';
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css';

import React, { Component } from 'react'


export default class App extends Component {
  state = {todos: [
    {id: '001', name: '吃飯',done: true},
    {id: '002',name: '睡覺',done: true},
    {id: '003',name: '打代碼',done: false},
    {id: '004',name: '逛街',done: true}
  ]}
  // 用於新增todo
  addTodo = (todoObj) => {
    // 獲取原todos
    const {todos} = this.state
    // 追加一個todo
    const newTodos = [todoObj, ...todos]
    // 更新狀態
    this.setState({ todos: newTodos })
  }
  // 用於更新todo check狀態
  updateTodo = (id,done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id){
        return {...todoObj,done:done}
      }else{
        return todoObj
      }
    })
    console.log('%',newTodos)
    // 更新狀態
    this.setState({ todos: newTodos })
  }
  // 用於刪除todo
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => todoObj.id !== id)
    this.setState({ todos: newTodos })
  }
  // 用於全選或全不選
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map(todoObj => {
      return {...todoObj,done}})
    this.setState({ todos: newTodos })
  }
  // 用於清除所有已完成
  cleanDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => !todoObj.done)
    this.setState({ todos: newTodos })
}
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
          <Footer todos = {todos} checkAllTodo={this.checkAllTodo} cleanDone={this.cleanDone}/>
        </div>
      </div>
    )
  }
}


