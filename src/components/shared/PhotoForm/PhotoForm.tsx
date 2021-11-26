import { useState } from "react";
import * as Styles from "./PhotoForm.Styles";
import Error from "../Error/Error";
import { useDispatch } from "react-redux";
import { loadingImage } from "../../../redux/actions/images";

const PhotoForm: React.FC = () => {
// const [file, setFile] = useState({
//     name:''
// });
const [error, setError] = useState('');

const dispatch = useDispatch();

const types = ['image/png','image/jpeg','image/jpg'];

const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files![0];

    if(selected && types.includes(selected.type)){
        setError('');
        // setFile(selected);
        dispatch(loadingImage(selected));

    }else{
        setError('Please select an image file (jpeg, jpg or png)');
        // setFile({ name:'' });
    }
}

    return(
        <Styles.PhotoFormContainer>
            <label>
                <input type="file" onChange = {changeHandler}/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <Error>{error}</Error>}
                {/* {file && <div>{file.name}</div>} */}
            </div>
        </Styles.PhotoFormContainer>
    )
}

export default PhotoForm;