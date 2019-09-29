export const COMPOSE_TO = 'COMPOSE_TO'
export const COMPOSE_SUBJECT = 'COMPOSE_SUBJECT'
export const COMPOSE_MESSAGE = 'COMPOSE_MESSAGE'
export const TRASH_MESSAGE = 'TRASH_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const ERROR_SEND_MESSAGE = 'ERROR_SEND_MESSAGE'

export const updateTo = (toAddress) => (dispatch) => {
  dispatch({
    type: COMPOSE_TO,
    payload: { to: toAddress }
  })
}

export const updateSubject = (subject) => (dispatch) => {
  dispatch({
    type: COMPOSE_SUBJECT,
    payload: { subject }
  })
}

export const updateMessage = (message) => (dispatch) => {
  dispatch({
    type: COMPOSE_MESSAGE,
    payload: { message }
  })
}

export const trashMessage = () => (dispatch) => {
  dispatch({
    type: TRASH_MESSAGE,
    payload: {
      to: '',
      subject: '',
      message: ''
    }
  })
}

export const sendMessage = () => (dispatch, getState) => {
  const profile = getState().Profile
  const email = getState().ComposeEmail
  dispatch({
    type: SEND_MESSAGE,
    payload: {
      email: profile.email,
      password: profile.password,
      smtp_server: profile.smtp_server,
      smtp_port: profile.smtp_port,
      fromAddress: profile.email,
      name: profile.name,
      toAddress: email.to,
      subject: email.subject,
      bodyPLAIN: email.message
    }
  })
}

export const sendMessageSuccess = () => (dispatch) => {
  dispatch({
    type: SEND_MESSAGE_SUCCESS,
    payload: {
      to: '',
      subject: '',
      message: '',
      error: ''
    }
  })
  alert('Email Successfully Sent')
}
