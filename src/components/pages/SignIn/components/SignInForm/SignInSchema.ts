import * as yup from 'yup'

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^@]+@[^@.]+\.[^@]+$/, 'Email is not in the correct format')
    .required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
})
