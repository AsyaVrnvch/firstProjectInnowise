import { AnyAction } from 'redux'

export const errorText = (payload: AnyAction) => {
    let text = "";
    switch (payload.code) {
        case "auth/email-already-in-use":
            text = "The email address is already in use by another account"
            break 

        case "auth/network-request-failed":
            text = "Network error"
            break 
            
        case "auth/wrong-password":
            text = "The password is invalid"
            break 
            
        case "auth/user-not-found":
            text = "This user is not registered"
            break 
            
        default: 
            text = payload.message
            break 
    }
    return text
}

export const successSignUp = "User registered successfully"