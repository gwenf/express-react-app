import React from 'react'
import { withRouter } from 'react-router'
import ConfirmLink from 'react-confirm-dialog'

const StudentTable = ({ history, students, deleteStudent }) => {
  return (
    <table className="hover stack">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Honor Roll</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.honor_roll ? 'Yes' : 'No'}</td>
                <td>
                  <span style={{ cursor: 'pointer', marginRight: '14px' }} onClick={()=>history.push(`student/${student.id}/edit`)}>
                    Edit&nbsp;
                    <i className="fa fa-pencil-square-o"  aria-hidden="true"></i>
                  </span>
                  <span style={{ cursor: 'pointer' }}>
                    <ConfirmLink action={()=>deleteStudent(student.id)}>
                      Delete&nbsp;
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </ConfirmLink>
                  </span>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default withRouter(StudentTable)

