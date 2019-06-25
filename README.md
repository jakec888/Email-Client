# Email Client

## About

This is a simple locally hosted email client

### Front End

- [Node JS v10.16.0](v10.16.0)
- [React JS](https://reactjs.org/)

### Back End

- [Python](https://www.python.org/)
- [AWS Chalice](https://chalice.readthedocs.io/en/latest/)

### Reference

- [IMAP Protocol Documentation](http://www.networksorcery.com/enp/protocol/imap.htm); IMAP4 Protocol.
- I believe the imbox library uses .uid() to build its query
- [UID Source Code](https://github.com/python/cpython/blob/3.7/Lib/imaplib.py#L862)

### Thing To Improve

- Fix View
- Add Profile
- Add Pagination
- Ascending and Descending Emails
  -- https://stackoverflow.com/questions/5632713/getting-n-most-recent-emails-using-imap-and-python
- In Reply Email

### UID Lookup

http://www.networksorcery.com/enp/rfc/rfc3501.txt

```
2.3.1.1.

Unique identifiers are assigned in a strictly ascending fashion in the mailbox; as each message is added to the mailbox it is assigned a higher UID than the message(s) which were added previously.
```
