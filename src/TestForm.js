import React from 'react';
import RangeList from './RangeList'
import './TestForm.css';

export default class TestForm extends React.Component {
    constructor(props) {
      super(props);
      this.rl = new RangeList()
      this.state = {
        operator: "add",
        result: this.rl.ranges,
        start: null,
        end: null,
        history: "I just created a RangeList() named rl. \n"
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      const start = Number.parseFloat(this.state.start)
      const end = Number.parseFloat(this.state.end)
      let transaction = ""
      if(this.state.operator === "add")
      {
        this.rl.add([start, end])
        transaction = `I just added a range [${start}, ${end}] to rl. \n`
      }
      else if (this.state.operator === "remove")
      {
        this.rl.remove([start, end])
        transaction = `I just removed a range [${start}, ${end}] from rl. \n`
      }
      this.setState({
        result: this.rl.ranges.map((it) => { return `[${it[0]}, ${it[1]})` }).join(" ")
      })
      transaction += `Now, rl = ${this.rl.ranges.map((it) => { return `[${it[0]}, ${it[1]})` }).join(" ")} \n`
      this.setState({
        history: this.state.history + transaction
      })
      event.preventDefault();
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>Operator : </span>
              <select onChange={this.handleChange} value={this.state.operator}>
                <option value="add">Add</option>
                <option value="remove">Remove</option>
              </select>
            </label>
            <label>
              <span>Start : </span>
              <input name="start" onChange={this.handleInputChange}>
              </input>
            </label>
            <label>
              <span>End : </span>
              <input name="end" onChange={this.handleInputChange}>
              </input>
            </label>
            <input type="submit" value="Submit" />
            <label>
              <span>Result : </span>
              <p>
                {this.state.result}
              </p>
            </label>
          </form>
          <p>History</p>
          <textarea value={this.state.history} readOnly>
            {/* { this.state.history } */}
          </textarea>
        </div>
      );
    }
  }