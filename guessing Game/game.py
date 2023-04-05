from random import randint
import tkinter as tk
from termcolor import colored
print("""
      This is a number guessing Game.
      *******************************
      Author: Cephas Halliday
      Email: cephasatsu7@gmail.com
      """)
print("`"*50)
# window = tk.Tk()
# window.title("GUESSING GAME")
# lable = tk.Label(window, text="Guess a Number")
# lable.pack()
# start = tk.Button(window, text="start Game")
# start.pack()

# if start == tk.Button:

userChoice = input("Enter your Name: ")

# if userChoice == str:
print(f"{userChoice} You Are Selected!!")
print("_"*20)
# elif userChoice == 2:
#     print("CEPHAS is selected")
#     print("_"*20)
# else:
#     print("player 3 is selected")
#     print("_"*20)

while True:
    Guess = int(input(f"{userChoice}...Enter any random number between 0-10: "))
    results = (randint(0,10))
    if Guess == results:
        print(colored(f" {userChoice} Congratulations your guess number |{Guess}| matched","green"))
    elif Guess != results:
        print(colored(f" {userChoice} Sorry your guess number |{Guess}| didn't match!!....The right Guess was {results}","red"))
    else:
        break      
    print(colored(results, "blue"))

    USSD = input("Do you want to try again? (Y/N): ").lower()
    if USSD == "Y".lower():
        userChoice = input("Enter Your Name: ")
    else:
        print("Game is ENDED")
        break
# while True:
#     def checkGuess():
#         guess = int(guessGame.get())
#         if guess == results:
#             print(colored(f"Congratulation your guess number |{guess}| matched","green"))
#         elif guess != results:
#             print(colored(f"Sorry your guess number |{guess}| didn't match!!....The right Guess was {results}","red"))
#     prompt_label = tk.Label(window, text="guess any random number between 0-10: ")
#     guessGame = tk.Entry(window)
#     prompt_label.pack()
#     guessGame.pack()

#     guessButton = tk.Button(window, text="Guess", command = checkGuess)
#     guessButton.pack()

#     window.mainloop()