from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/route')
def get_current_time():

    # resp = Flask.Response("number")

    # resp.headers['Access-Control-Allow-Origin'] = '*'

    # return resp
    return {"number" : 2}

# @app.route('/api/route')
# def get_values(val):
#     return {"number" : 2}

