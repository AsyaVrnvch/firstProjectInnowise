import React, { useEffect, useRef } from 'react'
import Button from '../../../../shared/Button/Button'
import Form from '../../../../shared/Form/Form'
import Input from '../../../../shared/Input/Input'
import Label from '../../../../shared/Label/Label'
import Error from '../../../../shared/Error/Error'
import { useSelector, useDispatch } from 'react-redux'
import { signingInAction } from '../../../../../redux/actions/auth'
import { selectAuthError } from '../../../../../redux/selectors/auth'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInSchema } from './SignInSchema'
import { toast } from 'react-toastify'

const SignInForm: React.FC = () => {
  const dispatch = useDispatch()
  const errorAuth = useSelector(selectAuthError)
  const firstRun = useRef(true)

  const toastAuth = () => toast(errorAuth)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onBlur',
    resolver: yupResolver(SignInSchema),
  })

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    if (errorAuth) toastAuth()
  }, [errorAuth])

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(
      signingInAction({
        email: data.email,
        password: data.password,
      })
    )
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign In</h3>
        <Label>Enter your email:</Label>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input type="text" onChange={onChange} placeholder="Email..." />
          )}
        />
        <Error>{errors.email?.message}</Error>
        <Label>Enter your password:</Label>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input type="password" onChange={onChange} placeholder="Password..." />
          )}
        />
        <Error>{errors.password?.message}</Error>
        <Button>Sign in</Button>
      </Form>
    </div>
  )
}

export default SignInForm
