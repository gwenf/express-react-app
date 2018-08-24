export const fetchingStudents = () => {
  return {
    type: 'FETCHING_STUDENTS'
  }
}
export const fetchStudentsSuccess = (students) => {
  return {
    type: 'FETCH_STUDENTS_SUCCESS',
    students
  }
}
export const fetchStudentsFailure = (error) => {
  return {
    type: 'FETCH_STUDENTS_FAILURE',
    error
  }
}

export const fetchingStudent = () => {
  return {
    type: 'FETCHING_STUDENT'
  }
}
export const fetchStudentSuccess = (student) => {
  return {
    type: 'FETCH_STUDENT_SUCCESS',
    student
  }
}
export const fetchStudentFailure = (error) => {
  return {
    type: 'FETCH_STUDENT_FAILURE',
    error
  }
}

export const upsertingStudent = () => {
  return {
    type: 'UPSERTING_STUDENT'
  }
}
export const upsertStudentSuccess = (student) => {
  return {
    type: 'UPSERT_STUDENT_SUCCESS',
    student
  }
}
export const upsertStudentFailure = (error) => {
  return {
    type: 'UPSERT_STUDENT_FAILURE',
    error
  }
}

export const deletingStudent = () => {
  return {
    type: 'DELETING_STUDENT'
  }
}
export const deleteStudentSuccess = (studentId) => {
  return {
    type: 'DELETE_STUDENT_SUCCESS',
    studentId
  }
}
export const deleteStudentFailure = (error) => {
  return {
    type: 'DELETE_STUDENT_FAILURE',
    error
  }
}
