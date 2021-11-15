import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
email: yup
    .string()
    .matches(/^[^@]+@[^@.]+\.[^@]+$/, "Email is not in the correct format")
    .required("Email is a required field"),
password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(12, "Password must be maximum 12 characters")
    .required("Password is a required field"),
repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords must match")
    .required("Repet password is a required field"),
username: yup
    .string()
    .min(6, "Username must be at least 6 characters long")
    .max(20, "Username must be maximum 20 characters")
    .required("Username is a required field")
})