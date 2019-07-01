# from chalice import Chalice, Response, CORSConfig
from chalice import Chalice, Response
from sender import Mail, Message
from imbox import Imbox
from datetime import datetime
import time

# These libraries break chalice
from textile import textile
from uuid import uuid4


app = Chalice(app_name='EmailBackEnd')
app.debug = False

# cors_config = CORSConfig(
#     allow_origin='*',
#     allow_headers=[],
#     max_age=600,
#     expose_headers=[],
#     allow_credentials=False
# )


custom_headers = {
    'Content-Type': 'application/json',
    'Content-Encoding': 'utf-8'
}


# @app.route('/')
# def index():
#     return {'hello': 'world'}


@app.route('/', cors=True)
def zzzzzz():
    # return {'working': "Hi Jake!"}
    return Response(body={'working': 'Sup Jake!'}, status_code=200, headers=custom_headers)
# try:
#     # print("working!")
#     return Response(body={'working': "Hi Jake!"},
#                     status_code=200,
#                     headers=custom_headers)
# except Exception as error:
#     # print("Get Emails Error:")
#     # print(error)
#     return Response(body={'AppError': str(error)},
#                     status_code=500,
#                     headers=custom_headers)


@app.route('/get-emails', methods=['GET'], cors=True)
def get_emails():
    try:
        given_params = app.current_request.query_params

        # print(given_params)

        folder = given_params["RequestedFolder"]

        email = given_params["email"]
        password = given_params["password"]
        imap_server = given_params["imap_server"]
        imap_port = given_params["imap_port"]

        print(folder)
        print(email)
        print(password)
        print(imap_server)
        print(imap_port)

        with Imbox(hostname=imap_server, port=imap_port, username=email, password=password, ssl=True) as imbox:
            all_inbox_messages = imbox.messages(folder=folder)
            if all_inbox_messages:
                emails = []
                for uid, message in all_inbox_messages[::-1][0:10]:

                    print(uid)

                    email = {}

                    email["id"] = str(uuid4())

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
                            email["date"] = datetime.now().strftime(
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
                                headers=custom_headers)
            else:
                return Response(body={'emails': "No Emails!"},
                                status_code=204,
                                headers=custom_headers)
    except Exception as error:
        # print("Get Emails Error:")
        # print(error)
        return Response(body={'AppError': str(error)},
                        status_code=500,
                        headers=custom_headers)


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
        bodyPLAIN = data["bodyPLAIN"]
        bodyHTML = textile(bodyPLAIN)

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

        print(msg)
        print(type(msg))

        mail.send(msg)

        return Response(body={'sent': True}, status_code=200, headers=custom_headers)

    except Exception as error:
        print("Send Emails Error")
        print(error)
        return Response(body={'AppError': str(error)}, status_code=500, headers=custom_headers)
