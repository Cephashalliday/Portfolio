from tkinter import * 
from twilio.rest import Client
from PIL import Image, ImageTk 
from urllib.request import urlopen
import datetime
import os

window = Tk
window.title ('SMS Balloon v4.2.1')
window.geometry ("720×405")
window.configure (bg='#3674a8')

account_sid = os.environ['MY_ACCOUNT_SID']
auth_token = os. environ ['MY_AUTH_TOKEN']
client = Client(account_sid, auth_token)
myTwilioNo = ("WhatsApp: +233247001128", "Call: +233244667869")
message ='''
Dear Viewers,

    First and Foremost
    http://mabidpk.blogspot.com/2016/11/faf.html

regards,
M. -Abid'''

def send (self, event):
    recipients = txtTo.get ()
    sendlist = recipients.replace('.', '').split(',')
    for contact in sendlist:
        if (mms.get () == 1):
            msg = client.messages \
            .create(
                from_ = myTwilioNo,
                body = txtAreaMessage.get ("1.0", END),
                to = contact,
                media_ur1= [URL]
            )
        else:
            msg = client.messages \
            .create(
                from_ = myTwilioNo,
                body = txtAreaMessage.get("1.0", END),
                tO = contact
            )
            
        print(msg.sid)
        print(datetime.datetime.now() .strftime ('Local date: %A, %B %d, %Y Time: %I:%M:%S %p'))
                                                  
def loadImage ():
    global URL
    if(mms.get() == 1):
        URL = txtImagePath.get()
        
        u = urlopen (URL)
        raw_data = u.read()
        u.close ()
        
        photo = ImageTk.PhotoImage(data=raw_data)
        
        lblLoadImage = Label(window, image=photo, width=300, height=232)
        lblLoadImage.image_names = photo
        lblLoadImage.place (x=400, y=100)
        
        
lblTo = Label(window, text = 'To (Separate multiple recipients with a comma)', fg='#2f6694')
lblTo.place (x=20, Y=5)
txtTo = Entry(width=53, bg='#ffdf76', fg='#2f6694')#, font='Helvetica 8 bold")
txtTo.insert (END, '+233247001128, +233244667869')
txtTo.place (x=20, y=30)


lblMessage = Label(window, text='Message', fg='#26694')
lblMessage.place(x=20, y=75)
txtAreaMessage=Text(width = 40, height = 15, bg='#ffdf76', fg='#2f6694')
txtAreaMessage.insert('end', message)
txtAreaMessage.place(x=20, y=100)


mms = IntVar ()
chkMMS = Checkbutton(
    window, 
    text='Send this photo with the message (MMS)',
    fg='#2f6694', 
    variable=mms, 
    onvalue=1, 
    offvalue=0, 
    command=loadImage
    )

chkMMS.place (X=400, y=5)
txtImagePath = Entry(width=50, bg='#ffdf76',fg='#26694')
txtImagePath.insert('end', "http://www.oracleprofessor.com/images/HBD.jpg")
txtImagePath.place(x=400, y=30)


btnSend = Button(window, text='Send', bg='#2f6694', fg='#ffdf76')
btnSend.place (X=20, y=360)
btnSend.bind ('‹ButtonRelease-1>', send)


window.mainloop()