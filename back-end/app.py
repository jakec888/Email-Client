from chalice import Chalice
import config
from imbox import Imbox
import json

app = Chalice(app_name='back-end')
app.debug = True


@app.route('/')
def index():
    return {'hello': 'jake'}


@app.route('/imap')
def testimap():
    with Imbox(hostname=config.IMAP_SERVER, port=config.IMAP_PORT, username=config.EMAIL, password=config.PASSWORD, ssl=True) as imbox:
        all_inbox_messages = imbox.messages()
        for uid, message in all_inbox_messages:
            print(message)
            print(message.sent_from)
            print(message.sent_to)
            print(message.subject)
            print(message.headers)
            print(message.message_id)
            print(message.date)
            if message.body["plain"]:
                print(message.body["plain"])
            if message.body["html"]:
                print(message.body["html"])
            print(message.attachments)
    return {'imap': 'test'}


@app.route('/smtp')
def testsmtp():
    return {'smtp': 'test'}
