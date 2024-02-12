import React from "react";
import { TextField, Autocomplete } from "@mui/material";

import useApplicationData from "hooks/useApplicationData";
import useSearchValue from "hooks/useSearchValue";

const SearchBar = () => {
  const { setSearchValue, state } = useApplicationData();
  const { photoData } = state;
  const uniqueCities = Array.from(new Set(photoData.map(photo => photo.location.city)));

  useSearchValue();
  
  return (
    <Autocomplete
      disablePortal
      id="search-bar"
      options={uniqueCities}
      onChange={(e, newValue) => {
        setSearchValue(newValue)
      }}
      sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField 
          {...params} 
          label="Search By City" 
          size="small"
        />)
      }
    />
    )
};

export default SearchBar;