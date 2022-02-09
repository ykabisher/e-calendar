import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [period, setPeriod] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth:200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Period</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={period}
          label="Period"
          onChange={handleChange}
        >
          <MenuItem value={10}>Week</MenuItem>
          <MenuItem value={10}>Month</MenuItem>
          <MenuItem value={10}>Year</MenuItem>
          <MenuItem value={10}>2 Years</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
