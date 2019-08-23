/* 
  View Email

  shows the selected email
  - subject
  - date
  - name
  - email
  - html and plain text body

  switch between html and plain text depending on which is avaiable; html is preferable

  avatar should be the first letter of the first name and last name. example => Jake Condes = JC
*/

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import moment from 'moment';

export class View extends Component {
  componentDidMount = () => {
    this.props.validCredentials !== true && this.props.history.push('/');
    document.title = this.props.selectedEmail.subject;
  };

  render() {
    const date = new Date(this.props.selectedEmail.date);

    const calendar = moment(date).format('ll');

    const time = moment(date).format('LT');

    const when = moment(date)
      .startOf('hour')
      .fromNow();

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
    };

    const signature = {
      splitLet: this.props.selectedEmail.name
        .match(/\b(\w)/g)
        .join('')
        .split('', 2)
    };

    return (
      <Paper style={{ width: '85%', margin: 'auto', padding: '15px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          {this.props.selectedEmail.subject}
        </Typography>
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
            primary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {this.props.selectedEmail.email}
                </Typography>
              </Fragment>
            }
            secondary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {this.props.selectedEmail.name}
                </Typography>
              </Fragment>
            }
          />
          <ListItemText
            primary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {`${calendar} at ${time} (${when})`}
                </Typography>
              </Fragment>
            }
            style={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          />
        </ListItem>
        {this.props.selectedEmail.body_html ? (
          <ListItemText>
            <div
              dangerouslySetInnerHTML={{ __html: this.props.selectedEmail.body_html }}
            />
          </ListItemText>
        ) : (
          <ListItemText primary={this.props.selectedEmail.body_plain} />
        )}
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  validCredentials: state.Profile.validCredentials,
  selectedEmail: state.SelectedEmail
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
