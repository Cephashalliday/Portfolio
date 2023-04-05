from turtle import*
import colorsys

tracer(30)
pensize(2)
bgcolor('whitesmoke')

h = 1
for i in range(900):
    colors = colorsys.hsv_to_rgb(h, 1, 1)
    color(colors)
    h += 0.005
    circle(190 - i, 30)
    rt(20)
    lt(220)
    circle(190 - i, 30)
done()