import './App.css';
import React from 'react';
// import List from './components/List';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      allTodo: []
    }
  }

  handleInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  submitTodo = (event) => {
    let obj = {
      inputText: this.state.inputValue,
      isCompleted: false,
      id: new Date().getTime()
    }
    if (this.state.inputValue.length > 0) {
      this.setState({
        allTodo: [...this.state.allTodo, obj],
        inputValue: ''
      })
    }
  }

  addTodoByKey = (event) => {
    console.log(event)
    if (event.code === "Enter") {
      this.submitTodo()
    }
  }

  deleteTodo = (elm) => {
    const todoToDelete = this.state.allTodo.filter(item => {
      if (item.id !== elm.id) {
        return true
      }
    })
    console.log(todoToDelete)
    this.setState({
      allTodo: todoToDelete
    }, () => { console.log(this.state) })
  }

  completeTodo = (elm) => {
    const strikeOutTodo = this.state.allTodo.map(item => {
      if (item.id === elm.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }
      return item
    })
    this.setState({
      allTodo: strikeOutTodo
    })
  }

  editTodo = (elm) => {
    this.setState({
      inputValue: elm.inputText
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h1>todos</h1>
          <input type='text'
            value={this.state.inputValue}
            placeholder='What needs to be done?'
            onChange={this.handleInputValue}
            onKeyDown={this.addTodoByKey}
          />
          <button onClick={this.submitTodo}>Submit</button>
        </div>
        <List inputValue={this.state.inputValue}
          allTodo={this.state.allTodo} deleteTodo={this.deleteTodo}  
          completeTodo={this.completeTodo} editTodo={this.editTodo}/>
      </React.Fragment>
    );
  }
}

export default App;
