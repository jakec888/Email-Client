import { all, takeEvery, put, call } from 'redux-saga/effects'
import API from '../../api'
import { SEND_MESSAGE, sendMessageSuccess } from './composeEmail.action'

const onLinkRequest = payload => {
  const {
    email,
    password,
    smtp_server,
    smtp_port,
    fromAddress,
    name,
    toAddress,
    subject,
    bodyPLAIN
  } = payload
  return API.post('/send-email', {
    email,
    password,
    smtp_server,
    smtp_port,
    fromAddress,
    name,
    toAddress,
    subject,
    bodyPLAIN
  })
}

export function * sendMessageAsync ({ payload }) {
  yield call(onLinkRequest, payload)
  yield put(sendMessageSuccess())
}

export default function * rootSaga () {
  yield all([takeEvery(SEND_MESSAGE, sendMessageAsync)])
}
