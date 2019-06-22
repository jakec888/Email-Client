from chalice import Chalice, Response
from sender import Mail, Message
from imbox import Imbox
from datetime import datetime
from html2text import html2text
import config
import json
import uuid
import time


app = Chalice(app_name='back-end')
app.debug = True


@app.route('/')
def index():
    return {'hello': 'jake'}


@app.route('/get-emails', cors=True)
def get_emails():
    try:
        params = app.current_request.query_params

        folder = params["RequestedFolder"]

        email = params["email"]
        password = params["password"]
        imap_server = params["imap_server"]
        imap_port = params["imap_port"]

        print(folder)
        print(email)
        print(password)
        print(imap_server)
        print(imap_port)

        with Imbox(hostname=imap_server, port=imap_port, username=email, password=password, ssl=True) as imbox:
            all_inbox_messages = imbox.messages(folder=folder)
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
        print("Error")
        print(error)
        return Response(body=str(error),
                        status_code=500,
                        headers={'Content-Type': 'text/plain'})


@app.route('/send-email', methods=['POST'], cors=True)
def send_email():
    try:
        data = app.current_request.json_body

        print(data)

        email = data["email"]
        password = data["password"]
        smtp_server = data["smtp_server"]
        smtp_port = data["smtp_port"]

        toAddress = data["toAddress"]
        fromAddress = data["fromAddress"]
        name = data["name"]
        subject = data["subject"]
        # bodyPLAIN = data["bodyPLAIN"]
        bodyHTML = data["bodyHTML"]
        bodyPLAIN = html2text(bodyHTML)

        mail = Mail(
            host=smtp_server,
            port=smtp_port,
            username=email,
            password=password,
            use_ssl=True
        )

        msg = Message()

        msg.subject = subject
        msg.fromaddr = (name, fromAddress)
        msg.to = toAddress
        msg.body = bodyPLAIN
        msg.html = bodyHTML
        # msg.cc = "cc@example.com"
        # msg.bcc = ["bcc01@example.com", "bcc02@example.com"]
        # msg.reply_to = "cc@example.com"
        msg.date = int(round(time.time()))
        msg.charset = "utf-8"
        msg.extra_headers = {}
        msg.mail_options = []
        msg.rcpt_options = []

        # print(msg)
        # print(type(msg))

        mail.send(msg)

        return Response(body={'sent': True}, status_code=200, headers={'Content-Type': 'text/json'})

    except Exception as error:
        print("Error")
        print(error)
        return Response(body={'error': str(error)}, status_code=500, headers={'Content-Type': 'text/json'})


# @app.route('/smtp', methods=['POST'], cors=True)
# def testsmtp():
#     try:
#         data = app.current_request.json_body

#         toAddress = data["toAddress"]
#         fromAddress = data["fromAddress"]
#         name = data["name"]
#         subject = data["subject"]
#         bodyPLAIN = data["bodyPLAIN"]
#         bodyHTML = data["bodyHTML"]

#         print(toAddress)

#         mail = Mail(
#             host=config.SMTP_SERVER,
#             port=config.SMTP_PORT,
#             username=config.EMAIL,
#             password=config.PASSWORD,
#             use_ssl=True
#         )

#         msg = Message()

#         msg.subject = subject
#         msg.fromaddr = (name, fromAddress)
#         msg.to = toAddress
#         msg.body = bodyPLAIN
#         msg.html = bodyHTML
#         # msg.cc = "cc@example.com"
#         # msg.bcc = ["bcc01@example.com", "bcc02@example.com"]
#         # msg.reply_to = "cc@example.com"
#         msg.date = int(round(time.time()))
#         msg.charset = "utf-8"
#         msg.extra_headers = {}
#         msg.mail_options = []
#         msg.rcpt_options = []

#         print(msg)
#         print(type(msg))

#         mail.send(msg)

#         return Response(body={'sent': True},
#                         status_code=200,
#                         headers={'Content-Type': 'text/json'})

#     except Exception as error:
#         return Response(body={'sent': False},
#                         status_code=500,
#                         headers={'Content-Type': 'text/json'})
