import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import UpsertStudentForm from './UpsertStudentForm'
import * as actions from '../actions/actionMethods'

class AddStudent extends Component {
  constructor () {
    super()
    this.cancel = this.cancel.bind(this)
    this.submit = this.submit.bind(this)
  }

  cancel () {
    // clear form and route back to home page
    this.props.history.replace('/')
  }

  submit (student) {
    student = {
      ...student,
      honor_roll: true
    }
    this.props.action.addStudent(student, this.props.history)
  }

  render () {
    return (
      <div className="grid-x grid-margin-x">
        <UpsertStudentForm
          type="Add"
          handleCancel={this.cancel}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddStudent))

