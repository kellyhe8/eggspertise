import * as React from 'react';
// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link } from 'react-router-dom';

export default function LeftNavCol() {
  // let state = {  } 
  let [view, setView] = React.useState('list');

  let handleChange = (event, nextView) => {
    setView(nextView);
  };

  // render() { 
    return (<div className="left-col-margin">
      <p className="code">Study Modes</p>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
      <ToggleButton component={Link} to="/recognize" value="Recognize" aria-label="recognize">
        {/* <ViewListIcon /> */}
        Recognize
      </ToggleButton>
      <ToggleButton component={Link} to="/sign" value="Sign" aria-label="sign">
        {/* <ViewModuleIcon /> */}
        Sign
      </ToggleButton>
    </ToggleButtonGroup>
    </div>);
  }
// }
 
// export default LeftNavCol;