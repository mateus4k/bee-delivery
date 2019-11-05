import { all, takeLatest } from 'redux-saga/effects'

import { Types as UserTypes } from '../ducks/user'
import { addUser } from './user'

export default function * rootSaga () {
  yield all([takeLatest(UserTypes.ADD_REQUEST, addUser)])
}
