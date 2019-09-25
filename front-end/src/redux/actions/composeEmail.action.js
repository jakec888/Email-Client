// import axios from "axios";
import API from '../../api/email'

export const COMPOSE_TO = 'COMPOSE_TO'
export const COMPOSE_SUBJECT = 'COMPOSE_SUBJECT'
export const COMPOSE_MESSAGE = 'COMPOSE_MESSAGE'
export const TRASH_MESSAGE = 'TRASH_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const ERROR_SEND_MESSAGE = 'ERROR_SEND_MESSAGE'

export const updateTo = (toAddress) => (dispatch) => {
  dispatch({
    type: COMPOSE_TO,
    payload: { to: toAddress }
  })
}

export const actionName = (subject) => (dispatch) => {
  dispatch({
    type: COMPOSE_SUBJECT,
    payload: { subject }
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
  API.post('/send-email', {
    email: profile.email,
    password: profile.password,
    smtp_server: profile.smtp_server,
    smtp_port: profile.smtp_port,
    fromAddress: profile.email,
    name: profile.name,
    toAddress: email.to,
    subject: email.subject,
    bodyPLAIN: email.message
  })
    .then(() => {
      dispatch({
        type: SEND_MESSAGE,
        payload: {
          to: '',
          subject: '',
          message: '',
          error: ''
        }
      })
      alert('Email Successfully Sent')
    })
    .catch(() => {
      dispatch({
        type: SEND_MESSAGE,
        payload: {
          to: email.to,
          subject: email.subject,
          message: email.message
        }
      })
      alert('Email Was Not Send')
    })
}

// const composeEmailActions = {
//   COMPOSE_TO: 'COMPOSE_TO',
//   COMPOSE_SUBJECT: 'COMPOSE_SUBJECT',
//   COMPOSE_MESSAGE: 'COMPOSE_MESSAGE',
//   TRASH_MESSAGE: 'TRASH_MESSAGE',
//   SEND_MESSAGE: 'SEND_MESSAGE',
//   ERROR_SEND_MESSAGE: 'ERROR_SEND_MESSAGE',
//   updateTo: (toAddress) => (dispatch) => {
//     dispatch({
//       type: composeEmailActions.COMPOSE_TO,
//       payload: { to: toAddress },
//     });
//   },
//   updateSubject: (subject) => (dispatch) => {
//     dispatch({
//       type: composeEmailActions.COMPOSE_SUBJECT,
//       payload: { subject },
//     });
//   },
//   updateMessage: (message) => (dispatch) => {
//     dispatch({
//       type: composeEmailActions.COMPOSE_MESSAGE,
//       payload: { message },
//     });
//   },
//   trashMessage: () => (dispatch) => {
//     dispatch({
//       type: composeEmailActions.TRASH_MESSAGE,
//       payload: {
//         to: '',
//         subject: '',
//         message: '',
//       },
//     });
//   },
//   sendMessage: () => (dispatch, getState) => {
//     const profile = getState().Profile;
//     const email = getState().ComposeEmail;
//     API.post('/send-email', {
//       email: profile.email,
//       password: profile.password,
//       smtp_server: profile.smtp_server,
//       smtp_port: profile.smtp_port,
//       fromAddress: profile.email,
//       name: profile.name,
//       toAddress: email.to,
//       subject: email.subject,
//       bodyPLAIN: email.message,
//     })
//       .then((result) => {
//         dispatch({
//           type: composeEmailActions.SEND_MESSAGE,
//           payload: {
//             to: '',
//             subject: '',
//             message: '',
//             error: '',
//           },
//         });
//         alert('Email Successfully Sent');
//       })
//       .catch((err) => {
//         dispatch({
//           type: composeEmailActions.SEND_MESSAGE,
//           payload: {
//             to: email.to,
//             subject: email.subject,
//             message: email.message,
//           },
//         });
//         alert('Email Was Not Send');
//       });
//   },
// };

// export default composeEmailActions;
