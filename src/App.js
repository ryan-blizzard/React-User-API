import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data:{
        results: []
      }
    }
  }
  componentDidMount(){
    fetch('https://randomuser.me/api?results=25')
     .then(response => response.json())
     .then(data => {
      console.log(data)
        this.setState({ data })
      })
    }

    buttonClick(index){
      let allData = this.state.data
      let item = allData.results[index]
      if(item.box === 'open'){
        item.box = '' 
      }
      else{
        item.box = 'open'
      }
      this.setState({allData})
      
    }

  render() {
    return ( <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div>
    {this.state.data.results.map((item,index) => (
<div key = {index}>
       <p>Name:{`${item.name.first} ${item.name.last}`}</p>
      <img src={item.picture.thumbnail} alt={item.name.first}></img>
      <button onClick={() => this.buttonClick(index)}>Button</button>
      <div className={`box ${item.box}`}>
      {item.phone} 
      {item.gender}
      
      </div>
      </div>))     
    }

    </div>

    </div>
    )
  }
}


export default App;
