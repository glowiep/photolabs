import React from "react";
import { TextField, Autocomplete } from "@mui/material";

import useApplicationData from "hooks/useApplicationData";


const SearchBar = () => {
  const { setSearchValue, state } = useApplicationData();
  const { photoData } = state;
  const uniqueCities = Array.from(new Set(photoData.map(photo => photo.location.city)));

  return (
    <Autocomplete
      disablePortal
      id="search-bar"
      options={uniqueCities}
      onChange={(e, newValue) => {
        console.log("newValue",newValue)
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

/**
 * <TextField 
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Search by City"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
 */