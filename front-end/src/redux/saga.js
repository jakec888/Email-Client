import { all } from 'redux-saga/effects'
import retrieveEmailSagas from './actions/retrieveEmail.saga'
import composeEmailSagas from './actions/composeEmail.saga'

export default function * rootSaga (getState) {
  yield all([retrieveEmailSagas(), composeEmailSagas()])
}
