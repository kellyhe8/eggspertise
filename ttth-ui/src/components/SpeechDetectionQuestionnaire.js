import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function SpeechDetectionQuestionnaire(props) {
  const [guess, setGuess] = useState('')

  const commands = [
    {
      command: "My name is *",
      callback: (name) => {
        resetTranscript()
        props.onNameSaid(name);
      }
    },
    {
        command: ["yes", "correct"],
        callback: () => {
            if (props.name) {
                resetTranscript();
                props.onSetGlobalName(props.name);
            }
        }
    }
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
