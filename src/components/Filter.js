import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import phoneActions from "../redux/phonebook/phoneActions";

const Filter = ({ value, filterChange }) => {
  return (
    <div>
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