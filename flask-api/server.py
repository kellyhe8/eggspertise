# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request

import skimage
from skimage.transform import resize
import scipy

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

def get_limbs(input):
    # format ([x1, x2, x3, ...], [y1, y2, y3, ...])
    thumb = ([p[0] for p in input[1:5]], [p[1] for p in input[1:5]])
    pointer = ([p[0] for p in input[5:9]], [p[1] for p in input[5:9]])
    # print("pointer coords", [(p[0],p[1]) for p in input[5:9]])
    middle = ([p[0] for p in input[9:13]], [p[1] for p in input[9:13]])
    # print("middle coords", [(p[0],p[1]) for p in input[9:13]])
    ring = ([p[0] for p in input[13:17]], [p[1] for p in input[13:17]])
    # print("ring coords", [(p[0],p[1]) for p in input[13:17]])
    pinkie = ([p[0] for p in input[17:]], [p[1] for p in input[17:]])
    # print("pinkie coords", [(p[0],p[1]) for p in input[17:]])
    return (thumb, pointer, middle, ring, pinkie)

# Used for checking if two line segments intersect
def ccw(A,B,C):
  	return (C[1]-A[1])*(B[0]-A[0]) > (B[1]-A[1])*(C[0]-A[0])

def intersect(A,B,C,D):
	return ccw(A,C,D) != ccw(B,C,D) and ccw(A,B,C) != ccw(A,B,D)



def check_A(input):
    thumb, pointer, middle, ring, pinkie = get_limbs(input)
    # print("THUMB",thumb)
    slope, intercept, r_value, p_value, std_err = scipy.stats.linregress(thumb[0], thumb[1])
    # standard error of 0.05, 0.2 is ok is really good
    # stderr of > 1, 1.5, 1.8, 2 is probably a curve
    # print(np.polyfit(thumb[0], thumb[1], 1))
    # print(slope, intercept, r_value, p_value, "STANDARD ERR", std_err)

    # slope1, intercept1, r_value1, p_value1, std_err1 = scipy.stats.linregress(pointer[0], pointer[1])
    
    for i in range(len(thumb[0])-1): # for each of the joint line segments
        for j in range(len(pointer[0])-1):
            A = (thumb[0][i], thumb[1][i])
            B = (thumb[0][i+1], thumb[1][i+1])
            C = (pointer[0][j], pointer[1][i])
            D = (pointer[0][i+1], pointer[1][i+1])
            if intersect(A,B,C,D):
                return "Try to move your thumb more on the side of your hand"
    if std_err > 1.2:
        return "Try straightening your thumb more"

    return "Try to sign A again"

def check_B(input):
    thumb, pointer, middle, ring, pinkie = get_limbs(input)
    # Check the straightness of each finger
    slope1, intercept1, r_value1, p_value1, std_err1 = scipy.stats.linregress(pointer[0], pointer[1])
    # print("pointer ERR", std_err1)
    if std_err1 > 0.7:
        return "Straighten out your pointer finger"
    slope2, intercept2, r_value2, p_value2, std_err2 = scipy.stats.linregress(middle[0], middle[1])
    # print("middle ERR", std_err2)
    if std_err2 > 0.7:
        return "Straighten out your middle finger"
    slope3, intercept3, r_value3, p_value3, std_err3 = scipy.stats.linregress(ring[0], ring[1])
    # print("ring ERR", std_err3)
    if std_err3 > 0.7:
        return "Straighten out your ring finger"
    slope4, intercept4, r_value4, p_value4, std_err4 = scipy.stats.linregress(pinkie[0], pinkie[1])
    # print("pinkie ERR", std_err4)
    if std_err4 > 0.7:
        return "Straighten out your pinkie finger"
    return "Try to sign B again"

def check_S(input):
    thumb, pointer, middle, ring, pinkie = get_limbs(input)
    slope, intercept, r_value, p_value, std_err = scipy.stats.linregress(thumb[0], thumb[1])
    intersects = False
    
    for i in range(len(thumb[0])-1): # for each of the joint line segments
        for j in range(len(pointer[0])-1):
            A = (thumb[0][i], thumb[1][i])
            B = (thumb[0][i+1], thumb[1][i+1])
            C = (pointer[0][j], pointer[1][i])
            D = (pointer[0][i+1], pointer[1][i+1])
            if intersect(A,B,C,D):
                intersects = True
                break
    # print("inters", intersects)
    if not intersects: 
        return "Tuck your thumb in across your fist"
    # if std_err > 1.2:
    #     return "Try straightening your thumb more"
    
    return "Try to sign S again"

def generic_feedback(input):
    return ""
  
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
        
        prediction = asl_mediapipe_model.predict(input).argmax(axis=-1)[0]
        letter = letters[prediction]
        feedback = "Good job!"
        if prediction != letter:
            # feedback = check_S(input[0])
            feedback = feedback_fns[answer](input[0])
        response = jsonify({'data': letter, 'feedback': feedback})
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
    app.run(host="localhost", port=3001, debug=True)
    # app.run(debug = True, port="5000")