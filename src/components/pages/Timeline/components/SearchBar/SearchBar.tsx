import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import * as Styles from './SearchBar.Styles'

interface SearchBarProps extends React.HTMLAttributes<HTMLInputElement> {}

const SearchBar: React.FC<SearchBarProps> = React.memo((props) => {
  return (
    <Styles.SearchBarContainer {...props}>
      <Styles.TextInput
        className="input"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Styles.SearchBarContainer>
  )
})

export default SearchBar
