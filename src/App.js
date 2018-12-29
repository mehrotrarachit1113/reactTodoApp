import React, { Component } from 'react';
import DisplayTodo from './Components/DisplayTodo'
import AddTodo from './Components/AddTodo'

class App extends Component {

  state = {
    todos : [
      {id : 1, content : 'Task 1'},
      {id : 2, content : 'Task 2'}
    ]
  }

  deleteTodo = (id) => {
    let newTodo = this.state.todos.filter(todo => {
      return todo.id !== id    
    })
    this.setState({
      todos : newTodo
    })
  }

  addTodo = (todo) => {
    let tempLen = this.state.todos.length
    todo.id = tempLen + 1
    let newTodo = [...this.state.todos , todo]
    this.setState({
      todos : newTodo
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className = 'center blue-text'>Todo's</h1>
        <DisplayTodo  todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
