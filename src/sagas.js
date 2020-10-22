import { all } from 'redux-saga/effects'

import usersSagas from './containers/users/saga'

export default function* rootSaga() {
    yield all([usersSagas()])
}
