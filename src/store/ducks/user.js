/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'user/ADD_REQUEST',
  ADD_SUCCESS: 'user/ADD_SUCCESS',
  ADD_FAILURE: 'user/ADD_FAILURE'
}

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      }
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user }
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
}
