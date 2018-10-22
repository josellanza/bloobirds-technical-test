import React, {Component} from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', recipe: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.get('http://localhost:3000/query', {
      params: { 
        name: this.state.value
      }
    })
    .then( (response) => {
      this.setState({ recipe: response.data["0"].name})
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form >
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className='button' onClick={this.handleSubmit}>
          Click Me
        </button>
        <div>{this.state.recipe}</div>
      </form>
    );
  }
}

export default App;