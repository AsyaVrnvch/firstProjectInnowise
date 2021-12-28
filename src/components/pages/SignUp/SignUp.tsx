import SignUpForm from './components/SignUpForm/SignUpForm'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../../redux/selectors/auth'
import { useHistory } from 'react-router-dom'
import { AppRoutes } from '../../../config/routes'

const SignUp: React.FC = () => {
  const isAuth = useSelector(selectIsAuth)
  const history = useHistory()

  useEffect(() => {
    if (isAuth) {
      history.replace(AppRoutes.Main)
    }
  }, [isAuth])

  return <SignUpForm />
}

export default SignUp
