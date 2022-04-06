import React from 'react';
import { LeapProvider } from 'react-leap'
import MyApp from './LeapData'
 
const LeapShell = () => (
  <div>
    <LeapProvider options={{enableGestures: true}}>
      <MyApp />
    </LeapProvider>
  </div>
)
 
export default LeapShell