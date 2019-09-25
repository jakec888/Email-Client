export const SELECT_EMAIL = 'SELECT_EMAIL'

export const selectEmail = (emailId) => (dispatch, getState) => {
  const selectedEmail = getState().RetrieveEmails.emails.filter(
    (email) => email.id === emailId
  )[0]
  dispatch({
    type: SELECT_EMAIL,
    payload: selectedEmail
  })
}
