# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request

import skimage
from skimage.transform import resize

import numpy as np
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model

# creating a Flask app
app = Flask(__name__)
  
imageSize = 64
asl_model = load_model("model_1.h5")
letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','del','nothing','space', 'undefined']

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
        # print(request.form, request.args)
        # request.args gets from params
        img = request.form.get("img") # form = body
        img_list = np.array(eval(img))
        print("HELLO")
        img_file = skimage.transform.resize(img_list, (imageSize, imageSize, 3))
        print(img_file)
        img_arr = np.asarray(img_file).reshape((-1, imageSize, imageSize, 3))
        # print(img_arr)


        
        prediction = asl_model.predict(img_arr).argmax(axis=-1)[0]
        print(prediction)
        letter = letters[prediction]

        data = "hello world posts"
        return jsonify({'data': letter})
  
  
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