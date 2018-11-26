import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';
import CustomerData from './CustomerData';

class Customer extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.userAccessWatcher();
  }

  render() {
    if (this.props.userAdmin === 'root') {
      return (
        <CustomerData />
      );
    }

    return (
      <div className="text-center">
        <h1>User not Proper</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
