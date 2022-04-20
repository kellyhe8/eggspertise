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

export default function LeftNavCol() {
  // let state = {  } 
  const location = useLocation(); 
  let initState = "home";
  if (location.pathname === "/learn") {
    initState = "learn";
  } else if (location.pathname === "/practice") {
    initState = "practice";
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
        className="left-col"
        orientation="vertical"
      >
        <CustomTab component={Link} to="/" value="home" label="Home" />
        <CustomTab component={Link} to="/learn" value="learn" label="Learn" />
        <CustomTab component={Link} to="/practice" value="practice" label="Practice" />
        {/* <CustomTab component={Link} to="/mediapipe" value="mediapipe" label="mediapipe" /> */}

      </Tabs>
      // {/* <p className="code">Study Modes</p> */}
    //   <ToggleButtonGroup
    //     orientation="vertical"
    //     value={view}
    //     exclusive
    //     onChange={handleChange}
    //   >
    //   <ToggleButton component={Link} to="/" value="home" aria-label="home">
    //     {/* <ViewListIcon /> */}
    //     Home
    //   </ToggleButton>
    //   <ToggleButton component={Link} to="/recognize" value="recognize" aria-label="recognize">
    //     {/* <ViewListIcon /> */}
    //     Recognize
    //   </ToggleButton>
    //   <ToggleButton component={Link} to="/sign" value="sign" aria-label="sign">
    //     {/* <ViewModuleIcon /> */}
    //     Sign
    //   </ToggleButton>
    // </ToggleButtonGroup>
    // </div>
    );
  }
// }
 
// export default LeftNavCol;