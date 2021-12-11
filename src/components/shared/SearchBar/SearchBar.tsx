import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import * as Styles from "./SearchBar.Styles";

interface SearchBarProps extends React.HTMLAttributes<HTMLInputElement> {
  
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <Styles.SearchBarContainer {...props} >
        <TextField className="input"
            InputProps = {{
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}
        />
    </Styles.SearchBarContainer>
  )
};

export default SearchBar;
