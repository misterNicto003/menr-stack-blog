import React from 'react'
import "../navbar.scss"
import Button from '../../Forms/Button/Button'

const NavAuth = () => {
  return (
    <div className='navbar_auth'>

      <Button to='/login'>Войти</Button>
      <Button to='/register' variant='outline'>Регистрация </Button>
    </div>
  )
}

export default NavAuth