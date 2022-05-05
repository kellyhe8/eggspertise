# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request

import skimage
from skimage.transform import resize

import numpy as np
# import cv2 #install opencv-python
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model

from flask_cors import CORS

import json


  
# creating a Flask app
app = Flask(__name__)
CORS(app)


def check_A(input):
    thumb, pointer, middle, ring, pinkie = get_limbs(input)

    return "feedback for A"

def check_B(input):
    thumb, pointer, middle, ring, pinkie = get_limbs(input)
    return "feedback for B"

def check_S(input):
    thumb, pointer, middle, ring, pinkie = get_limbs(input)
    
    return "feedback for S"

def generic_feedback(input):
    return "generic feedback"
  
imageSize = 64
asl_model = load_model("./ASL.h5")
asl_mediapipe_model = load_model("./model_2_new.h5")
letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
feedback_fns = {
    'A': check_A,
    'B': check_B,
    'C': generic_feedback,
    'D': generic_feedback,
    'E': generic_feedback,
    'F': generic_feedback,
    'G': generic_feedback,
    'H': generic_feedback,
    'I': generic_feedback,
    'J': generic_feedback,
    'K': generic_feedback,
    'L': generic_feedback,
    'M': generic_feedback,
    'N': generic_feedback,
    'O': generic_feedback,
    'P': generic_feedback,
    'Q': generic_feedback,
    'R': generic_feedback,
    'S': check_S,
    'T': generic_feedback,
    'U': generic_feedback,
    'V': generic_feedback,
    'W': generic_feedback,
    'X': generic_feedback,
    'Y': generic_feedback,
    'Z': generic_feedback
}



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
        # answer = request.form.get("answer") # form = body
        # print("request.form",request.form, request.json)

        joint_data = request.json
        answer = request.json["answer"]
        # answer = request.form.get("answer") # form = body
        # print("POO",answer, joint_data)
        joint_matrix = []
        for joint in joint_data.keys():
            if joint == "answer":
                continue
            x, y, z = joint_data[joint]['x'], joint_data[joint]['y'], joint_data[joint]['z']
            joint_matrix.append(np.array([x,y,z]))

        input = np.array(joint_matrix).reshape(-1,21,3)
        # 21 data points of the joint positions

        # get the feedback for the corresponding intended answer
        feedback = feedback_fns[answer](input)
        
        prediction = asl_mediapipe_model.predict(input).argmax(axis=-1)[0]
        letter = letters[prediction]

        response = jsonify({'data': letter, 'feedback': feedback})
        response.headers.add('Access-Control-Allow-Origin', '*')

        return response
        
def get_limbs(input):
    thumb = input[1:5]
    pointer = input[5:9]
    middle = input[9:13]
    ring = input[13:17]
    pinkie = input[17:]
    return (thumb, pointer, middle, ring, pinkie)


  
# # A simple function to calculate the square of a number
# # the number to be squared is sent in the URL when we use GET
# # on the terminal type: curl http://127.0.0.1:5000 / home / 10
# # this returns 100 (square of 10)
# @app.route('/home/<int:num>', methods = ['GET'])
# def disp(num):
  
#     return jsonify({'data': num**2})
  
  
# driver function
if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=True)
    # app.run(debug = True, port="5000")