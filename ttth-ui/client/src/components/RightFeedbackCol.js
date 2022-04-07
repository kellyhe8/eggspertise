import React, { useState } from "react";
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function RightFeedbackCol() {
  // let state = { 
  //   message: ""
  //  } 
  const [feedback, setFeedback] = useState(["good job"]);
  
  const handleResetFeedback = () => {
    setFeedback([])
  }

  const handleAddFeedback = (fb) => {
    setFeedback(fb => [...feedback, fb])
  }

  let array = feedback.map(f => (<li className="feedback-list" key={f}>{f}</li>));
  // for(let i = 0; i < feedback.length; i++) {
  //   array.push(
  //     <li className="feedback-list">{feedback[i]}</li>
  //   );
  // }
  // console.log(array);

  return (
    <div className="right-col">
      <p>Feedback</p>
      {array}
    </div>);
  }
// }
 
// export default LeftNavCol;