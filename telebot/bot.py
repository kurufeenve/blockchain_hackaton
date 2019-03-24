import requests
import telebot
import os
import json

bot_tocken = '898351622:AAElffDHIbY8_tcQeHsmc7gkKnUJ-pZga7Q'

bot = telebot.TeleBot(bot_tocken)

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    print('mtfr')
    bot.send_message(message.chat.id, "Greetings, usage: /check <car_number>")

@bot.message_handler(commands=['check'])
def check(message):
    s = str(message.text)
    if len(s) != 15:
        bot.send_message(message.chat.id, 'incorrect data. check the number, no spaces in the end. Try again.')
        return
    res = s[7:]
#    print(res)
    r = requests.get('http://127.0.0.1:3000/find/' + res)
    #print(r.json()[1])
    list = ['Driver', 'License ID', 'City from', 'City to', 'Documents']
    s = '\n'
    for elem1, elem2 in zip(list, r.json()[1:]):
        if (len(elem2) == 0):
            bot.send_message(message.chat.id, "License for number " + res + " not found")
            return
        s = s + elem1 + ': ' + elem2 + ';\n'
    print(s)
    bot.reply_to(message, s)
    try:
        fd = open(res, 'r')
        bot.send_document(message.chat.id, fd)
    except:
        bot.send_message(message.chat.id, "No license file uploaded")

@bot.message_handler(func=lambda m: True)
def echo_all(message):
    bot.reply_to(message, "try /check <car_number>")

bot.polling()
