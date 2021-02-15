import React from 'react';
import Box from '@material-ui/core/Box';

function MyTabs(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default MyTabs;