import { useEffect, useRef } from 'react'
import Button from '../../../../shared/Button/Button'
import Form from '../../../../shared/Form/Form'
import Input from '../../../../shared/Input/Input'
import Label from '../../../../shared/Label/Label'
import Error from '../../../../shared/Error/Error'
import { useSelector, useDispatch } from 'react-redux'
import { signUpAction } from '../../../../../redux/actions/auth'
import { selectRegistrationInfo } from '../../../../../redux/selectors/auth'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUpSchema } from './SignUpSchema'
import { toast } from 'react-toastify'

const SignUpForm: React.FC = () => {
  const registrationInfo = useSelector(selectRegistrationInfo)
  const toastReg = () => toast(registrationInfo)
  const firstRun = useRef(true)

  const dispatch = useDispatch()

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
    }
    else{
      if (registrationInfo) toastReg()
    }
  }, [registrationInfo])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onBlur',
    resolver: yupResolver(SignUpSchema),
  })

  const onSubmit = (data: {
    email: string
    password: string
    repeatPassword: string
    username: string
  }) => {
    dispatch(
      signUpAction({
        email: data.email,
        password: data.password,
        username: data.username,
      })
    )
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign Up</h3>
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
        <Label>Repeate your email:</Label>
        <Controller
          control={control}
          name="repeatPassword"
          render={({ field: { onChange } }) => (
            <Input type="password" onChange={onChange} placeholder="Repeate password..." />
          )}
        />
        <Error>{errors.repeatPassword?.message}</Error>
        <Label>Enter your username:</Label>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange } }) => (
            <Input type="text" onChange={onChange} placeholder="Username..." />
          )}
        />
        <Error>{errors.username?.message}</Error>
        <Button>Sign up</Button>
      </Form>
    </div>
  )
}

export default SignUpForm
