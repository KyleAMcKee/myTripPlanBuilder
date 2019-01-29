import React, { Component } from 'react';
import './trips.css';

class Trips extends Component {
  constructor() {
      super();
      this.state = {
        trips: [],
        title: '',
        summary: '',
        edit: 0
      }
      this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    fetch('/trip-plans')
        .then(res => res.json())
        .then(trips => this.setState({trips}, () => console.log('Trips fetch...', trips)))
        .catch(error => console.log(error));
  }

  onClickDelete(id) {
    fetch('/trip-plans/' + id, {
        method: 'delete'
      });
    const trips = [...this.state.trips]
    let index = trips.map(x => x.id).indexOf(id);
    trips.splice(index, 1)
    this.setState({
      trips: trips
    });
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
        [name]: value
    });
  }

  addTrip() {
    if (!this.state.summary.length || !this.state.title.length)
      return;
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
    fetch('/trip-plans')
      .then(res => res.json())
      .then(trips => this.setState({trips}))
      .catch(error => console.log(error));
  }

  onClickEdit(id) {
    this.setState({
      edit: id
    });
  }

  render() {
    return (
      <div>
        <ul>
            {this.state.trips.map(trip =>
                <li key={trip.id}>
                  {trip.title} - {trip.summary}
                  <button onClick={() => this.onClickDelete(trip.id)}>Remove Trip</button>
                  <button onClick={() => this.onClickEdit(trip.id)}>Edit trip</button>
                  {(this.state.edit === trip.id) && <div>
                    <input type="text" name="title" value={trip.title}/>
                    <input type="text" name="summary" value={trip.summary}/>
                    </div>}
                  <ul>
                    {trip.days.map(day =>
                    <li key={day.id}>
                      {day.title} - {day.description}
                      <button>Remove Day</button>
                    </li>
                    )}
                  </ul>
                </li>
            )}
        </ul>
        <h1>Add new trip</h1> 
        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>
        <input type="text" name="summary" value={this.state.summary} onChange={this.changeHandler}/>
        <input type="submit" value="Submit" onClick={() => this.addTrip()}/>
      </div>
    );
  }
}

export default Trips;