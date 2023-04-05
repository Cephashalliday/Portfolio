import turtle
from turtle import *

print("This is a color wheel APP\n")
print("Enter your colors below")
print('-' *28)

win = turtle.Screen()
win.bgcolor('gold') #set backgound color to your prefered color
colors = [] #This is an empty container that stores the colors
speed =(0)

for x in range(6):
    user_color = input("Enter ur color: ").upper()
    colors.append(user_color)
    
for i in range(350):
    pencolor(colors[i%6])
    width(i/100 + 2)
    forward(i)
    left(59)   
showturtle()
done()