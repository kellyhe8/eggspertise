# Talk to the Hand
Multimodal sign language learning platform.

## Table of Contents
- `/flask-api` - Flask server for running a local backend for our Web application
  - `*.h5` files - saved Keras models that can be loaded and used to predict ASL signs
  - server.py - Flask backend that receives post requests from Web application
  - tfjs_asl_model - Initial ASL model using raw image input data (not used in final backend)
  - asl_alphabet_mediapipe.ipynb - Python notebook for training our ASL model based on mediapipe hand joint inputs
- `/ttth-ui` - ReactJS front end for building our UI
  - `/node_modules` - Modules imported to use in react (auto generated after running `npm i`)
  - `/public` - HTML and favicons
  - `/src` - React and css components for building the web application
    - `/images` - Images to use within the application to guide users/offer hints
    - `/components` - React components that build the web UI, integrates media pipe, react speech recognition, and speech synthesis 
    - Javascript files: (`App.js`, `Home.js`, `Learn.js`, `Read.js`, `Speak.js`, `Survey.js`, `index.js`) - Different pages/routes that make up our UI
    - `App.css`, `index.css` files - CSS files for styling the UI


## Running the application
We are running it on:
- python 3
- node v14.17.6

- Open 2 terminals; one for the frontend and one for the backend
  - for the backend:
    - go to the `/flask-api` directory: `cd flask-api`
    - install requirements: `pip install -r requirements.txt`
    - run the server: `python server.py`

  - for the front end:
    - `cd ttth-ui/client`
    - `npm i`
    - `npm start`
    - allow webcam and microphone access when prompted
  - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

