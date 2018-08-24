import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { exampleAction } from '../actions/actions'
import StudentTable from './StudentTable'
import * as actions from '../actions/actionMethods'

class MainPage extends Component {
  constructor () {
    super()
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  componentDidMount () {
    this.props.action.fetchStudents()
  }

  deleteStudent (id) {
    this.props.action.deleteStudent(id)
  }

	render(){
		return (
      <div className="grid-x grid-margin-x">
        <div className="large-10 large-offset-1 cell">
          <button className="hollow button warning" onClick={()=>this.props.history.push('/add-student')}>Add Student</button>

          <StudentTable students={this.props.students || []} deleteStudent={this.deleteStudent} />
        </div>
			</div>
		)
	}
}

const mapStateToProps = function(state, ownProps){
  return {
    students: state.studentReducer.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

