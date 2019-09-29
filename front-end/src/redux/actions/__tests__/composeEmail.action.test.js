import { updateTo, updateSubject, updateMessage, trashMessage, sendMessage, sendMessageSuccess, COMPOSE_TO, COMPOSE_SUBJECT, COMPOSE_MESSAGE, TRASH_MESSAGE, SEND_MESSAGE, SEND_MESSAGE_SUCCESS } from '../composeEmail.action'

describe('Testing Compose Email Actions', () => {
  it('should create an action to add a to address', () => {
    const toAddress = {
      to: 'jake@gmail.com'
    }
    const expectedAction = {
      type: COMPOSE_TO,
      payload: toAddress
    }
    expect(updateTo(toAddress)).toEqual(expectedAction)
  })

  it('should create an action to add a email subject', () => {
    const subject = {
      subject: 'Hello This Is the Subject'
    }
    const expectedAction = {
      type: COMPOSE_SUBJECT,
      payload: subject
    }
    expect(updateSubject(subject)).toEqual(expectedAction)
  })

  it('should create an action to add a email message', () => {
    const message = {
      message: 'This is an example of a message'
    }
    const expectedAction = {
      type: COMPOSE_MESSAGE,
      payload: message
    }
    expect(updateMessage(message)).toEqual(expectedAction)
  })

  it('should trash a message', () => {
    const data = {
      to: '',
      subject: '',
      message: ''
    }
    const expectedAction = {
      type: TRASH_MESSAGE,
      payload: data
    }
    expect(trashMessage(data)).toEqual(expectedAction)
  })

  it('should send message', () => {
    const data = {
      email: 'example@gmail.com',
      password: 'this is the password',
      smtp_server: 'imap.gmail.com',
      smtp_port: 993,
      fromAddress: 'example@gmail.com',
      name: 'Jake',
      toAddress: 'james@gmail.com',
      subject: 'Hello World',
      bodyPLAIN: 'What\'s up?'
    }
    const expectedAction = {
      type: SEND_MESSAGE,
      payload: data
    }
    expect(sendMessage(data)).toEqual(expectedAction)
  })

  it('should successfully send message', () => {
    const data = {
      to: '',
      subject: '',
      message: '',
      error: ''
    }
    const expectedAction = {
      type: SEND_MESSAGE_SUCCESS,
      payload: data
    }
    expect(sendMessageSuccess(data)).toEqual(expectedAction)
  })
})
