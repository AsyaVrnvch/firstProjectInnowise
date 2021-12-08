import { useState } from "react";
import * as Styles from "./PhotoForm.Styles";
import Error from "../Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { selectAvatar } from "../../../redux/selectors/auth";
import InfoModal from "../../modals/InfoModal/InfoModal";
import { loadingAvatar } from "../../../redux/actions/profile";

const PhotoForm: React.FC = () => {
    const dispatch = useDispatch();
    const avatar = useSelector(selectAvatar);

    const [error, setError] = useState<string>('');

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const selected = e.target.files![0];
        if(selected && types.includes(selected.type)){
            setError('');
            dispatch(loadingAvatar(selected));
        }else{
            setError('Please select an image file (jpeg, jpg or png)');
        }
    }

    return(
        <Styles.PhotoFormContainer>
            <img src={avatar} alt="loading..."/>
            <Styles.DropdownContainer className="plus">
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>+</span>
                </label>
                <div className="output">
                    { error && <Error>{ error }</Error>}
                </div>
            </Styles.DropdownContainer>
        </Styles.PhotoFormContainer>
    )
}

export default PhotoForm;