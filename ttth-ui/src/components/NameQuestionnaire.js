import React, { useEffect, useState } from 'react';
import SpeechDetection from "./SpeechDetectionQuestionnaire";
import Speech from 'react-speech';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import { useNavigate } from 'react-router';


export default function NameQuestionnaire(props) {
    const [name, setName] = useState("");
    const [text, setText] = useState("What is your name?");
    const [surveyStarted, setSurveyStart] = useState(false);
    const navigate = useNavigate();


    // const onEnd = () => {
    //     // You could do something here after speaking has finished
    // };
    // const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    //     onEnd,
    // });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const onNameSaid = (name) => {
        const userName = capitalizeFirstLetter(name);
        setName(userName);
        const utterance = new SpeechSynthesisUtterance(`To confirm, is ${userName} correct?`);
        speechSynthesis.speak(utterance);
    }

    const onConfirmName = (event) => {
        // event.preventDefault();
        props.onSetGlobalName(name);
        const utterance = new SpeechSynthesisUtterance(`Thank you, ${name}.`);
        speechSynthesis.speak(utterance);

        const utterance2 = new SpeechSynthesisUtterance(`Let's start with learning your name!`);
        speechSynthesis.speak(utterance2);

        navigate('/learning_1');
    }

    const handleNameInputChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    // useEffect(() => {
    //     // Say the text line once
    //     speechSynthesis.speak(utterance);
    //     console.log("Said once")
    // })

    // componentDidMount() {
    //     speechSynthesis.speak(utterance);
    //     console.log("Said once")
    // }

    const onRestart = () => {
        const utterance = new SpeechSynthesisUtterance('Please say your name again.');
        speechSynthesis.speak(utterance);
        setName("");
    }

    const onStartSurvey = () => {
        const utterance = new SpeechSynthesisUtterance('To start off, please tell me your name?');
        speechSynthesis.speak(utterance);
        console.log("Said once")
        setSurveyStart(true);
    }

    return (
        <div>
            { !surveyStarted ?
            <div>
                <Button size="small" disabled={surveyStarted} onClick={onStartSurvey} variant="contained">Start</Button>
            </div> :
            <div>
                <p className="line-height-dense">
                    To start off, what is your name?
                    <br/>
                    Please type or say your name in the form of "My name is ..."
                </p>

                <form type="submit" className="line-height-dense" onSubmit={onConfirmName}>
                    <Input id="name" type="text" placeholder='Name' name="name" value={name} onChange={handleNameInputChange}/>
                </form>
                <SpeechDetection 
                    onNameSaid={onNameSaid.bind(this)}
                    onSetGlobalName={props.onSetGlobalName}
                    onConfirmName={onConfirmName.bind(this)}
                    onRestart={onRestart.bind(this)}
                    name={name}
                />
            </div>
            }

        </div>

    )
}
