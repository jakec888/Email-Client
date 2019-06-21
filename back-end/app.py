from chalice import Chalice, Response
from imbox import Imbox
from datetime import datetime
import config
import json
import uuid


app = Chalice(app_name='back-end')
app.debug = True


@app.route('/')
def index():
    return {'hello': 'jake'}


@app.route('/imap')
def testimap():
    try:
        with Imbox(hostname=config.IMAP_SERVER, port=config.IMAP_PORT, username=config.EMAIL, password=config.PASSWORD, ssl=True) as imbox:
            all_inbox_messages = imbox.messages()
            if all_inbox_messages:
                emails = []
                for uid, message in all_inbox_messages:
                    email = {}

                    email["id"] = str(uuid.uuid4())

                    # name
                    if message.sent_from[0]["name"]:
                        email["name"] = str(message.sent_from[0]["name"])

                    # email
                    if message.sent_from[0]["email"]:
                        email["email"] = str(message.sent_from[0]["email"])

                    # body (html)
                    if message.body["html"]:
                        email["body_html"] = str(message.body["html"][0])

                    # body (plain)
                    if message.body["plain"]:
                        email["body_plain"] = str(message.body["plain"][0])

                    # subject
                    if message.subject:
                        email["subject"] = str(message.subject)

                    # date
                    if message.date:
                        try:
                            email["date"] = parser.parse(str(message.date)).strftime(
                                '%Y-%m-%dT%H:%M:%S.%f')[:-3] + "Z"
                        except:
                            datetime.now().strftime(
                                '%Y-%m-%dT%H:%M:%S.%f')[:-3] + "Z"

                    # # bucket
                    # email["bucket"] = "Inbox"

                    # read
                    # email["read"] = False

                    # if message.attachments:
                    #     email["attachments"] = message.attachments

                    emails.append(email)

                return Response(body={'emails': emails, "number_of_emails": len(emails)},
                                status_code=200,
                                headers={'Content-Type': 'text/json'})
            else:
                return Response(body='No Emails!',
                                status_code=204,
                                headers={'Content-Type': 'text/plain'})
    except Exception as error:
        return Response(body=str(error),
                        status_code=500,
                        headers={'Content-Type': 'text/plain'})


@app.route('/smtp')
def testsmtp():
    return {'smtp': 'test'}


@app.route('/zzz', cors=True)
def testsmtp():
    params = app.current_request.query_params
    print(params["ID"])
    return {'zzz': 'working'}
