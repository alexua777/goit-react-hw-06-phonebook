import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import phoneActions from "../redux/phonebook/phoneActions";

const container = {
  margin: "25px",
  border: "2px solid grey",
  padding: "10px",
  boxShadow: "3px 2px 28px 6px rgba(0,0,0,0.75)",
  width: "350px",
}


const Filter = ({ value, filterChange }) => {
  return (
    <div style={container}>
      <h2>Contacts </h2>
      <input
        type="text"
        value={value}
        onChange={e => filterChange(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  value:state.filter,
})

const mapDispatchToProps = {
  filterChange:phoneActions.filterPhone
}
 


export default connect(mapStateToProps, mapDispatchToProps)(Filter);