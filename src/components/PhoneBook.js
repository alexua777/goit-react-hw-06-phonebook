import React , {Component} from "react";
import {connect} from 'react-redux';
import phoneActions from '../redux/phonebook/phoneActions';

class PhoneBook extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label>
          Phone Number
          <input
            type="number"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
          />
        </label>
        <button type="submit"> Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddContact:phoneActions.addPhone
}

export default connect(null, mapDispatchToProps)(PhoneBook);
