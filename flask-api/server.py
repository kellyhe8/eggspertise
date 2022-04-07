# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request

import skimage
from skimage.transform import resize

import numpy as np
import cv2 #install opencv-python
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model

from flask_cors import CORS


  
# creating a Flask app
app = Flask(__name__)
CORS(app)
  
imageSize = 64
asl_model = load_model("./ASL.h5")
letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','del','nothing','space', 'undefined']



# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/', methods = ['GET', 'POST'])
def home():
    if request.method == 'POST':
        # average_time = request.form.get('average_time')
        # choices = request.form.get('choices')
        # created_by = request.form.get('created_by')
        # difficulty_level = request.form.get('difficulty_level')
        # question = request.form.get('question')
        # topics = request.form.get('topics')
        # print(request.form, request.args)
        # request.args gets from params
        # print(request)
        # img = request.form.get("img") # form = body
        # print(len(request.form))
        # print(len(img))
        # print(len(img[0]))
        # print(len(img[1]))
        img = request.form.get("img")
        x = img.split(',')
        # print(x)
        y = np.array(x).reshape(200,200,4).astype('float32')
        z = y[:,:,:3]
        # y = np.array(x).astype('float32')
        # print(y)
        # r_img = cv2.imread('./R_test.jpg')

        img_file = skimage.transform.resize(z, (imageSize, imageSize, 3))
        img_file = (img_file - np.min(img_file)) / (np.max(img_file) - np.min(img_file))
        # img_file /= 255
        print(img_file)
        img_arr = np.asarray(img_file).reshape((-1, imageSize, imageSize, 3))


        
        prediction = asl_model.predict(img_arr).argmax(axis=-1)[0]
        letter = letters[prediction]
        data = "hello world posts"
        response = jsonify({'data': letter})
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response
        
  
  
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