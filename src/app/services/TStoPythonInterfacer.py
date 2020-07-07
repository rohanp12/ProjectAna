from TextRank4Keyword import getOrder
from flask import Flask, render_template, redirect, url_for,request
from flask import make_response
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def login():
   if request.method == 'POST':
        datafromjs = request.form['mydata']
        keyword = getOrder(datafromjs)
        return keyword


if __name__ == "__main__":
    app.run(debug = True)