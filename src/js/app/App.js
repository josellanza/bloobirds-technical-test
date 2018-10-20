import React, {Component} from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch('/users', { 
        method: 'POST',
        data: {
          name: self.refs.name        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Search for recipe" ref="search"/>
        <input type="submit" />
      </form>
    );
  }
}


export default App;