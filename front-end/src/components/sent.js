/*
  Sent Emails List View

  !!! limit 25 emails !!!

  the api return a list of 25 emails from the labeled 'Sent' folder.

  limit is 25 due to the imbox library which uses .uid() to build its query; the uid protocal does not allow for limits or ordering.

  imbox library must be update.
*/

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

// import selectEmailActions from '../redux/actions/selectEmail.action'
// import retrieveEmailActions from '../redux/actions/retrieveEmail.actions'

import { selectEmail } from '../redux/actions/selectEmail.action'
import { retrieveEmails, loadingEmail } from '../redux/actions/retrieveEmail.actions'

import moment from 'moment'

export class Sent extends Component {
  componentDidMount = async () => {
    if (this.props.validCredentials) {
      document.title = 'Sent Emails'
      this.onRetrieveSent()
    } else {
      this.props.history.push('/')
    }
  };

  onRetrieveSent = async () => {
    await this.props.loadingEmail(true)
    await this.props.retrieveEmails('Sent')
    await this.props.loadingEmail(false)
  };

  onSelectEmail = (emailId) => {
    this.props.selectEmail(emailId)
  };

  email = ({ id, subject, name, body_plain, date }) => {
    const emailDate = new Date(date)

    const calendar = moment(emailDate).format('ll')

    const time = moment(emailDate).format('LT')

    const when = moment(emailDate)
      .startOf('hour')
      .fromNow()

    const avatarStyle = {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3f51b5',
      fontSize: '16px',
      fontWeight: 300,
      color: '#fff',
      letterSpacing: '1px'
    }

    const signature = {
      splitLet: name
        .match(/\b(\w)/g)
        .join('')
        .split('', 2)
    }

    return (
      <Link
        key={id}
        to={`/inbox/${id}`}
        style={{ textDecoration: 'none', color: '#000' }}
        onClick={() => this.onSelectEmail(id)}
      >
        <Divider variant="middle" />
        <ListItem
          style={{
            display: 'flex',
            fleDirection: 'row',
            height: '100%',
            justifyContent: 'center',
            aligItems: 'center'
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp">
              <span style={avatarStyle}>{signature.splitLet}</span>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={subject}
            secondary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {name}
                </Typography>
                <Typography component="span" variant="body2" color="textPrimary">
                  {body_plain ? ' — ' + body_plain.substring(0, 50) + '...' : false}
                </Typography>
              </Fragment>
            }
          />
          <ListItemText
            secondary={`${calendar} at ${time} (${when})`}
            style={{ textAlign: 'right' }}
          />
        </ListItem>
        <Divider variant="middle" />
      </Link>
    )
  };

  render () {
    return (
      <Paper style={{ width: '85%', margin: 'auto' }}>
        {this.props.loading === true ? (
          <Fragment>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CircularProgress size={150} disableShrink />
            </div>
            <Typography variant="h5" align="center" gutterBottom>
              Retrieving Sent...
            </Typography>
          </Fragment>
        ) : (
          <List>
            {this.props.sentEmails
              ? this.props.sentEmails.map((email) => this.email(email))
              : 'No Sent Emails'}
          </List>
        )}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials,
  sentEmails: state.RetrieveEmails.emails,
  loading: state.RetrieveEmails.loading
})

// const mapDispatchToProps = {
//   selectEmail: selectEmailActions.selectEmail,
//   retrieveEmails: retrieveEmailActions.retrieveEmails,
//   loadingEmail: retrieveEmailActions.loadingEmail
// }

const mapDispatchToProps = {
  selectEmail: selectEmail,
  retrieveEmails: retrieveEmails,
  loadingEmail: loadingEmail
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sent)
