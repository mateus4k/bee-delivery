import { call, put } from 'redux-saga/effects'
import { Creators as UserActions } from '../ducks/user'
import api from '../../services/api'

export function * addUser (action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`)

    const userData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url
    }

    yield put(UserActions.addUserSuccess(userData))
  } catch (error) {
    yield put(UserActions.addUserFailure('User not found'))
  }
}
