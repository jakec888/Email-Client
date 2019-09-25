import API from '../../api/email'

export const GET_EMAILS = 'GET_EMAILS'
export const SEND_EMAIL = 'SEND_EMAIL'
export const LOADING_EMAIL = 'LOADING_EMAIL'

export const loadingEmail = (status) => ({
  type: LOADING_EMAIL,
  payload: status
})

export const retrieveEmails = (folder) => (dispatch, getState) => {
  const profile = getState().Profile
  return API.get('/get-emails', {
    params: {
      RequestedFolder: folder,
      email: profile.email,
      password: profile.password,
      imap_server: profile.imap_server,
      imap_port: profile.imap_port
    }
  })
    .then((result) => {
      dispatch({
        type: GET_EMAILS,
        payload: result.data.emails
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_EMAILS,
        payload: `Error: ${err}`
      })
    })
}

export const sendEmailTest = (email) => (dispatch, getState) => {
  const { Profile } = getState()
  API.post('/smtp', {
    email: Profile.email,
    password: Profile.password,
    smtp_server: Profile.smtp_server,
    smtp_port: Profile.smtp_port,
    fromAddress: Profile.email,
    name: Profile.NAME,
    toAddress: email.toAddress,
    subject: email.subject,
    bodyPLAIN: email.bodyPLAIN,
    bodyHTML: email.bodyHTML
  })
    .then((result) => {
      dispatch({
        type: SEND_EMAIL,
        payload: result.data
      })
    })
    .catch((err) => {
      dispatch({
        type: SEND_EMAIL,
        payload: err
      })
    })
}
