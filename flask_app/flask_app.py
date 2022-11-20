import __main__
from flask import Flask,render_template, request,jsonify
import requests
import sys
import json

from bs4 import BeautifulSoup
from datetime import datetime


#app
app = Flask(__name__)

@app.route("/")
def members():
    return render_template('login.html')

@app.route('/bot')
def bot():
    return render_template('website.html')

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
    return render_template('test.html',project=arr_info)


if __name__ == "__main__":
    app.run(debug=True)
