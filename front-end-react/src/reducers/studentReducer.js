function studentReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCHING_STUDENTS':
      return {
        ...state,
        error: null
      }
    case 'FETCH_STUDENTS_SUCCESS':
      return {
        ...state,
        students: action.students
      }
    case 'FETCH_STUDENTS_FAILURE':
      return {
        ...state,
        error: action.error
      }
    case 'FETCHING_STUDENT':
      return {
        ...state,
        error: null,
        student: null
      }
    case 'FETCH_STUDENT_SUCCESS':
      return {
        ...state,
        student: action.student
      }
    case 'FETCH_STUDENT_FAILURE':
      return {
        ...state,
        error: action.error
      }
    case 'UPSERTING_STUDENT':
      return {
        ...state,
        error: null
      }
    case 'UPSERT_STUDENT_SUCCESS':
      return state
    case 'UPSERT_STUDENT_FAILURE':
      return {
        ...state,
        error: action.error
      }
    case 'DELETING_STUDENT':
      return {
        ...state,
        error: null
      }
    case 'DELETE_STUDENT_SUCCESS':
      let students = [ ...state.students ]
      let index = students.findIndex((student) => {
        return student.id === action.studentId
      })
      students.splice(index, 1)
      return {
        ...state,
        students
      }
    case 'DELETE_STUDENT_FAILURE':
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default studentReducer

