from tkinter import *
from tkinter.filedialog import asksaveasfilename
from PIL import ImageTk
import qrcode

window = Tk()
window.title('CYNCEP Code Generator v1.0.1')
window.geometry("350x320")
window.configure(bg = 'black')

str = ('This is CYNCEP QR Code Generator v1.0.1!!\nWrite your comment here.....below:\n')

def generateQR(event):
    qr = qrcode.QRCode(
        version = None,
        error_correction = qrcode.constants.ERROR_CORRECT_L,
        box_size = 15,
        border = 4,
    )
    qr.add_data(txtAreaStr.get("1.0", END))
    qr.make(fit = True)
    
    img = qr.make_image (fill_color = "black", back_color = "white")
    files = [('Cyncep photograhic goup (JPG)', '*.jpg'),('All Files', '*.*')]
    fileName = asksaveasfilename(filetypes = files, defaultextension = files)
    img.save(fileName)
    img = ImageTk.PhotoImage(image = img)
    lblQRImagePlaceHolder.configure(image = img)
    
lblStr = Label(window, text = 'Give us some awesome comment here', fg = 'red', bg = 'black')
lblStr.place(anchor = NW)

txtAreaStr = Text(width = 40, height = 15, bg = '#2f6694', fg = '#ffdf76')
txtAreaStr.insert('end', str)
txtAreaStr.place(x = 4, y = 20)

btnSend = Button(window, text = 'Generate QR code', bg = '#2f6694', fg = '#ffdf76')
btnSend.place(x = 4, y = 280)
btnSend.bind('<ButtonRelease - 1>', generateQR)

lblQRImagePlaceHolder = Label(window)
lblQRImagePlaceHolder.place(relx = 1, rely = 0.04, x =- 4, anchor = NE)

window.mainloop()