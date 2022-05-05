import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { useNavigate } from 'react-router';


export default function SpeechDetectionQuestionnaire(props) {
  const [guess, setGuess] = useState('')

  const navigate = useNavigate();

  const commands = [
    {
      command: "My name is *",
      callback: (name) => {
        resetTranscript();
        props.onNameSaid(name);
      }
    },
    {
        command: ["yes", "correct"],
        callback: () => {
            if (props.name) {
                resetTranscript();
                props.onConfirmName();
                // props.onSetGlobalName(props.name);
                // navigate('/learning_1');

                // const utterance = new SpeechSynthesisUtterance(`Thank you, ${props.name}.`);
                // speechSynthesis.speak(utterance);
        
                // const utterance2 = new SpeechSynthesisUtterance(`Let's start with learning your name!`);
                // speechSynthesis.speak(utterance2);
        
                // navigate('/learning_1');
            }
        }
    },
    {
      command: ["no","incorrect"],
      callback: () => {
          if (props.name) {
              resetTranscript();
              props.onRestart();
          }
      }
  },
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening
  } = useSpeechRecognition({ commands });


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (browserSupportsContinuousListening) {
    SpeechRecognition.startListening({ continuous: true })
    // console.log(listening);
    // console.log(isMicrophoneAvailable);
    // console.log("hi");
  } else {
    // Fallback behaviour
  }

  return (
    <div className='row'>
      {/* <Button onClick={resetTranscript} variant="outlined" size="small">Reset Mic</Button> */}
      {/* { listening ?       
        <div>
          <p className='line-height-dense'> Type your name</p>
          <p className='line-height-dense'> - OR - </p>
          <p className='line-height-dense'> Listening for a response in <br/> the form of "My name is ..."</p>
        </div> :
      ""
    }       */}
    </div>
  );
};
