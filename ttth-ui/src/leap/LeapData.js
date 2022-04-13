import React from 'react'
import { withLeapContainer } from 'react-leap'
 
const MyApp = ({frame}) => {
  const hands = frame.hands
  
  console.log(frame);
  // process data from frame
 
  return (
    <div>
        {frame}
    </div>
  )
}
 
export default withLeapContainer(MyApp)