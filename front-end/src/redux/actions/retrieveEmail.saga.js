import { all, takeEvery, put, call } from 'redux-saga/effects'
import API from '../../api'
import { GET_EMAILS, retrieveEmailsSuccess } from './retrieveEmail.actions'

const onLinkRequest = payload => {
  const {
    RequestedFolder,
    email,
    password,
    imap_server,
    imap_port
  } = payload
  const result = API.get('/get-emails', {
    params: {
        RequestedFolder,
        email,
        password,
        imap_server,
        imap_port
      }
    })
  return result
}

export function * getEmailsAsync ({ payload }) {
  const result = yield call(onLinkRequest, payload)
  yield put(retrieveEmailsSuccess(result))
}

export default function * rootSaga () {
  yield all([takeEvery(GET_EMAILS, getEmailsAsync)])
}
