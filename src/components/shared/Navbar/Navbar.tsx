import React from 'react'
import { Link } from 'react-router-dom'
import * as Styles from './Navbar.Styles'
import { AppRoutes } from '../../../config/routes'
import { selectIsAuth } from '../../../redux/selectors/auth'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect } from "react"
import { signingOutAction } from '../../../redux/actions/auth'

interface NavBarLinkProps extends React.HTMLAttributes<HTMLElement>{
  to: AppRoutes;
  text: string
}

const NavBarLink: React.FC<NavBarLinkProps> = ({to, text, ...props}) => {
  return (
    <Styles.NavbarLinkContainer {...props}>
      <Link to={to}>{text}</Link>
    </Styles.NavbarLinkContainer>
  )
}

const Navbar: React.FC = React.memo(() => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const history = useHistory()  

  function signOut() {
    dispatch(signingOutAction())
    history.replace('/')
  }

  if (!isAuth) {
    return (
      <Styles.NavbarContainer>
        <NavBarLink to={AppRoutes.Timeline} text="Timeline"/>
        <NavBarLink to={AppRoutes.SignIn} text="SignIn"/>
        <NavBarLink to={AppRoutes.SignUp} text="SignUp"/>
      </Styles.NavbarContainer>
    )
  }

  return (
    <Styles.NavbarContainer>
        <NavBarLink to={AppRoutes.Main} text="Main Page"/>
        <NavBarLink to={AppRoutes.Timeline} text="Timeline"/>
        <NavBarLink to={AppRoutes.CanvasPage} text="Canvas Page"/>
        <NavBarLink 
          to={AppRoutes.SignIn} 
          text="Log out" 
          className="right" 
          onClick={signOut}
        />
    </Styles.NavbarContainer>
  )
})

export default Navbar
