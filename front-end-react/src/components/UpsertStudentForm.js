import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import renderInput from './renderInput'
import renderRadio from './renderRadio'

let UpsertStudentForm = ({ handleCancel, handleSubmit, type, submitting, pristine }) => {

  return (
    <form onSubmit={handleSubmit} className="large-10 large-offset-1 cell">
      <legend><strong>{type} Student</strong></legend>

        <Field
          name="first_name"
          type="text"
          label="First Name"
          component={renderInput}
          required
        />
        <Field
          name="last_name"
          type="text"
          label="Last Name"
          component={renderInput}
          required
        />
        <Field
          name="email"
          type="email"
          label="Email"
          component={renderInput}
          required
        />
        {/*<Field
          name="honorRoll"
          type="text"
          label=""
          component={renderInput}
          required
        />*/}

      <div className="button secondary" onClick={handleCancel} disabled={submitting} style={{ marginRight: '5px' }}>Cancel</div>
      <button className="button primary" disabled={submitting || pristine}>Save Student</button>
    </form>
  )
}

UpsertStudentForm = reduxForm({
  form: 'UpsertStudent',
  enableReinitialize: true
})(UpsertStudentForm)

const selector = formValueSelector('UpsertStudent');
UpsertStudentForm = connect((state, props) => {
  let initialValues = {};
  const { student } = props;
  if (student) {
    initialValues = {
      first_name: student.first_name,
      last_name: student.last_name,
      email: student.email,
    };
  }
  return {
    initialValues
  };
})(UpsertStudentForm);

export default UpsertStudentForm

