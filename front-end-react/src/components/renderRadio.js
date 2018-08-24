import React from 'react'

const renderRadio = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label>
        <input {...input} type="radio" />
        <span className={styles.labelText}>{label}</span>
      </label>
      {touched && error && <span className={styles.formError}>{error}</span>}
    </div>
  )
}

export default renderRadio

