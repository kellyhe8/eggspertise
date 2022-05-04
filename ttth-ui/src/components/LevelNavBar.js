import * as React from 'react';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLocation } from 'react-router-dom';

// import Box from '@mui/material/Box';

const CustomTab = withStyles({
  root: {
    textTransform: "none"
  }
})(Tab);

export default function LevelNavBar() {
  // let state = {  } 
  const location = useLocation(); 
  let initState = "learning_1";
  if (location.pathname === "/reading_1") {
    initState = "reading_1";
  }
  else if (location.pathname === "/speaking_1") {
    initState = "speaking_1";
  }
  const [value, setValue] = React.useState(initState);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // render() { 
    return (
    // <div className="left-col">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="navigation-tabs"
        className="column"
        orientation="horizontal"
      > 
        <CustomTab component={Link} to="/learning_1" value="learning_1" label="Learn" />
        <CustomTab component={Link} to="/reading_1" value="reading_1" label="Read" />
        <CustomTab component={Link} to="/speaking_1" value="speaking_1" label="Speak" />
        {/* <CustomTab component={Link} to="/mediapipe" value="mediapipe" label="mediapipe" /> */}

      </Tabs>
    );
  }
// }
 
// export default LeftNavCol;