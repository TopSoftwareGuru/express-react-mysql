import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action';

class RemoveButton extends Component {
  constructor(props) {
    super(props);
    this.handleTableRemove = this.handleTableRemove.bind(this);
  }

  handleTableRemove() {
    const { email } = this.props;
    this.props.userRemoveWatcher(email);
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger"
          key="1"
          onClick={this.handleTableRemove}
        >
          REMOVE
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);
