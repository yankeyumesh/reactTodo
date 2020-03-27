import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list : []
    }
  }

  addItem(todoValue){
    if(todoValue !== ''){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatelist = list.filter(item => item.id !== id);
    this.setState({ list: updatelist });
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return (
      <div className="App">
        <img src={logo} alt="reactimg"></img>
        <h1>Nikhil Patil</h1>
        <h2>To Do App</h2>
  
        <div className="container">
          Add an Item....<br/><br/>
          <input type="text" className="input-text" placeholder="Write a ToDo" required value={this.setState.newItem} onChange={e => this.updateInput(e.target.value)} name="" id=""></input>
          <button className="add-btn" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add Todo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input type="checkbox" name="idDone" checked={item.isDone} onChange={()=> {}}></input>
                    {item.value}
                    <button className="btn" onClick={()=> this.deleteItem(item.id)}>Delete</button>
                  </li>
                );
              })}
              <li>
                <input type="checkbox" name="" id=""></input>Record Video 
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
 
}

export default App;
