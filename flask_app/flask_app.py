import __main__
from flask import Flask,render_template, request,jsonify
import requests
import sys
import json
import smtplib
from email.message import EmailMessage

from bs4 import BeautifulSoup
from datetime import datetime

#variables
email = ""
smtp_username ="2205872@brunel.ac.uk"
smtp_password = "M!dtit__n468__"
smtp_send_from = "2205872@brunel.ac.uk"
smtp_server = "smtp-mail.outlook.com"
smtp_port = 587 
smtp_use_tls = True 

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
    searchinfo = {}
    for i in range(5):
        st = f"orgname_{i}"
        std = f"distance_{i}"
        sta = f"address_{i}"
        res_orgname = soup.find(id = st)
        res_distance = soup.find(id = std)
        res_address = soup.find(id = sta)
        searchinfo["orgname"] = res_orgname.text
        searchinfo["distance"] = res_distance.text
        searchinfo["address"] = res_address.text
        arr_info.append(searchinfo)

    # body = "Subject: ALERT: Potential NHS Covid Vaccine Appointment Available.\n\n"
    # try:
    #     smtpObj = smtplib.SMTP(smtp_server, smtp_port)
    # except Exception as e:
    #     print(e)
    # smtpObj.ehlo()
    # if smtp_use_tls == True :
    #     smtpObj.starttls()
    # smtpObj.login(smtp_username, smtp_password) 
    # smtpObj.sendmail(smtp_send_from, email, body) 
    # smtpObj.quit()
    body = "some content"
    mail = EmailMessage()
    mail.set_content(body, subtype='html')   

    to = "you@work.com"
    mail['From'] = "siddhantsood246@gmail.com"
    mail['To'] = email
    # mail['Cc'] = ""
    # mail['Bcc'] = ""
    mail['Subject'] = "Hello"

    smtp_connection = smtplib.SMTP("smtp.gmail.com", 25)  
    status = smtp_connection.send_message(mail)

    return render_template('test.html',project=arr_info)


if __name__ == "__main__":
    app.run(debug=True)
