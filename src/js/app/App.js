import React, {Component} from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', ingredient: []};

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
      this.setState({ ingredient: response.data})
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <section className="container">
        <form >
          <input type="text" value={this.state.value} placeholder="Search for recipe" onChange={this.handleChange} />
          <button className='button' onClick={this.handleSubmit}>
            Search
          </button>
        </form>
        <ul>
          {this.state.ingredient.map( (user, i) => {
            return <li key={i}>{user.name}</li>
          })}
        </ul>
      </section>
    );
  }
}

export default App;