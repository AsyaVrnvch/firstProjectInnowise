import React from "react";
import * as Styles from "./Title.Styles";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Check from "@material-ui/icons/Check";
import Add from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import { selectTitle } from "../../../redux/selectors/profile";
import { changingTitle } from "../../../redux/actions/profile";

interface TitleProps{

}

const Title: React.FC<TitleProps> = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState<string>('');
    const [change, setChange] = useState<boolean>(false);
    const [input, setInput] = useState<boolean>(false);

    const titleText = useSelector(selectTitle);

    const handleClick = (value:boolean) => () => {
        if(!value){
            if(change) dispatch(changingTitle(title));
        } else {
            setTitle(titleText);
        }
        setInput(value);
        setChange(false);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle((event.target as HTMLInputElement).value);
        setChange(true);
    }

    return (
        <Styles.TitleContainer>
            {input ? (
                <div>
                    <TextField onChange = {handleChange} value={title} className="titleInput"/>
                    <Check style = {{ fill:"green" }} onClick={handleClick(false)}/>
                </div>
            ) : (
                <div>
                    <span className="title">{titleText || "Welcome"}</span>
                    <Add style = {{ fill:"#434d65" }} onClick={handleClick(true)}/>
                </div>
            ) }
        </Styles.TitleContainer>
    ); 
};

export default Title;