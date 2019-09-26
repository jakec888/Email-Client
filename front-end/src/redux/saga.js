import { all } from 'redux-saga/effects'
import retrieveEmailSagas from './actions/retrieveEmail.saga'

export default function * rootSaga (getState) {
  yield all([retrieveEmailSagas()])
}
