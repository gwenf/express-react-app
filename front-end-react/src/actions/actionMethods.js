import axios from 'axios'
import * as actions from './actions'

const API_ROUTE = 'http://127.0.0.1:4000/api/students/'

export function fetchStudents () {
  return (dispatch, getState) => {
    dispatch(actions.fetchingStudents)

    return axios.get(API_ROUTE)
      .then((res) => {
        dispatch(actions.fetchStudentsSuccess(res.data))
      })
      .catch((err) => {
        dispatch(actions.fetchStudentsFailure(err))
      })
  }
}

export function fetchStudent (studentId) {
  return (dispatch, getState) => {
    dispatch(actions.fetchingStudent)

    return axios.get(API_ROUTE + studentId)
      .then((res) => {
        dispatch(actions.fetchStudentSuccess(res.data))
      })
      .catch((err) => {
        dispatch(actions.fetchStudentFailure(err))
      })
  }
}

export function addStudent (student, history) {
  return (dispatch, getState) => {
    dispatch(actions.upsertingStudent)

    const postConfig = {
      method: 'POST',
      url: API_ROUTE,
      data: student
    }

    return axios(postConfig)
      .then((res) => {
        dispatch(actions.upsertStudentSuccess(res.data))
        history.push('/')
      })
      .catch((err) => {
        dispatch(actions.upsertStudentFailure(err))
      })
  }
}

export function updateStudent (student, history) {
  return (dispatch, getState) => {
    dispatch(actions.upsertingStudent)

    const putConfig = {
      method: 'PUT',
      url: API_ROUTE + student.id,
      data: student
    }

    return axios(putConfig)
      .then((res) => {
        dispatch(actions.upsertStudentSuccess)
        history.push('/')
      })
      .catch((err) => {
        dispatch(actions.upsertStudentFailure(err))
      })
  }
}

export function deleteStudent (studentId) {
  return (dispatch, getState) => {
    dispatch(actions.deletingStudent)

    const deleteConfig = {
      method: 'DELETE',
      url: API_ROUTE + studentId
    }

    return axios(deleteConfig)
      .then((res) => {
        dispatch(actions.deleteStudentSuccess(studentId))
      })
      .catch((err) => {
        dispatch(actions.deleteStudentFailure(err))
      })
  }
}

