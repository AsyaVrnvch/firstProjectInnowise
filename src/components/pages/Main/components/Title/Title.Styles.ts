import styled from 'styled-components';
import Check from '@material-ui/icons/Check';
import Add from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField'

export const TitleInput = styled(TextField)`
  & input {
    font-family: 'Calibri Light';
    font-size: 20px;
    padding: 3px 0px; 
  }
`  

export const CheckIcon = styled(Check)`
  fill: 'green' 
`  

export const AddIcon = styled(Add)`
  fill: '#434d65' 
`  

export const Span = styled.span`
  display: inline-block;
  max-width: 60%;
  text-align: justify;
  overflow-wrap: anywhere;
` 
