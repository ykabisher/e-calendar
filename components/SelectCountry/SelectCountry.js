import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { COUNTRY_CODE } from '../../src/trendUtils/trends-call';
import { SelectedCountryContext } from '../../pages';

export default function BasicSelect() {
  const {country, setCountry} = React.useContext(SelectedCountryContext);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth:200 }}>
      <FormControl fullWidth>
        <InputLabel id="country-simple-select-label">Country</InputLabel>
        <Select
          labelId="country-simple-select-label"
          id="country-simple-select"
          value={country}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value={COUNTRY_CODE.US}>United States</MenuItem>
          <MenuItem value={COUNTRY_CODE.UK}>United Kngdom</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
