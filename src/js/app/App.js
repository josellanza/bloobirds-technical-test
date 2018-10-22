import React, {Component} from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', ingredient: ['']};

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
    .catch( (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <section>
        <form >
          <input type="text" value={this.state.value} placeholder="Search for recipe" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>
            Search
          </button>
        </form>
        <ul>
          {this.state.ingredient.map( (item, i) => {
            return <li key={i}>{item.name}</li>
          })}
          {this.state.ingredient.length == 0 && (
            <li>NO RESULTS FOUND</li>
          )}
        </ul>
      </section>
    );
  }
}

export default App;