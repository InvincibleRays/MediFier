import __main__
from flask import Flask,render_template, request,jsonify
import requests
import sys
import json
import smtplib
from email.message import EmailMessage

from bs4 import BeautifulSoup
from datetime import datetime

#app
app = Flask(__name__)

@app.route("/")
def members():
    return render_template('login.html')

@app.route('/bot', methods=['POST'])
def bot():
    email = request.form['mail']
    return render_template('website.html',email=email)
    

@app.route('/handle_data', methods=['POST'])
def handle_data():
    postcode = request.form['projectFilepath']
    url = "https://www.nhs.uk/service-search/find-a-gp"

    new_url = f"https://www.nhs.uk/service-search/find-a-gp/results/{postcode}"
    page = requests.get(new_url)
    soup = BeautifulSoup(page.content,"html.parser")
    arr_info = []
    for i in range(5):
        st = "orgname_%s" %i
        std = "distance_%s" %i
        sta = "address_%s" %i
        res_orgname = soup.find(id = st)
        res_distance = soup.find(id = std)
        res_address = soup.find(id = sta)
        arr_info.append({"orgname":res_orgname.text,"distance":res_distance.text,"address":res_address.text})

    return render_template('searchdisplay.html',project=arr_info)

if __name__ == "__main__":
    app.run(debug=True)
