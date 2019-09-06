# Email Client

### Most Recent Project:

[Bityle Clone](https://github.com/jakec888/bitly-clone) which uses the tecnologies here but with redux saga and to make asynchronous generator-linke requests.

### In Progress:

- redux-saga/generators
- testing using jest and enzyme

## About

Visit: [Ephemeral Web Mail Client](https://d358ioepy2yz0y.cloudfront.net)

Ephemeral online email client that will securely check your emails anywhere without holding you information.

Static website with serverless backend.

<center><h3>Add Your Email Credentials</h3></center>
<p align="center">
<img src="credentials.gif" />
</p>

<center><h3>Retrieve Emails From Your Inbox and Other Folders</h3></center>
<p align="center">
<img src="folder-and-view-email.gif" />
</p>

<center><h3>Compose And Send Emails</h3></center>
<p align="center">
<img src="compose-email.gif" />
</p>

### Front End Stack

- [Node JS v10.16.0](v10.16.0)
- [React JS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Moment](https://momentjs.com/)
- [AWS Amplify](https://aws-amplify.github.io/)

### Back End Stack

- [Python](https://www.python.org/)
- [AWS Chalice](https://chalice.readthedocs.io/en/latest/)
- [Imbox](https://github.com/martinrusev/imbox)
- [Sender](https://sender.readthedocs.io/)

### Internet

- [IMAP Protocol Documentation](http://www.networksorcery.com/enp/protocol/imap.htm); IMAP4 Protocol.
- I believe the imbox library uses .uid() to build its query
- [UID Source Code](https://github.com/python/cpython/blob/3.7/Lib/imaplib.py#L862)

# Imbox

### Things To Improve

- Add a limit to imbox.message()
  -- here is where emails are downloaded to memory (highly memory intensive)
- Add a ascending/descending order
- Add pagination; retrieve emails

### Internet Message Access Protocol

Imbox uses a uid lookup. It makes it hard to make the necessary changes to the library, such as reverse as it creates a unique id's for that session. Ordering must be done with those ids and not by date as it would be with [list()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.list), [search()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.search), or [sort()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.sort). The reason to do this is to add pagination. Read More Here: [INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4rev1](http://www.networksorcery.com/enp/rfc/rfc3501.txt)

```
2.3.1.1.

Unique identifiers are assigned in a strictly ascending fashion in the mailbox; as each message is added to the mailbox it is assigned a higher UID than the message(s) which were added previously.
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
