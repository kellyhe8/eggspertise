import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function SpeechDetection(props) {

    const text =  props.text;


    const onEnd = () => {
        // You could do something here after speaking has finished
    };
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
    });


    useEffect(() => {
        // Say the text line once
        if (supported && !speaking) {
            speak(text);
        }
    })


    return (
        <div>
            {!supported && (
            <p>
                Oh no, it looks like your browser doesn&#39;t support Speech
                Synthesis.
            </p>
            )}

        </div>

    );
}