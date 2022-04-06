# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request
from flask_cors import CORS

  
# creating a Flask app
app = Flask(__name__)
CORS(app)
  
# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/', methods = ['GET', 'POST'])
def home():
    if(request.method == 'GET'):
  
        data = "hello world get"
        return jsonify({'data': data})

    if request.method == 'POST':
        # average_time = request.form.get('average_time')
        # choices = request.form.get('choices')
        # created_by = request.form.get('created_by')
        # difficulty_level = request.form.get('difficulty_level')
        # question = request.form.get('question')
        # topics = request.form.get('topics')
        print("param or body?" , request.form, request.args)
        # request.args gets from params
        img = request.args.get("img") # form = body
        print(img)
        return jsonify({'data': img})
  
  
# # A simple function to calculate the square of a number
# # the number to be squared is sent in the URL when we use GET
# # on the terminal type: curl http://127.0.0.1:5000 / home / 10
# # this returns 100 (square of 10)
# @app.route('/home/<int:num>', methods = ['GET'])
# def disp(num):
  
#     return jsonify({'data': num**2})
  
  
# driver function
if __name__ == '__main__':
  
    app.run(debug = True)