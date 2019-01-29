import React, { Component } from 'react';


class NewTrip extends Component {
  constructor() {
      super();
      this.state = {
        title: '',
        summary: ''
      }
      this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
        [name]: value
    });
  }

  addTrip() {
    fetch('/trip-plans/new', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `title=${this.state.title}&summary=${this.state.summary}`
    });
    this.setState({
        title: '',
        summary: ''
    });

  }

  render() {
    return (
      <div>
        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>
        <input type="text" name="summary" value={this.state.summary} onChange={this.changeHandler}/>
        <input type="submit" value="Submit" onClick={() => this.addTrip()}/>
      </div>
    );
  }
}

export default NewTrip;
