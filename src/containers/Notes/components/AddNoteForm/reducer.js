export const initialState = {
  time: '',
  noteText: '',
  color: '',
  error: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'noteText':
      return { ...state, noteText: action.data };
    case 'color':
      return { ...state, color: action.data };
    case 'timeCreated':
      return { ...state, time: action.data };
    case 'reset':
      return { ...state, ...action.data };
    case 'error':
      return { ...state, error: action.data };
    default:
      throw new Error();
  }
}
