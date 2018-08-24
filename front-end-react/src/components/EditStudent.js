import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import UpsertStudentForm from './UpsertStudentForm'
import * as actions from '../actions/actionMethods'

class EditStudent extends Component {
  constructor () {
    super()
    this.cancel = this.cancel.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount () {
    this.props.action.fetchStudent(this.props.match.params.studentId)
  }

  cancel () {
    // clear form and route back to home page
    this.props.history.replace('/')
  }

  submit (student) {
    student = {
      ...student,
      honor_roll: true,
      id: this.props.student.id
    }
    this.props.action.updateStudent(student, this.props.history)
  }

  render () {
    return (
      <div className="grid-x grid-margin-x">
        {
          this.props.student ?
          <UpsertStudentForm
            type="Edit"
            handleCancel={this.cancel}
            onSubmit={this.submit}
            student={this.props.student}
          /> :
          <p style={{ textAlign: 'center', marginTop: '150px' }}>Loading...</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.studentReducer.student
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditStudent))

