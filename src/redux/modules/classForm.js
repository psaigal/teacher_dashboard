const SAVE = 'redux-example/student/SAVE';
const SAVE_SUCCESS = 'redux-example/student/SAVE_SUCCESS';
const SAVE_FAIL = 'redux-example/student/SAVE_FAIL';
const LOAD = 'redux-example/student/LOAD';
const LOAD_SUCCESS = 'redux-example/student/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/student/LOAD_FAIL';
const SAVE_EDIT = 'redux-example/student/SAVE_EDIT';
const SAVE_SUCCESS_EDIT = 'redux-example/student/SAVE_SUCCESS_EDIT';
const SAVE_FAIL_EDIT = 'redux-example/student/SAVE_FAIL_EDIT';
const EDIT_STUDENT = 'redux-example/student/EDIT_STUDENT';
const SHOW_EDIT_MODAL = 'redux-example/student/SHOW_EDIT_MODAL';
const SHOW_MODAL = 'redux-example/student/SHOW_MODAL';

const initialState = {
  loaded: false,
  studentList: []
};

export default function classForm(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        studentList: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case SAVE:
      return {
        ...state,
        loading: true
      };
    case SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: false,
        studentList: action.result
      };
    case SAVE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case SAVE_EDIT:
      return {
        ...state,
        loading: true
      };
    case SAVE_SUCCESS_EDIT:
      return {
        ...state,
        loading: false,
        loaded: false,
        studentList: action.result
      };
    case SAVE_FAIL_EDIT:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: action.showModalBool
      };
    case EDIT_STUDENT:
      console.log('in edit student');
      console.log(action.id);
      return {
        ...state,
        studentId: action.id
      };
    case SHOW_EDIT_MODAL:
      return {
        ...state,
        editShowModal: action.showModalBool
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.classForm && globalState.classForm.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadClass')
  };
}

export function addStudent(email, github, firstname, lastname, notes) {
  console.log('ADD STUDENTS!!!***************');
  return {
    types: [SAVE, SAVE_SUCCESS, SAVE_FAIL],
    promise: (client) => client.post('/postClassForm', {
      data: {
        email: email,
        github: github,
        firstname: firstname,
        lastname: lastname,
        notes: notes
      }
    })
  };
}

export function editAStudent(email, github, firstname, lastname, notes, id) {
  console.log('EDIT STUDENTS!!!***************');
  return {
    types: [SAVE_EDIT, SAVE_SUCCESS_EDIT, SAVE_FAIL_EDIT],
    promise: (client) => client.post('/editClassForm', {
      data: {
        email: email,
        github: github,
        firstname: firstname,
        lastname: lastname,
        notes: notes,
        id: id
      }
    })
  };
}

export function isEditClicked(id) {
  return { type: EDIT_STUDENT, id };
}

export function showModalFuncEdit(showModalBool) {
  return { type: SHOW_EDIT_MODAL, showModalBool };
}

export function showModalFunc(showModalBool) {
  return { type: SHOW_MODAL, showModalBool };
}

