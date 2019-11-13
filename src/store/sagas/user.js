import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

import { Creators as UserAction } from '../ducks/user'

export function * addUser (action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`)

    const userData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
      avatar: data.avatar_url
    }

    yield put(UserAction.addUserSuccess(userData))
  } catch (error) {
    yield put(UserAction.addUserFailure('User not found'))
  }
}
